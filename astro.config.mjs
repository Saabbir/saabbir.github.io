import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://saabbir.github.io',
  output: 'static',
  trailingSlash: 'always',
  prefetch: true,
});
