const CACHE_NAME = "santolabs-offline-v1";

const FILES = [
"./",
"./index.html",
"./PUBG_Character_Image_Game.html",
"./alock1.png"
];

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
);
self.skipWaiting();
});

self.addEventListener("activate", event => {
event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request).then(cached => {
return cached || fetch(event.request);
})
);
});
