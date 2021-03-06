/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.1614ec2ac447d21ff13921b44059a9dd.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
self.addEventListener('push', event => {
    const data = event.data.text()
    const title = "PisoKonek"
    const options = {
      body: data,
      title: "PisoKonek",
      vibrate: [300, 100, 400],
      requireInteraction: true,
      image: './assets/img/pisokonek.png',
      actions: [  
        {action: 'insert', title: 'Insert coin now'}
      ]  
    }
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  })

  self.addEventListener('notificationclick', function(event) {  
    event.notification.close();  
  
    if (event.action === 'insert') {  
      clients.openWindow("/");  
    }  
    else {  
      clients.openWindow("/");  
    }  
  }, false);