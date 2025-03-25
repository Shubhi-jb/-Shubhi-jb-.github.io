const CACHE_NAME = 'crisis-hub-cache-v1';
const urlsToCache = [
  '/',
  '/styles1.css',
  '/script1.js',
  '/enhancements.css',
  '/enhancements.js' // Corrected
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});