'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "ea5957aab6d2c6d5a65af21cde7614cd",
"version.json": "78b5df3505a599885c0325f82bf07d9d",
"favicon.ico": "d5ade6c9ac474c269f8110a56daea862",
"index.html": "b8d44d5a8575e3ba304c22d2098b29d8",
"/": "b8d44d5a8575e3ba304c22d2098b29d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/assets/images/pcg_logo.png": "f3e95a1eea68ad811207bff8e7fc0f13",
"assets/assets/images/school.jpg": "61a98b78a89a45b6c3906db480c778ba",
"assets/assets/images/washroom.jpg": "5791b0d1a46a3d959b8ba2360a3c2788",
"assets/assets/images/ekol.jpeg": "8e52b55c5f915cf9a813c67e08a31b6b",
"assets/assets/images/map.png": "aacdd6d44d07a8facd6033f209051c1c",
"assets/assets/images/carousel_1.jpg": "7a7d24f15775e01c5fa92cd160dbc2ef",
"assets/assets/images/church_dark.jpg": "33e6a131e2faade91d07ddb7e9b1b5f0",
"assets/assets/images/carousel_3.jpg": "615dcf9815bc617e9c84f65ea9aa4643",
"assets/assets/images/giving.jpg": "fb8edbd44dfd466dbfc99ba59f2597f8",
"assets/assets/images/pcg_main_house.jpeg": "49d26044bc128d596ab76c781f61da6c",
"assets/assets/images/carousel_2.jpg": "9aba0c8fc0e2573660b3584269e6c942",
"assets/assets/images/church.jpg": "978ebe2115d02f51855b8af60ab4ed34",
"assets/assets/fonts/Raleway/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/fonts/Raleway/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/fonts/Raleway/Raleway-Light.ttf": "6c084270ccdeb72fd9f5a5144cea628f",
"assets/assets/fonts/Raleway/Raleway-Black.ttf": "38b405eba92acbb5aef45d8152f2a736",
"assets/assets/fonts/Raleway/Raleway-Italic.ttf": "f73026bcd64e5a5265ab616e5083cd48",
"assets/NOTICES": "ab7841275de56955939dc1bcb90bdf29",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "78a1a0aa7e02f3976c2931127efd84ef",
"assets/FontManifest.json": "0562b78d83783cb0e5c3d000314b88c4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "a77e0adb211b3b9c0ed87803240492b9",
".git/config": "4c72792a79c022b2e9e5c3b16eea6c0e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/refs/heads/main": "e61d219b1428a00cdb02a5bb3838081d",
".git/refs/remotes/origin/main": "e61d219b1428a00cdb02a5bb3838081d",
".git/COMMIT_EDITMSG": "131f39fc5c6a945e85891ec3d0c5f53d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/c8/3458f1f02e90ecd26fd4c94d306afc32b1d12a": "ba16a86dfa616559baddeb096d5ff6a2",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/3d/87b5a61e5bdda66e213fbc702cf6ad684c3a5b": "d09797d9d05766f9d86e22a586af65cf",
".git/objects/6d/6b8cfc66f1e47828f81193e05ed8354b8a2cc1": "fc7dce3e766cb78adfe560aad5b9e095",
".git/objects/41/c67881ed9d19cbd8c392ce1e354db8e88d3085": "4f6aaec51fe6a77de8a6f0d0189a7787",
".git/objects/9b/33903fc6317fbe4a14f5f937b75a85bd6a3cde": "f71f0cd208ee823928ad602c70f2bc89",
".git/objects/03/e4d80c78b3c036a6f0e4b2ba8f085a043802f1": "742794708d4093fb65db2bce0e6df807",
".git/objects/03/f0860a945eb16742f112651dc327270c0e8d6d": "ffcc3c04a97b06ed94b93184a95d8a86",
".git/objects/be/4d44c932390ee3dcac66cd3e53220d8b2d558a": "131194e24b1ae1edbe6bc367e3d750b6",
".git/objects/43/aa156f267f90a60f97600645ff0c795407c9c6": "62d5627c663cb732fc1d3a33d02bb01c",
".git/objects/0b/c46d235054516461905ab7162c88828e292fa3": "8075ec1f70c55a1cdbaf93af62ce53ab",
".git/objects/4b/979a5caf73a2fb5b20bcd8349beb65d6de1ffb": "5d509c156df44d8d1ccf3bbb9d700b01",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/f4/7b1e2a5c6d945e9c09c9173849895fb498fd1c": "4b8a39bc4ee64c9ee236005e57a9c83b",
".git/objects/f4/e59e60fba99904784e1d4d0539176e3834ad4e": "bceec3f29f2eacb198c6757401c98631",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/18/f8be5b4526f63ab3ba8d17b29c0ceb80e22691": "e4105f27dd079b727f860b28b005e35c",
".git/objects/5d/dbe3c1005474b6ecc3dda1b9aaab7e8487ed1c": "6a719669bc971b1b9a4b48eea8890226",
".git/objects/5d/2bc4258c134c973fcc8b012195bdcbbfbaa697": "efc8ca6532fa6b703422363620619491",
".git/objects/1d/63f774c0d3db03d3e5648d315579f34ea2571b": "cc4ae408d885ec197e89be3c9e2e374c",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/8c/1d81e9387386d132d2733f1e77f73cde0fe90c": "c28bbd88fe3762eb1e4cb469c148e7ff",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/eb/861eb1bf4c6ef4c423044a5b85f4e47d1bd08e": "0efedbad2b9dfd1bf9977237e0e39758",
".git/objects/7b/ca5ad54540c6e1b55416e1a524bc26a016e5d3": "41228ff72dc3a0e2c887e2600c182879",
".git/objects/3e/698128b9ee227e7f7d490dc42e387af09f7192": "e0f4b7919847b4c57d44e23c4058de0f",
".git/objects/84/e430740cd2c0d15c1b1f124474bf6c53c0a7d9": "8e709096b1d9821a1a608947da150021",
".git/objects/15/489afa0204119fbb4d19a2f123bdd72f97e762": "7681b54b1fe6eb14462abb4ebf649f88",
".git/objects/3b/6f038d74c54c4e94747b8f4f941d9a60c9392d": "773810b2bb6d798985dd5525884f9ea8",
".git/objects/c1/4f1c258a5ac934b428aec2b0cdc438f42d49f8": "a2613184e6a408fe1c83c6bb726fce89",
".git/objects/a3/ae9540f7d2c8a221aa6afac6034f5d4175c5dc": "25bf23327d7dc12d385666ac1b0fda64",
".git/objects/27/bd0c67791a37c124547c5d94e271cee7ee0b50": "144ddf1d0d33891ec04866a3f890c96b",
".git/objects/c4/2815deb3373d8775ad2d154810553be26745ff": "cc79620b282e3bac3127df2b1dbfa864",
".git/objects/c4/bd607279f909caca3475e952afbbdd33b1c2a3": "95cd01f6b3c98a75c1d437271547d929",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/65/42f26c8c97cf40a4d0661a553ddc31e9e5fb02": "54b293d2b147a13f3ae97deec41f0ee3",
".git/objects/65/a6eb9c55575a87bfa560f9fa795ddf91bbea98": "4d85e7dfefce8c3bb9dd762cc8605e58",
".git/objects/42/e6cd976e19bc5c549d13c3698555c956f79ba3": "759ae7607ad80746b82078e7ea235c58",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/74/ae953d518bb88ae55fea7dccc598aa1b05bb0c": "b712c758217497c5bafd576fa5adc5d0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "9ae2911fed416396915ba0048d169a1c",
".git/logs/refs/heads/main": "6638787e760eba3ed542397f3e7dfd9e",
".git/logs/refs/remotes/origin/main": "864d575ca71d343ef3c09e913913a144",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "4f429021884255606d2b4e5bd38e02ff",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
