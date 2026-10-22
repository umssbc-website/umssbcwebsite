// Testing access to the /admin editor through the dev server (e.g. the Cloudflare Tunnel).
// - /admin/* and /__decap/* need an access code. The code lives in .env (ADMIN_CODE=…), which git ignores.
// - /__decap/api/v1 forwards to the local editor helper (`npm run cms`, port 8081), so people who entered the
//   code can edit through the tunnel. Their edits change the real files on this computer (git can undo them).
// - Opening the site directly on this computer (http://localhost:4321) skips the code.
// Runs only inside `npm run dev`. The live site uses GitHub login instead (see README → Going live).
import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { request } from 'node:http';
import { fileURLToPath } from 'node:url';

const COOKIE = 'ssc_admin';
const MAX_TRIES = 5; // wrong codes per IP …
const WINDOW_MS = 10 * 60_000; // … per 10 minutes
const HELPER = { host: '127.0.0.1', port: Number(process.env.DECAP_PORT || 8081) };

function readCode() {
  if (process.env.ADMIN_CODE) return process.env.ADMIN_CODE.trim();
  try {
    const env = readFileSync(fileURLToPath(new URL('./.env', import.meta.url)), 'utf8');
    const line = env.split(/\r?\n/).find((l) => /^\s*ADMIN_CODE\s*=/.test(l));
    return line ? line.split('=').slice(1).join('=').trim().replace(/^["']|["']$/g, '') : '';
  } catch {
    return '';
  }
}

const secret = randomBytes(32); // new on every restart, which signs everyone out
const token = (code) => createHmac('sha256', secret).update(code).digest('hex');
const same = (a, b) => a.length === b.length && timingSafeEqual(Buffer.from(a), Buffer.from(b));
const failures = new Map(); // ip -> timestamps of wrong codes

const ipOf = (req) => String(req.headers['cf-connecting-ip'] || req.socket.remoteAddress || 'local');
// Direct on this computer (not through the tunnel): no code needed.
const isLocal = (req) => !req.headers['cf-connecting-ip'] && /^(localhost)(:\d+)?$/.test(String(req.headers.host || ''));
const isHttps = (req) => req.headers['x-forwarded-proto'] === 'https' || String(req.headers['cf-visitor'] || '').includes('https');

function cookies(req) {
  return Object.fromEntries(
    String(req.headers.cookie || '')
      .split(';')
      .map((c) => c.trim().split('='))
      .filter(([k]) => k)
      .map(([k, ...v]) => [k, decodeURIComponent(v.join('='))]),
  );
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function page(res, status, message = '', next = '/admin') {
  res.statusCode = status;
  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.setHeader('cache-control', 'no-store');
  res.end(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex"><title>Admin access | UMaine SSC</title>
<link rel="icon" type="image/png" href="/favicon.png">
<style>
  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f7f9fc;color:#1a2230;font:16px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;padding:16px}
  form{width:min(22rem,100%);background:#fff;border:1px solid #e3e9f2;border-radius:12px;padding:24px;box-sizing:border-box}
  img{width:56px;height:56px;display:block;margin-bottom:12px}
  h1{margin:0 0 4px;font:600 1.5rem/1.2 Georgia,serif;color:#042141}
  p{margin:0 0 16px;color:#5b6678;font-size:.95rem}
  label{display:block;font-weight:600;color:#042141;font-size:.9rem;margin-bottom:6px}
  input{width:100%;box-sizing:border-box;font-size:1.4rem;letter-spacing:.3em;text-align:center;padding:10px;border:1px solid #c9d3e1;border-radius:8px}
  input:focus{outline:2px solid #002a5c;outline-offset:2px}
  button{margin-top:16px;width:100%;min-height:44px;border:0;border-radius:999px;background:#042141;color:#fff;font-weight:600;font-size:.95rem;cursor:pointer}
  button:hover{background:#002a5c}
  .err{color:#b91c1c;font-weight:600}
  a{color:#042141}
</style></head>
<body><form method="post" action="/__admin-login">
  <img src="/favicon.png" alt="">
  <h1>Site editor</h1>
  <p>Enter the access code to open the editor.</p>
  ${message ? `<p class="err" role="alert">${esc(message)}</p>` : ''}
  <label for="code">Access code</label>
  <input id="code" name="code" inputmode="numeric" autocomplete="one-time-code" maxlength="32" required autofocus>
  <input type="hidden" name="next" value="${esc(next)}">
  <button type="submit">Open the editor</button>
  <p style="margin:16px 0 0"><a href="/">Back to the site</a></p>
</form></body></html>`);
}

async function readBody(req, limit = 4096) {
  let size = 0;
  const chunks = [];
  for await (const chunk of req) {
    size += chunk.length;
    if (size > limit) break;
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

function forward(req, res, path) {
  const headers = { ...req.headers, host: `${HELPER.host}:${HELPER.port}` };
  delete headers.cookie;
  const upstream = request({ ...HELPER, method: req.method, path, headers }, (up) => {
    res.writeHead(up.statusCode || 502, up.headers);
    up.pipe(res);
  });
  upstream.on('error', () => {
    if (!res.headersSent) {
      res.statusCode = 502;
      res.setHeader('content-type', 'application/json');
    }
    res.end(JSON.stringify({ error: 'The editor helper is not running. Start it with `npm run cms` on the testing computer.' }));
  });
  req.pipe(upstream);
}

function gate(code) {
  return async (req, res, next) => {
    const url = new URL(req.url || '/', 'http://x');
    const path = url.pathname;

    if (path === '/__admin-login' && req.method === 'POST') {
      const form = new URLSearchParams(await readBody(req));
      const target = (form.get('next') || '/admin').startsWith('/admin') ? form.get('next') || '/admin' : '/admin';
      const ip = ipOf(req);
      const now = Date.now();
      const recent = (failures.get(ip) || []).filter((t) => now - t < WINDOW_MS);
      if (recent.length >= MAX_TRIES) return page(res, 429, 'Too many wrong codes. Wait 10 minutes and try again.', target);
      if (!code) return page(res, 503, 'Admin access is not set up on this computer yet (no ADMIN_CODE in .env).', target);
      const given = String(form.get('code') || '').trim();
      if (!same(token(given), token(code))) {
        recent.push(now);
        failures.set(ip, recent);
        return page(res, 401, `That code didn't work. ${MAX_TRIES - recent.length} tries left.`, target);
      }
      failures.delete(ip);
      res.statusCode = 303;
      res.setHeader('set-cookie', `${COOKIE}=${token(code)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=43200${isHttps(req) ? '; Secure' : ''}`);
      res.setHeader('location', target);
      return res.end();
    }

    const guarded = path === '/admin' || path.startsWith('/admin/') || path.startsWith('/__decap');
    if (!guarded) return next();

    const allowed = isLocal(req) || (code && same(cookies(req)[COOKIE] || '', token(code)));
    if (!allowed) {
      if (path.startsWith('/__decap')) {
        res.statusCode = 401;
        res.setHeader('content-type', 'application/json');
        return res.end(JSON.stringify({ error: 'Enter the access code at /admin first.' }));
      }
      return page(res, 401, '', path + url.search);
    }

    // Tells the editor page that editing can go through this server.
    if (path === '/__decap/status') {
      res.setHeader('content-type', 'application/json');
      res.setHeader('cache-control', 'no-store');
      return res.end('{"ok":true}');
    }
    if (path.startsWith('/__decap/')) return forward(req, res, path.slice('/__decap'.length) + url.search);
    return next();
  };
}

export default function adminGatePlugin() {
  return {
    name: 'umssc-admin-gate',
    configureServer(server) {
      const code = readCode();
      if (!code) server.config.logger.warn('[admin-gate] No ADMIN_CODE in .env: /admin only works on this computer (localhost).');
      // First in line, so the code check runs before the editor files or pages are served.
      server.middlewares.stack.unshift({ route: '', handle: gate(code) });
    },
  };
}
