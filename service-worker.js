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
    "revision": "fbdb9bcfc083c5a09324114d4cb41fb0"
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
    "url": "assets/js/5.03e5cc5d.js",
    "revision": "556b8f4686e27e7cd2303f8030c67b83"
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
    "url": "assets/js/app.4bc732a8.js",
    "revision": "14e8ee5809bc1a5ce726cc743fbb0868"
  },
  {
    "url": "generators/community.html",
    "revision": "53ebe75fb89b2833e99c9d3a4c0980e8"
  },
  {
    "url": "generators/documentation.html",
    "revision": "41f665919a64e7a853eb2eccf2396f54"
  },
  {
    "url": "generators/go.html",
    "revision": "2993bbc93742b0f35b43de9e1b3c9463"
  },
  {
    "url": "generators/index.html",
    "revision": "896ca102370d391f61d9e410d0b21a12"
  },
  {
    "url": "generators/javascript.html",
    "revision": "04c2023832fe9ec28db16d3106027570"
  },
  {
    "url": "guide/config.html",
    "revision": "2a7eff18dfd827f3a8dfd6bb104d0eee"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4c60e96dbd3ea7ce5d3aa217682315c5"
  },
  {
    "url": "guide/importing-types.html",
    "revision": "9a57294772efca7ebd2df97a3adc433a"
  },
  {
    "url": "guide/index.html",
    "revision": "f65256a49707f5ce023a071ae1742c02"
  },
  {
    "url": "guide/remote-service-as-a-source.html",
    "revision": "d44be72d969564ad19a46d16661866da"
  },
  {
    "url": "index.html",
    "revision": "2f3765fe7a30236ad7b35e4021fb4083"
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
