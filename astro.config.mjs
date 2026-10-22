// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import feedbackPlugin from './feedback-plugin.mjs';
import adminGatePlugin from './admin-gate-plugin.mjs';

// https://astro.build/config
export default defineConfig({
  // The site editor is a static file (public/admin/editor.html); /admin points to it.
  redirects: {
    '/admin': '/admin/editor.html',
  },
  // Domains allowed to reach `npm run dev` / `astro preview` (e.g. a Cloudflare Tunnel for testing).
  // Not needed for the real deploy, where the host serves the built `dist/` folder.
  server: {
    allowedHosts: ['umssbc.jb-walker.net'],
  },
  vite: {
    // feedbackPlugin: saves notes from the on-page Feedback button to feedback/*.json (`npm run dev` only).
    // adminGatePlugin: access code for /admin through the tunnel, and forwards editing to `npm run cms` (`npm run dev` only).
    plugins: [tailwindcss(), feedbackPlugin(), adminGatePlugin()]
  }
});
