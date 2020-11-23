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
    "revision": "bac460954e1b67b994c7d2acc85380d5"
  },
  {
    "url": "article/index.html",
    "revision": "f34773ed8ebe3bbb9e291edbeac55dd1"
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
    "url": "assets/js/17.af131b4c.js",
    "revision": "8a8bee24ed4ea258da7ae7d96319952a"
  },
  {
    "url": "assets/js/18.72e124c4.js",
    "revision": "3d0bd2146c2770fd214f922f037f3f1c"
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
    "url": "assets/js/6.ea726ad9.js",
    "revision": "c581d667fc9f11bc3e37fcde09e0e450"
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
    "url": "assets/js/app.d4d8a0b8.js",
    "revision": "cf0809a81c41f977927b23e355c8dd57"
  },
  {
    "url": "en/article/index.html",
    "revision": "f342f5268595f26f9beb92f3bc6364d5"
  },
  {
    "url": "en/index.html",
    "revision": "1b7174301075ac46e492e09d37691e38"
  },
  {
    "url": "index.html",
    "revision": "f616d70264462b1f4e1354d2418c8a34"
  },
  {
    "url": "life/index.html",
    "revision": "91a8907b33837c700e105126483fea28"
  },
  {
    "url": "note/backend/index.html",
    "revision": "72c290ebe59b70f42506a6796220edc0"
  },
  {
    "url": "note/frontend/css/1.html",
    "revision": "044b00c6d907530bca71a0d6bb3ef802"
  },
  {
    "url": "note/frontend/frame/index.html",
    "revision": "fa6b7b0936f08007f2ff9f548cd670d8"
  },
  {
    "url": "note/frontend/html/index.html",
    "revision": "606b6842c570b39dd6ff03c866c0b7ce"
  },
  {
    "url": "note/frontend/index.html",
    "revision": "5a321c031ff802bec8ed1d4397160148"
  },
  {
    "url": "note/frontend/js/js-prototype.html",
    "revision": "4bd5b4dd89b6a0754d41db7694073895"
  },
  {
    "url": "note/frontend/js/js-typescript.html",
    "revision": "d32b70e9605bf2055895f78148bfbf72"
  },
  {
    "url": "note/tip/index.html",
    "revision": "193069a24b22f4b3ea0c9ff7900c1fcc"
  },
  {
    "url": "note/tool/index.html",
    "revision": "956246f6d867e17cf5251986585dc49f"
  },
  {
    "url": "share/picture/index.html",
    "revision": "c47a7f6ddcc80129ab3eacebcf6cc9b4"
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
