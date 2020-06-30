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
    "revision": "6881a8f8310c272a8af9095249a320f1"
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
    "url": "assets/js/10.e1e39058.js",
    "revision": "6ecfbcc68cfeefff0c94cecf883c899f"
  },
  {
    "url": "assets/js/11.881b67be.js",
    "revision": "637f44906870c30acd13a265fc38a4c7"
  },
  {
    "url": "assets/js/2.31041ecb.js",
    "revision": "dc0d2f5331d5bedce51216c6ad7fa245"
  },
  {
    "url": "assets/js/3.54d3a012.js",
    "revision": "0f897ec067a17fe38c2bf2e3ddb1f683"
  },
  {
    "url": "assets/js/4.cdb0f7db.js",
    "revision": "bc016e75e8fdc802b0541f45dd277db2"
  },
  {
    "url": "assets/js/5.03e5cc5d.js",
    "revision": "556b8f4686e27e7cd2303f8030c67b83"
  },
  {
    "url": "assets/js/6.3ce4c982.js",
    "revision": "ace5bc6a661d861467df3ce26372baea"
  },
  {
    "url": "assets/js/7.3ab8e3cc.js",
    "revision": "44a500b6acbf19cf0178bdbdc7d60302"
  },
  {
    "url": "assets/js/8.df83f937.js",
    "revision": "f3beeeadb75551faec3100deb07abfa7"
  },
  {
    "url": "assets/js/9.cd7ce446.js",
    "revision": "f10692fe224e6b28392c05ab5a887595"
  },
  {
    "url": "assets/js/app.af757b60.js",
    "revision": "0676c3c756c2b0c0f12103d4e0508523"
  },
  {
    "url": "guide/config.html",
    "revision": "4b3ed8ebf8727678a81adf8af780ec98"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d6ccb2991b9cc97460f8ebf1c49c68a1"
  },
  {
    "url": "guide/importing-types.html",
    "revision": "bbc3a8b367f2dfcce78fdeed59e5a052"
  },
  {
    "url": "guide/index.html",
    "revision": "a25c2d2bb4db53c41b3bdc11ff0e6e3d"
  },
  {
    "url": "guide/remote-service-as-a-source.html",
    "revision": "1f771401e96ae056513388f89e895918"
  },
  {
    "url": "index.html",
    "revision": "da6eb8b7fe7ec5d3f31d8389a041c1c1"
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
