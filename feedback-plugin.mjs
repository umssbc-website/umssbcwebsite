// Testing feedback: receives notes from the on-page Feedback button (src/components/FeedbackWidget.astro)
// and saves each one as feedback/<date>-<id>.json (plus <date>-<id>.jpg when a screenshot is attached). Officers review them in /admin → Testing Feedback.
// Runs only inside `npm run dev` (e.g. through the Cloudflare Tunnel). `astro preview` and the real host have
// no /__feedback endpoint, so the button hides itself there.
import { mkdir, writeFile } from 'node:fs/promises';
import { randomBytes } from 'node:crypto';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('./feedback/', import.meta.url));
const TYPES = ['bug', 'suggestion', 'question', 'looks-good'];
const MAX_BODY = 4_000_000; // bytes (room for a screenshot)
const MAX_SHOT = 3_000_000; // bytes after decoding
const recent = new Map(); // ip -> timestamps, light rate limit

const clean = (value, max) => String(value ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
const cleanText = (value, max) => String(value ?? '').replace(/\r\n/g, '\n').replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, ' ').trim().slice(0, max);

const send = (res, status, body) => {
  res.statusCode = status;
  res.setHeader('content-type', 'application/json');
  res.setHeader('cache-control', 'no-store');
  res.end(JSON.stringify(body));
};

const stamp = (d) => {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
};

async function handler(req, res, next) {
  if (!req.url || !req.url.startsWith('/__feedback')) return next();
  if (req.method === 'GET') return send(res, 200, { ok: true });
  if (req.method !== 'POST') return send(res, 405, { error: 'Method not allowed' });

  const ip = req.headers['cf-connecting-ip'] || req.socket.remoteAddress || 'local';
  const now = Date.now();
  const times = (recent.get(ip) || []).filter((t) => now - t < 60_000);
  if (times.length >= 10) return send(res, 429, { error: 'Too many notes in a minute. Try again shortly.' });

  let size = 0;
  const chunks = [];
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY) return send(res, 413, { error: 'Note is too long.' });
    chunks.push(chunk);
  }

  let input;
  try {
    input = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    return send(res, 400, { error: 'Bad request' });
  }

  const comment = cleanText(input.comment, 4000);
  if (!comment) return send(res, 400, { error: 'Please write a comment.' });

  const date = new Date();
  const entry = {
    status: 'new',
    type: TYPES.includes(input.type) ? input.type : 'bug',
    comment,
    tester: clean(input.tester, 80),
    page: clean(input.page, 300) || '/',
    pageTitle: clean(input.pageTitle, 200),
    element: clean(input.element, 300),
    selector: clean(input.selector, 500),
    device: clean(input.device, 200),
    created: stamp(date),
    notes: '',
  };

  const id = `${stamp(date).replace(/[ :]/g, '-')}-${randomBytes(3).toString('hex')}`;

  // Optional screenshot: a JPEG data URL from the widget, saved next to the note as <id>.jpg.
  let shot = null;
  const match = typeof input.screenshot === 'string' && /^data:image\/jpeg;base64,([A-Za-z0-9+/=]+)$/.exec(input.screenshot);
  if (match) {
    const bytes = Buffer.from(match[1], 'base64');
    if (bytes.length <= MAX_SHOT && bytes[0] === 0xff && bytes[1] === 0xd8) shot = bytes;
  }
  if (shot) entry.screenshot = `${id}.jpg`;

  try {
    await mkdir(dir, { recursive: true });
    if (shot) await writeFile(join(dir, `${id}.jpg`), shot, { flag: 'wx' });
    await writeFile(join(dir, `${id}.json`), JSON.stringify(entry, null, 2) + '\n', { flag: 'wx' });
  } catch (error) {
    console.error('[feedback] could not save note:', error);
    return send(res, 500, { error: 'Could not save the note.' });
  }

  times.push(now);
  recent.set(ip, times);
  return send(res, 201, { ok: true, id });
}

export default function feedbackPlugin() {
  return {
    name: 'umssc-testing-feedback',
    // Put the handler first so Astro's page router doesn't answer /__feedback with a 404.
    configureServer(server) {
      server.middlewares.stack.unshift({ route: '', handle: handler });
    },
  };
}
