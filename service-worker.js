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
    "revision": "e57d8bcc21890e268e23d2a309705f08"
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
    "url": "assets/js/10.9f8ce6bf.js",
    "revision": "1d79a59ff98979a02b355e6d356c28fc"
  },
  {
    "url": "assets/js/11.890842e9.js",
    "revision": "1141dfbf3b3af63e1bf0c60e0cabef70"
  },
  {
    "url": "assets/js/12.4890a277.js",
    "revision": "23f640cfd45b4220997222b31b25f1ea"
  },
  {
    "url": "assets/js/13.bc8b6d83.js",
    "revision": "10b8ae926feb80d7db6f1f14048eeef4"
  },
  {
    "url": "assets/js/14.8924ab78.js",
    "revision": "ce1f937bfe381a3d1ff383cf0096f283"
  },
  {
    "url": "assets/js/15.d78d583c.js",
    "revision": "3008d857c3f5e0b789903fc8b5e1d723"
  },
  {
    "url": "assets/js/16.4c0ec27a.js",
    "revision": "7fba7bba29dcf26dde193eab72221638"
  },
  {
    "url": "assets/js/2.31041ecb.js",
    "revision": "dc0d2f5331d5bedce51216c6ad7fa245"
  },
  {
    "url": "assets/js/3.f49bb768.js",
    "revision": "5c13316c2024a979c07b0af1f15d16d9"
  },
  {
    "url": "assets/js/4.cdb0f7db.js",
    "revision": "bc016e75e8fdc802b0541f45dd277db2"
  },
  {
    "url": "assets/js/5.a3b3e033.js",
    "revision": "86583b4943a59275ea3ede2c456699c3"
  },
  {
    "url": "assets/js/6.538a52c6.js",
    "revision": "67f5e5d1bcca5865c49e0d3e27644a8a"
  },
  {
    "url": "assets/js/7.a3c9295c.js",
    "revision": "e1e7a0f666e19d808dd8a5151e1df63e"
  },
  {
    "url": "assets/js/8.e4e54500.js",
    "revision": "6b45c689ef104054383f82e4ca0e8733"
  },
  {
    "url": "assets/js/9.9a53d9fc.js",
    "revision": "c6b5f110cf42d2c1b1487ccfcf568206"
  },
  {
    "url": "assets/js/app.522faab8.js",
    "revision": "44f61059eca793327f6aa4b876f929c0"
  },
  {
    "url": "generators/community.html",
    "revision": "d3b3475acd5a1632a8bf95d96be421b4"
  },
  {
    "url": "generators/documentation.html",
    "revision": "f5c921d3c2f6338692821691fe3fe303"
  },
  {
    "url": "generators/go.html",
    "revision": "f6ec896db207fbd5a33b5f7cee3be638"
  },
  {
    "url": "generators/index.html",
    "revision": "daddeef8717fcc86356dfd626bccd6de"
  },
  {
    "url": "generators/javascript.html",
    "revision": "6c2d0cd8d862d059850d8f733dfb1c30"
  },
  {
    "url": "guide/config.html",
    "revision": "fc752cac7af67d5234be2abb4332a525"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "20fd8e1c0c79d601e31b7cf38b8c957a"
  },
  {
    "url": "guide/importing-types.html",
    "revision": "40069cbefa48e1532cfc69c2b6cc9b62"
  },
  {
    "url": "guide/index.html",
    "revision": "19331052d01c15d6aa0c79abad4b5869"
  },
  {
    "url": "guide/remote-service-as-a-source.html",
    "revision": "bc9719b19b0d1aa2eb87906fea461210"
  },
  {
    "url": "index.html",
    "revision": "5e2d378c7ec867aa74aeaa25efed6c3a"
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
