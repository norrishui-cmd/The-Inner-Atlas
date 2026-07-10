import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dunhuangwithin.com',
  integrations: [sitemap({
    filter: (page) => !['/404', '/privacy/', '/terms/'].some((path) => page.includes(path)),
  })],
  trailingSlash: 'always',
});
