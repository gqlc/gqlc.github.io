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
    "revision": "1b01704c5f398cfcf1203aeaab01cb36"
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
    "url": "assets/js/app.6162bc6e.js",
    "revision": "f7ceb7b41056eea17344dbd907f32d7d"
  },
  {
    "url": "guide/config.html",
    "revision": "24ed13a31955ef66c24d10e302a3e51f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "278ed3248b367003a04f0009d1cd6775"
  },
  {
    "url": "guide/importing-types.html",
    "revision": "32b6761d63928091713f4c82ce8296e4"
  },
  {
    "url": "guide/index.html",
    "revision": "60ca2acc2d0927babf78ca41ba8f3ba0"
  },
  {
    "url": "guide/remote-service-as-a-source.html",
    "revision": "13af57ff9e80a82f7861ec64dad82ec9"
  },
  {
    "url": "index.html",
    "revision": "570b73ffff241ca74affac30f7f769d7"
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
