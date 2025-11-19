/* KODEX Service Worker – cache-first for offline use */
const CACHE = 'kodex-v1';
const FILES = [
  '/',
  '/index.html',
  '/styles.css',
  '/tarot-cards.js',
  '/rk-protocol.js',
  '/cosmic-timing.js',
  '/payment.js',
  '/app.js',
  '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});
