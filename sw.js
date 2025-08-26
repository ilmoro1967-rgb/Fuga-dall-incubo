const CACHE_NAME = 'fuga-incubo-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192x192.png',
  './icon-512x512.png',
  './music.mp3',
  './key.mp3',
  './key.png',
  './medkit.png',
  './neon_buzz.mp3',
  './pickup.mp3',
  './rexStep.mp3',
  './roar.mp3',
  './shelf_wall.png',
  './step.mp3',
  './win.mp3',
  './zombie.png',
  './energydrink.png',
  './exit_door.png',
  './extension_wall.png',
  './gameOver.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});