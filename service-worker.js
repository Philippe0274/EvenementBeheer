const CACHE_NAME = 'kassa-tool-v1';
const urlsToCache = [
  './',
  './index.html',
  './logo.png',
  './manifest.json'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('Cache error:', err))
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from network first for HTML, cache for other files
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // For index.html: ALWAYS get fresh version from network
  if (url.pathname.endsWith('index.html') || url.pathname === './') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            // Cache the fresh version
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
            return response;
          }
          return response;
        })
        .catch(err => {
          // If offline, use cached version
          console.log('Offline - using cached:', err);
          return caches.match('./index.html');
        })
    );
  } else {
    // For other files: use cache if available, fallback to network
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request).then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
        })
        .catch(err => {
          console.log('Fetch error:', err);
          return caches.match('./index.html');
        })
    );
  }
});
