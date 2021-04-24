'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "45eab47a8207d6ff984f29f2d5914149",
"assets/assets/card_demo_images/user1.jpg": "96a1e9775f06bf260285c1ed8ca823e3",
"assets/assets/card_demo_images/user2.jpg": "7b3798b2da74185ebe196ef361851f64",
"assets/assets/card_demo_images/user3.jpg": "eb78a45d08c76ae6cba85cb1b3ff5659",
"assets/assets/card_demo_images/user4.jpg": "baa95435ac1f48e1d173c1eb742805c1",
"assets/assets/card_demo_images/user5.jpg": "abde52cf0fe28988235ff53b2293d62e",
"assets/assets/card_demo_images/user6.jpg": "d9d12cbc4ee4f86ab012db27fa1f940c",
"assets/assets/icons/female_icon_selected.png": "76cffba3c7bc14ca7248a1fbd301d995",
"assets/assets/icons/female_icon_unselected.png": "27310419579135286c443630a11754eb",
"assets/assets/icons/Group%25203510.svg": "a34195ad54259e95795fef5b9238e2b8",
"assets/assets/icons/icon_arrow_back.png": "c16ee7629240969d75a03f52a7668326",
"assets/assets/icons/icon_cafe.png": "dda053878fc2d66b5644c1c33ea45f7c",
"assets/assets/icons/icon_clock.png": "2cfebf0781e60bbc8de6af501adf2da1",
"assets/assets/icons/icon_facebook.png": "7ca3934762eacb10948a946196f1dafa",
"assets/assets/icons/icon_food.png": "38d6037e7889b4b033aa1dd10b533e20",
"assets/assets/icons/icon_google.png": "7e87a9f4ca392edde37af83c6035c717",
"assets/assets/icons/icon_library.png": "5953530b2e84f877ef757cc28685df22",
"assets/assets/icons/icon_light-bulb.png": "e2f44627400b00e925c9fbf0fbf99abf",
"assets/assets/icons/icon_location.png": "f520e44b432203e2f149af05e0dde9b8",
"assets/assets/icons/icon_pen.png": "7664e0dd17703511f3d3747aedbcaca7",
"assets/assets/icons/icon_phone.png": "9eb315f56cb01ddd4dc8f8075cfe1856",
"assets/assets/icons/icon_price_tag.png": "ebd2f6647221c2366eaae3aa37e864f6",
"assets/assets/icons/icon_restaurant.png": "e08f293d44f2d5884cb8659d0cf5b0db",
"assets/assets/icons/icon_thamgia.png": "5d5ba895557b0fd2cced67bb7c8430c3",
"assets/assets/icons/icon_x.png": "ec0122c9be453f14254f0b9f4f636400",
"assets/assets/icons/ic_account_verification.png": "627255d44b966d5fbf223f8e9d9ccb06",
"assets/assets/icons/ic_alert.png": "8409ef526e5a0715571508b2ccc8c04e",
"assets/assets/icons/ic_better.png": "48992f95869f7748aaed687cbfa07f28",
"assets/assets/icons/ic_body_border.png": "d0c8bf9fd8ee7e49cc5607c242bb1ce4",
"assets/assets/icons/ic_character_border.png": "00ba1528c8f523b123b1c4907fec6b39",
"assets/assets/icons/ic_child_border.png": "ebc5a90e7a042d37a0fbcbf2602499fc",
"assets/assets/icons/ic_cogwheel.png": "0c1fb77bc0e23ab12e933fbc5bd51668",
"assets/assets/icons/ic_cuochen.png": "8c93dc2d518a3f01adec32c4cba92ac5",
"assets/assets/icons/ic_date_time_border.png": "4c500747ea2a265aa776406c9a307083",
"assets/assets/icons/ic_double_arrow_back_border.png": "500d88326492df97871e09d11696e34b",
"assets/assets/icons/ic_double_arrow_left.png": "8dd93e6e6105ccc665f16481e7b1f95a",
"assets/assets/icons/ic_double_arrow_right.png": "bd6bfe509ef07a921b51a2c0a9972bd7",
"assets/assets/icons/ic_education_border.png": "247cf0b0402424829ee81c9a8548c2cf",
"assets/assets/icons/ic_favorite.png": "6d4b78d0d28a0f6bdc6a4996c3c88759",
"assets/assets/icons/ic_favorite_border.png": "8d8d610d0b8b4414470d969be6990ac6",
"assets/assets/icons/ic_gender_border.png": "c3329dd7c89e91d3aa9fc7fbb67bd7b8",
"assets/assets/icons/ic_height_border.png": "4b63d7d4f1c0fcafe1d13397c660f9c7",
"assets/assets/icons/ic_income_border.png": "468c9d461002dc08971595afed980595",
"assets/assets/icons/ic_invitation_fill.png": "208857a83ec378d818c11976476562d6",
"assets/assets/icons/ic_language_border.png": "d8c28e8d3d400ab0d85c04bc6ca08e21",
"assets/assets/icons/ic_like_facebook.png": "198df2bad45b8ddddeac896eeaf9df04",
"assets/assets/icons/ic_location_border.png": "f29b71d6434fa7c2267e9d5e2330dd1f",
"assets/assets/icons/ic_menu.png": "773bdb8cfc1d291f52b30ace649ec2e4",
"assets/assets/icons/ic_people_border.png": "b2f245b662fa86df21d24f82c6424abd",
"assets/assets/icons/ic_save_border.png": "4b384545d027cbfef1f99468192e5546",
"assets/assets/icons/ic_smoke_border.png": "9c02a9c099790944376db6ee1bb8a349",
"assets/assets/icons/ic_star_fill.png": "35eded4c13a51bed0b131e0eef9fd70c",
"assets/assets/icons/ic_taocuochen.png": "bd1a1d21c6dd901eff1f97b822096b53",
"assets/assets/icons/ic_tinnhan.png": "74152dc40727fd858d3951f87f3d2be3",
"assets/assets/icons/ic_tree_border.png": "be7cb21f6f7fb95eb43d404364c3ba22",
"assets/assets/icons/ic_trinhquanly.png": "0e0671d734c4207d5f6e174e3dd53a91",
"assets/assets/icons/ic_user_verify.png": "da262822eda856b03d7425778f6d551d",
"assets/assets/icons/ic_view_border.png": "71f4ed737b77dcce0e6d90f497dfbc5a",
"assets/assets/icons/ic_vip_border.png": "75e0ab2388a88396f14ae3827746c888",
"assets/assets/icons/ic_vvip.png": "d53e03b311ea2ade22da1781081ce8d9",
"assets/assets/icons/ic_vvip_filler.png": "e9a14aa225f57ce59cfddc1346c697e6",
"assets/assets/icons/ic_wallet_border.png": "0cc3af06215fbca4368727099e1df2f3",
"assets/assets/icons/ic_wine_border.png": "e9b988d0948fe55198f20e3c777c0467",
"assets/assets/icons/ic_work_border.png": "9ad6d72316b240ab0060088574685cc9",
"assets/assets/icons/male_icon_selected.png": "aaeb67edc26c03b95cdee9c0b3a361e4",
"assets/assets/icons/male_icon_unselected.png": "add19126c4d114aa8c951cb0da6e7ec5",
"assets/assets/icons/Moblie%2520App%2520Design%2520(New%2520Version)_%2520October%25202020.zip": "f87559d11040ee6cac35ed6896b459ba",
"assets/assets/icons/Nofi.svg": "7aa9adca0279d8a1d1b8fde01ba6bf98",
"assets/assets/icons/waodate_icon.png": "c3c1f76673302bc2a3a770f684ef8eb8",
"assets/assets/icons/waodate_icon_v2.png": "6e16de81c2f6bb08511db5cde6c60267",
"assets/assets/icons/waodate_icon_without_text.png": "e9fbe1242a97060bd70f82b154c11138",
"assets/assets/images/add_image_frame.png": "7f4f18a5061466297ac47661df323d59",
"assets/assets/images/avatar.png": "282a7eead2cb136377c035dacefd344f",
"assets/assets/images/avatar_rounded.png": "721b0e270e205d975ee54715e5812132",
"assets/assets/images/background_account.png": "583e9be1bdf6a21a9e33ca52b72e4ceb",
"assets/assets/images/crown.png": "ec0cf118a47922f84873519dad676ef2",
"assets/assets/images/finish_create_appointment.png": "8731fba9275bbce1af422f182d408ea1",
"assets/assets/images/firstChoice.png": "1ba894b2ed155e32dc528d0814ff05e4",
"assets/assets/images/firstFrame.png": "77c209c682ea0461c4155dc128d6533e",
"assets/assets/images/img_id_card_back.png": "db36db0f0d5baf19ca4e33608b9ad589",
"assets/assets/images/img_id_card_front.png": "f5ab07663a0aaf276cf2a23bf94a2c6b",
"assets/assets/images/img_upgrade_vip_filler.png": "bbd53104bbdf6f6554ac89e3be118be9",
"assets/assets/images/secondChoice.png": "fccdfd20a703ca173321842527baf83f",
"assets/assets/images/secondFrame.png": "1bc3910bd2ad3f34d78a07ea49559619",
"assets/assets/images/thirdChoice.png": "12b2ba62cd740133cbd1eafff0fe5129",
"assets/assets/images/thirdFrame.png": "3fae66fe47c44ebbb1a19290c6d7bced",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "139888703e50493e413fd6525b31d24c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d373e4c76eb82b1ac86e271be3847099",
"/": "d373e4c76eb82b1ac86e271be3847099",
"main.dart.js": "86fc0fe55b44e8313f8c17d575947c22",
"manifest.json": "375fd6f425d99d106125836e5b601ad7",
"version.json": "067be9e2cbe16c1f69cab474db01eaf8"
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
