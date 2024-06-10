/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
  ], // plugins

  server: {
    open: true,
  }, // server

  test: {
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reportsDirectory: './dist/tests/coverage',
      exclude: [
        '.eslintrc.cjs',
        'playwright.config.ts',
        '.storybook/',
        'scripts/',
        'src/**/*.stories.tsx',
        'test/'
      ],
    },
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
  }, // test
}); // defineConfig
