importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js");

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.precaching.precacheAndRoute([]);
  workbox.routing.registerRoute(
    new RegExp('https://api.example.com/items'),
    new workbox.strategies.NetworkFirst()
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
