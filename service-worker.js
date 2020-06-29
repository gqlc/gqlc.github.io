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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bea99f8296599b673c0dca7b78ba0861"
  },
  {
    "url": "assets/css/0.styles.34d67128.css",
    "revision": "814caf048df8231967f875feb7754049"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.31041ecb.js",
    "revision": "dc0d2f5331d5bedce51216c6ad7fa245"
  },
  {
    "url": "assets/js/3.37a74d58.js",
    "revision": "5c367afcf172decba6ad92cfc9299978"
  },
  {
    "url": "assets/js/4.cdb0f7db.js",
    "revision": "bc016e75e8fdc802b0541f45dd277db2"
  },
  {
    "url": "assets/js/5.4568dd09.js",
    "revision": "af7d877192d8f0b280023bc5055987a1"
  },
  {
    "url": "assets/js/6.83de05f5.js",
    "revision": "ebf76a5633cb1f3cd68ea64090eb5437"
  },
  {
    "url": "assets/js/app.f71dcf1a.js",
    "revision": "2b6273f051a36689d8da8ab38d047d92"
  },
  {
    "url": "index.html",
    "revision": "a1a6ca1f0505a6f2b6dce6aa14984800"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
