import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // MVP: Static output for Cloudflare Pages
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  // Cloudflare adapter ready for Phase 2 (SSR)
  // Uncomment when needed:
  // output: 'server',
  // adapter: cloudflare(),
});
