import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dunhuangwithin.com',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  trailingSlash: 'always',
});
