const version = 1.0

const ulrsToCache = [
    "/",
    "/index.html",
    "/style.css",
    "/main.js",
    "/install.js",
    "/manifest.json",
    "/favicon.ico",
    "/register-sw.js",
    "/sw.js",
    "/icons/favicon-16x16.png",
    "/icons/favicon-32x32.png",
    "/icons/favicon-96x96.png",
    "/icons/favicon-256x256.png"
]

const cacheVersion = 1 

const CACHE_NAME = `pwa-cache-${cacheVersion}`


// install

self.addEventListener('install', e => {
    console.log('sw installed')
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(ulrsToCache))
    )
    return self.skipWaiting()
})

self.addEventListener('activate', e => {
    console.log('sw activated')
    return self.clients.claim()
})
