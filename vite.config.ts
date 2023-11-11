import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import  webfontDownload from 'vite-plugin-webfont-dl'
import { VitePWA } from 'vite-plugin-pwa'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

const weekInSecond = 7 * 24 * 60 * 60
// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'MUSHAF_APP',
  plugins: [
    react(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap',
      'https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap',
    ]),
    chunkSplitPlugin({
      strategy:'single-vendor',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      minify: true,
      includeAssets: '**/*',
      manifest: {
        name: 'Mushaf App',
        theme_color: '#00AD7C',
        background_color: '#1c1917',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        short_name: 'Mushaf App',
        orientation: 'portrait-primary',
        description: 'Mushaf App bukan sekadar aplikasi biasa ini adalah teman setiamu dalam menjalani kehidupan berlandaskan nilai-nilai agama. Dengan bangga, kami menghadirkan padamu keistimewaan akses Al-Quran, Doa-doa seperti doa harian dan doa tahlil serta bonus konten yaitu 99 Asmaul-Alhusna. Rasakan kehadiran-Nya kapan pun dan di mana pun, dalam genggamanmu.',
        icons: [
          {
            src: 'android/android-launchericon-48-48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-72-72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-96-96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-144-144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'ios/50.png',
            sizes: '50x50',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/100.png',
            sizes: '100x100',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/256.png',
            sizes: '256x256',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'maskable/maskable_icon_x48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'maskable/maskable_icon_x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'maskable/maskable_icon_x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'maskable/maskable_icon_x128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'maskable/maskable_icon_x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**\/*.{js,css,html,woff,woff2,ttf,svg,png,jpg,ico}'],
        runtimeCaching: [
          {
          urlPattern: ({url}) => url.pathname.includes('/surahs') ,
          handler: 'CacheFirst',
          options: {
            cacheName: 'quran-api',
            expiration: {
              maxAgeSeconds: weekInSecond,
              purgeOnQuotaError: true,
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: ({url}) => url.pathname.includes('doaharian'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'doa-harian-api',
            expiration: {
              maxAgeSeconds: weekInSecond,
              purgeOnQuotaError: true,
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: ({url}) => url.pathname.includes('tahlil'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'doa-tahlil',
            expiration: {
              maxAgeSeconds: weekInSecond,
              purgeOnQuotaError: true,
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: ({url}) => url.pathname.includes('asmaulhusna'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'asmaulhusna-api',
            expiration: {
              maxAgeSeconds: weekInSecond,
              purgeOnQuotaError: true,
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
      }
    })
  ],
})
