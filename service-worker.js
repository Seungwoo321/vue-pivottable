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
    "revision": "24d75613a26580e4e6d7f757ceede754"
  },
  {
    "url": "assets/css/0.styles.4b7615b1.css",
    "revision": "5e9ee275656071a87b54489a57d58421"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f8a72165.js",
    "revision": "5e9146ac37c91a23fde1f2b2adbf3d52"
  },
  {
    "url": "assets/js/11.f7bcd6e3.js",
    "revision": "fc4431a3e0ebbc48fa7e94342547cbc0"
  },
  {
    "url": "assets/js/12.14c474af.js",
    "revision": "6db537ac3b139d74ca40c89b3cc22d04"
  },
  {
    "url": "assets/js/13.a73e72c8.js",
    "revision": "5f77bccf22b98729e66063b67c996c89"
  },
  {
    "url": "assets/js/14.765b5c96.js",
    "revision": "090d73c7d177afd1fdbc8db7758f7d03"
  },
  {
    "url": "assets/js/15.4cc8b95f.js",
    "revision": "4a8f507df950cc261b3989fbdf1314d5"
  },
  {
    "url": "assets/js/16.62075105.js",
    "revision": "0e5a7c09c5623a6951eef58f3febd9f4"
  },
  {
    "url": "assets/js/17.610b99d4.js",
    "revision": "8c4c388076d98a00a0691062976d207b"
  },
  {
    "url": "assets/js/18.e5ffd85e.js",
    "revision": "74cfa8ce25613b40c8972d4ee243d02c"
  },
  {
    "url": "assets/js/19.61577162.js",
    "revision": "aad0a1de270466f632995f2c01dbb9bf"
  },
  {
    "url": "assets/js/2.f8e6acee.js",
    "revision": "d8fcbf9f553577c2c9a098546a249712"
  },
  {
    "url": "assets/js/20.c90f44ed.js",
    "revision": "9913c3db8fbfe0fa27521c5e13ae36a9"
  },
  {
    "url": "assets/js/21.48b952fc.js",
    "revision": "502af6a896cc1a794e5e6a596f6d7f9d"
  },
  {
    "url": "assets/js/22.5cce09e1.js",
    "revision": "7e14b5c854d28cf7bf9e2f6ed07452a8"
  },
  {
    "url": "assets/js/23.d8599b8e.js",
    "revision": "f1dd2f37580a70850b788234df098efb"
  },
  {
    "url": "assets/js/24.eed2bc92.js",
    "revision": "b57a82720115cb89da3a3938d2d6f416"
  },
  {
    "url": "assets/js/3.2cc02a62.js",
    "revision": "6a5d464c3f0b5213f16af88687617891"
  },
  {
    "url": "assets/js/4.b83b90e5.js",
    "revision": "8c34760643f2cf4b07db900de4fd310c"
  },
  {
    "url": "assets/js/5.9b06d116.js",
    "revision": "29d79a0eb9bb6abe24f98b694a5bc907"
  },
  {
    "url": "assets/js/6.84c2628c.js",
    "revision": "548e01c84e6147918849fb83becc1883"
  },
  {
    "url": "assets/js/7.7b081558.js",
    "revision": "08baf1ac35a110d33b2fda6c3aa7bfb1"
  },
  {
    "url": "assets/js/8.2c9eb64b.js",
    "revision": "ba99e52c95d71b51e544eae45804d80f"
  },
  {
    "url": "assets/js/9.e9903304.js",
    "revision": "024eae690f3f1df4d85a987d492f79a3"
  },
  {
    "url": "assets/js/app.75e6e306.js",
    "revision": "f14b00446062b28deb23a50f6325f9ed"
  },
  {
    "url": "google603171b62dec4aac.html",
    "revision": "31d70d981f06209ee337ed729ce7075d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c0e37fa4a85c63c1343514fb2dadcd61"
  },
  {
    "url": "guide/index.html",
    "revision": "5bbf639dd2c7ed88bc6c6e29f9c0ec5f"
  },
  {
    "url": "guide/locale.html",
    "revision": "7da5d22c0ddc40ecf4b73d22a75dff89"
  },
  {
    "url": "guide/renderer.html",
    "revision": "7182a73bd83626da1082f077a12d1497"
  },
  {
    "url": "guide/scoped-slot.html",
    "revision": "ce8e910b7920bf2e853503114966f3f5"
  },
  {
    "url": "guide/slot.html",
    "revision": "729a0ff2aaa4a2f65baba24a96c35e77"
  },
  {
    "url": "guide/utilities.html",
    "revision": "c833561aa8b2a5bc87e604bf1435fb5c"
  },
  {
    "url": "images/vue-pivottable-demo.gif",
    "revision": "dbf19b1e437a35f12467d5f38986f10d"
  },
  {
    "url": "index.html",
    "revision": "a24238c33f3740190b99758b9d1b8b8f"
  },
  {
    "url": "ko/guide/data.html",
    "revision": "0154de2d4320649ab51297d059278281"
  },
  {
    "url": "ko/guide/getting-started.html",
    "revision": "7c740dceaa1dad6e6e4cadd1d5e41cfe"
  },
  {
    "url": "ko/guide/index.html",
    "revision": "4511f83126690417c2770f1daa377c54"
  },
  {
    "url": "ko/guide/props.html",
    "revision": "dbf37f474ada32e6cfacad23fda815c6"
  },
  {
    "url": "ko/guide/style.html",
    "revision": "fa1af0c82fc5caf7e9b9747bade73ecb"
  },
  {
    "url": "ko/index.html",
    "revision": "195114966c14e7dc0ba0a0447fafcca6"
  },
  {
    "url": "props/index.html",
    "revision": "ae6871b785bc2de29201aee99b66e2c9"
  },
  {
    "url": "styling/index.html",
    "revision": "cebfa0ae538497f56896be29717783d6"
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
