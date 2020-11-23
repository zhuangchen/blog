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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f2fcf328dec58055f972691f98437d71"
  },
  {
    "url": "article/index.html",
    "revision": "085704737e437e33a5b937140606b68f"
  },
  {
    "url": "assets/css/0.styles.82af88fd.css",
    "revision": "eac5c4ee5dfb723718bcc07a61c4e2f3"
  },
  {
    "url": "assets/img/15022.22017981.jpg",
    "revision": "22017981308e46427cca82ac513f3e9f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8ce142ea.js",
    "revision": "7f54bed3871205cfdb1c40c626831bd2"
  },
  {
    "url": "assets/js/11.6eb46a2f.js",
    "revision": "073bf20eb8c96a13da8d9ba477f930fc"
  },
  {
    "url": "assets/js/12.0e8ff74b.js",
    "revision": "c320a77d7884b6ed992169d549d2c00a"
  },
  {
    "url": "assets/js/13.84bf7c8b.js",
    "revision": "68536a0b51420a806cf304238accbc68"
  },
  {
    "url": "assets/js/14.7dda0297.js",
    "revision": "20f6f24907abb2e992c73e56ef53f371"
  },
  {
    "url": "assets/js/15.dc2a1370.js",
    "revision": "a7116fb80495f9ab871d4b0d8077fd0f"
  },
  {
    "url": "assets/js/16.458aaaa9.js",
    "revision": "258463680d3a5e4df866f2ef87ca7c46"
  },
  {
    "url": "assets/js/17.426749f3.js",
    "revision": "e4668a1f7a044cfbc1729636e89b801a"
  },
  {
    "url": "assets/js/18.5543d00c.js",
    "revision": "839f3cb83654a9a3e74dac32945cfe4b"
  },
  {
    "url": "assets/js/19.9b84d00c.js",
    "revision": "49ed4abbd6ab0204b3f7457d94b1391e"
  },
  {
    "url": "assets/js/2.780775e6.js",
    "revision": "edb7a07e0faa315952d6e600245f396b"
  },
  {
    "url": "assets/js/20.9de2b216.js",
    "revision": "87d2e0c2b7472c0357032c6b759112ac"
  },
  {
    "url": "assets/js/21.c630eff5.js",
    "revision": "dba6e1f624ba16dab282a0485581ce46"
  },
  {
    "url": "assets/js/22.8a0b258a.js",
    "revision": "995eb9eb3408c3434ac1fdd1a6d14be8"
  },
  {
    "url": "assets/js/3.9e00daa5.js",
    "revision": "dad86a755231f1423eb94d0f455875e0"
  },
  {
    "url": "assets/js/4.1151c156.js",
    "revision": "338168c99b511bb949be5d9e00327d42"
  },
  {
    "url": "assets/js/5.70e6a66d.js",
    "revision": "c79cf2a3ac71856cb5d7721f326b59dc"
  },
  {
    "url": "assets/js/6.bcf10881.js",
    "revision": "3bca31fe3bbc95f096009e8988a00dce"
  },
  {
    "url": "assets/js/7.54414258.js",
    "revision": "e1cb736cc7918fbfa614ca29c4b40d28"
  },
  {
    "url": "assets/js/8.c011bc35.js",
    "revision": "5ce89666387e8ec2dc8b1b769982d10f"
  },
  {
    "url": "assets/js/9.fe26a015.js",
    "revision": "20bf08a4f026489838293e87ef04c202"
  },
  {
    "url": "assets/js/app.37ea3363.js",
    "revision": "9a150e0d825222eb7e31528c753bd797"
  },
  {
    "url": "en/article/index.html",
    "revision": "5e91c06a80dceb398f9229d10ddf1d45"
  },
  {
    "url": "en/index.html",
    "revision": "40300eb14e44a74719cef5aa5a096143"
  },
  {
    "url": "index.html",
    "revision": "63c8d439d18dd8d23cb92ea9468d72fd"
  },
  {
    "url": "life/index.html",
    "revision": "35c88dfb2988eec37488ed3c0d6c01f8"
  },
  {
    "url": "note/backend/index.html",
    "revision": "32a1559198abc52eaa5757bb4ed13161"
  },
  {
    "url": "note/frontend/css/1.html",
    "revision": "3e7d9d08c5c02854511168f14ef08577"
  },
  {
    "url": "note/frontend/frame/index.html",
    "revision": "a16152e3d04dbd0f1068228cb6eb8c92"
  },
  {
    "url": "note/frontend/html/index.html",
    "revision": "20599d5d4e79dd8b24eb3364db3fd0e5"
  },
  {
    "url": "note/frontend/index.html",
    "revision": "e851949cb80d78917ef3547ee3c5ae2e"
  },
  {
    "url": "note/frontend/js/js-prototype.html",
    "revision": "2c3492beb265f9efab5c8e83f584c738"
  },
  {
    "url": "note/frontend/js/js-typescript.html",
    "revision": "47edd7640ca3a9ed20a7a9be46c1750a"
  },
  {
    "url": "note/tip/index.html",
    "revision": "d9609b38904da45499cf064180c00fc9"
  },
  {
    "url": "note/tool/index.html",
    "revision": "b526555665413cfbe229bc8afe75d917"
  },
  {
    "url": "share/picture/index.html",
    "revision": "9ed4014a14bb1af5a5b072c63bd75a48"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
