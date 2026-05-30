/*
  Minimal no-op service worker.
  This exists to prevent repeated /sw.js 404 requests from stale client registrations.
*/

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // No runtime caching; network behaves normally.
});
