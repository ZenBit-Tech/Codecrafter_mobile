import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { fileURLToPath } from 'url';
import { VitePWA } from 'vite-plugin-pwa';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: true,
        titleProp: true,
      },
      include: '*/*.svg',
    }),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'serviceWorker.ts',
      registerType: 'autoUpdate',
      injectManifest: {
        swDest: 'dist/serviceWorker.js',
      },
      manifest: {
        short_name: 'CC Delivery',
        name: 'Code Crafter',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#000000',
        description: 'Delivery App',
        icons: [
          {
            src: 'icons/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/apple-touch-icon-180-180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: 'icons/android-launchericon-144-144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icons/android-launchericon-96-96.png',
            sizes: '96x96',
            type: 'image/png',
          },
        ],
        prefer_related_applications: true,
      },
    }),
  ],
  resolve: {
    alias: {
      src: '/src',
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
});
