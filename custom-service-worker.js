importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
    'http://localhost:8000/todos',
    workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
    /\.(?:js|css|html|png|webp)$/,
    workbox.strategies.networkFirst(),
)
workbox.routing.registerRoute(
    'https://fauziyahilma.github.io/',
    workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
    new RegExp('https://fauziyahilma.github.io/'),
    workbox.strategies.staleWhileRevalidate()
)

/*
workbox.routing.registerRoute(
  new RegExp('https://randomuser.me/api'),
  workbox.strategies.cacheFirst()
)
*/