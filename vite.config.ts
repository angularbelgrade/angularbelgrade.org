/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import { speakersResource } from './src/app/resources/speakers.resource';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      static: true,
      prerender: {
        routes: async () => [
          '/',
          '/team',
          '/code-of-conduct',
          '/terms-and-privacy',
          '/not-found',
          ...speakersResource.getSpeakers().map(({ id }) => `/speakers/${id}`),
        ],
        sitemap: { host: 'https://angularbelgrade.org/' },
      },
      nitro: { serveStatic: false },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
