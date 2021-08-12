'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "ea5957aab6d2c6d5a65af21cde7614cd",
"version.json": "78b5df3505a599885c0325f82bf07d9d",
"favicon.ico": "d5ade6c9ac474c269f8110a56daea862",
"index.html": "637f1ec08fb63a2d1408f57f370978b5",
"/": "637f1ec08fb63a2d1408f57f370978b5",
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
"assets/assets/images/toilet/t1.jpeg": "d3bd94f7fa82463e24e4ae8b004162eb",
"assets/assets/images/toilet/t3.jpeg": "f23827604a8229c2220d2677e2d8c330",
"assets/assets/images/toilet/t10.jpeg": "0582d5c64fed312628f6a512255ed94e",
"assets/assets/images/toilet/t5.jpeg": "6991fd94673aaef91d2dbf3c6f67edf6",
"assets/assets/images/toilet/t7.jpeg": "c20da3139e10878473d1fb0ef120f705",
"assets/assets/images/toilet/t2.jpeg": "fb275dde0ff5a6b94cb69860d9c02582",
"assets/assets/images/toilet/t9.jpeg": "579a497caeca23855a1505e6d35b1a8f",
"assets/assets/images/toilet/t4.jpeg": "f0889dabab1dd391042760ba4564ac67",
"assets/assets/images/toilet/t6.jpeg": "13c596924e22c131b729e7d0fb874d56",
"assets/assets/images/toilet/t8.jpeg": "156fc79886684f3105b067bb152af34a",
"assets/assets/images/pcg_main_house.jpeg": "49d26044bc128d596ab76c781f61da6c",
"assets/assets/images/school/s21.jpeg": "0fff5b5ff3ed97165e79eec8ff0d0a61",
"assets/assets/images/school/s20.jpeg": "24a7d679bd78b52b6417de030feed5d6",
"assets/assets/images/school/plan2.jpeg": "afe903bffe6279ac2f9ff1549ae85f59",
"assets/assets/images/school/s6.jpeg": "e2d5c9e1b6e14ae3aec898acd0a1ed8e",
"assets/assets/images/school/s14.jpeg": "054073e0c48db0b2158693fd50e36c20",
"assets/assets/images/school/s11.jpeg": "0320e2ebede2db4a2c733f5fb6b8bfe2",
"assets/assets/images/school/s18.jpeg": "f4d85c5df23fcda5cd5fd47900392f4e",
"assets/assets/images/school/s24.jpeg": "993aece1b4c195d193d66d0d0d0cc87f",
"assets/assets/images/school/s1.jpeg": "d1b97a00eed6e5c2c748783195650449",
"assets/assets/images/school/s28.jpeg": "bf99349126d2c0b8bcd2f72b77f577ac",
"assets/assets/images/school/s15.jpeg": "aa1bd1027cb14410c9a83ea0d86ecb44",
"assets/assets/images/school/s22.jpeg": "2f45e201a28d691917910bafe647e29c",
"assets/assets/images/school/s13.jpeg": "2e4f3bb392de41e4cbd1b93c2da3c469",
"assets/assets/images/school/s23.jpeg": "33567452bbdc3055ac743f9b52bb1bf7",
"assets/assets/images/school/s27.jpeg": "1e95a26fe0926481d568c7636b1753aa",
"assets/assets/images/school/s16.jpeg": "97bdc06c754a6f9fe19409d318ab8612",
"assets/assets/images/school/s12.jpeg": "fdc4902d9583c622ce8dcc588537d3e2",
"assets/assets/images/school/plan1.jpeg": "de172da7e0857155c597d70c2cc77465",
"assets/assets/images/school/s8.jpeg": "e8e42aad1d6c65495b5714d29ccc8c73",
"assets/assets/images/school/plan4.jpeg": "42e00387cb4973ea04ce2eb980e5de4b",
"assets/assets/images/school/s5.jpeg": "729488b043842c7e5950cd3a57dd1a90",
"assets/assets/images/school/s9.jpeg": "6834ec569e71da8bcff082857ad302fe",
"assets/assets/images/school/s7.jpeg": "eedbdfa504aa5327171bc10c8e5a14b8",
"assets/assets/images/school/plan3.jpeg": "60f7c93169b4cc9e637f4ae96355572d",
"assets/assets/images/school/s4.jpeg": "102a10587e465802e7e8ac76184f56ae",
"assets/assets/images/school/s3.jpeg": "0b9284becb5f61947c5077448341ce48",
"assets/assets/images/school/s19.jpeg": "05fadf7b25b0781f9109c41e748d1616",
"assets/assets/images/school/s25.jpeg": "e6a940e629524fe60093dac20bec748f",
"assets/assets/images/school/s26.jpeg": "9c72c9453b7881858cdfef3d1f2748ea",
"assets/assets/images/school/s17.jpeg": "fee478053feab1aa702b0944627a2246",
"assets/assets/images/school/s2.jpeg": "b629dfdb1decbddc6691e94260798f5e",
"assets/assets/images/carousel_2.jpg": "9aba0c8fc0e2573660b3584269e6c942",
"assets/assets/images/social_icons/whatsapp.png": "704b06004a3879651f5a4002c606115d",
"assets/assets/images/social_icons/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/images/social_icons/youtube.png": "ca6d67e60f758d352745329b283e8f32",
"assets/assets/images/social_icons/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/social_icons/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/social_icons/twitter.png": "f29106f6f82f24c14018283fd2e3a917",
"assets/assets/images/church.jpg": "978ebe2115d02f51855b8af60ab4ed34",
"assets/assets/fonts/Raleway/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/fonts/Raleway/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/fonts/Raleway/Raleway-Light.ttf": "6c084270ccdeb72fd9f5a5144cea628f",
"assets/assets/fonts/Raleway/Raleway-Black.ttf": "38b405eba92acbb5aef45d8152f2a736",
"assets/assets/fonts/Raleway/Raleway-Italic.ttf": "f73026bcd64e5a5265ab616e5083cd48",
"assets/NOTICES": "ab7841275de56955939dc1bcb90bdf29",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "f9525bf6d562ebfc4a4523d71925b815",
"assets/FontManifest.json": "e0b8e0968365c5eb11bbed40006bc2ba",
".git/ORIG_HEAD": "01a5f10e03e1afd39664982bb2414614",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "f35b07f17e5e5ee42026790eec5289c4",
".git/config": "4c72792a79c022b2e9e5c3b16eea6c0e",
".git/FETCH_HEAD": "efd77ad80f85a93fb07d51f4886950fe",
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
".git/refs/heads/main": "e19a0f5c343061e05038cb35158fc74f",
".git/refs/remotes/origin/main": "e19a0f5c343061e05038cb35158fc74f",
".git/COMMIT_EDITMSG": "f87ee43710afff6d49c282be27832d11",
".git/objects/d7/0537a63f41dbd2ce9544fcee4914e4aee127bf": "cadee54863b7adc086b37dee876f4bec",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/c8/3458f1f02e90ecd26fd4c94d306afc32b1d12a": "ba16a86dfa616559baddeb096d5ff6a2",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/3d/87b5a61e5bdda66e213fbc702cf6ad684c3a5b": "d09797d9d05766f9d86e22a586af65cf",
".git/objects/6d/6b8cfc66f1e47828f81193e05ed8354b8a2cc1": "fc7dce3e766cb78adfe560aad5b9e095",
".git/objects/2a/01514f8ea0de69fc8a152d69e4066a3a65e0f0": "e8909dc8cdaeb75ee7d61dc6bd360046",
".git/objects/41/c67881ed9d19cbd8c392ce1e354db8e88d3085": "4f6aaec51fe6a77de8a6f0d0189a7787",
".git/objects/9b/33903fc6317fbe4a14f5f937b75a85bd6a3cde": "f71f0cd208ee823928ad602c70f2bc89",
".git/objects/03/e4d80c78b3c036a6f0e4b2ba8f085a043802f1": "742794708d4093fb65db2bce0e6df807",
".git/objects/03/f0860a945eb16742f112651dc327270c0e8d6d": "ffcc3c04a97b06ed94b93184a95d8a86",
".git/objects/be/4d44c932390ee3dcac66cd3e53220d8b2d558a": "131194e24b1ae1edbe6bc367e3d750b6",
".git/objects/43/aa156f267f90a60f97600645ff0c795407c9c6": "62d5627c663cb732fc1d3a33d02bb01c",
".git/objects/4f/88a0bf8853779fa0d9c3be883b6c95b0f40107": "b04ba8fdb18799b490505ae9ae3b6fd4",
".git/objects/a2/1f0363233ebfaee8b777971728a4e3d69d0e77": "d08abaef0d895500830ca30f422ab956",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/ee/915e9faa3f8fa0fd4693438013b524a2918115": "b5a51873a8bfaf825d926de02b992c59",
".git/objects/0b/c46d235054516461905ab7162c88828e292fa3": "8075ec1f70c55a1cdbaf93af62ce53ab",
".git/objects/4b/979a5caf73a2fb5b20bcd8349beb65d6de1ffb": "5d509c156df44d8d1ccf3bbb9d700b01",
".git/objects/b2/daa448f6f39cea00cb97c83ea56e88eba0d06a": "329b4ab605c4edc52cf84a91a2f3c650",
".git/objects/b2/f73bf9ec9aa3a90a6c6ce2140d2529a8abe8b4": "451d11aa6141b0e1a818c528a05560ff",
".git/objects/93/cc816b1b8dca7dfccd3aecc7c69c6127ed024f": "00fa2cbf7ea4aa9c2631b26016ea5c28",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/6f/9e3ddaace38c87beffea69953bf75011473418": "32141e9ef8eccfd46bc6e0f21f69725e",
".git/objects/35/67d1127bfc313e95daeb098b411a316af322e9": "1d055a2d39ef33558fa7b7116ddf25ef",
".git/objects/e4/7019019898cb2a7711a04243fe7e8698998adb": "6b9f37e1721e20ea8bed7ef8fe169a20",
".git/objects/f4/7b1e2a5c6d945e9c09c9173849895fb498fd1c": "4b8a39bc4ee64c9ee236005e57a9c83b",
".git/objects/f4/e59e60fba99904784e1d4d0539176e3834ad4e": "bceec3f29f2eacb198c6757401c98631",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ba/ec4e82ae799f5a0f383d66e490eae5b2d54fbc": "f0b5bbdc5bfbee33e37f0413f6bdb747",
".git/objects/18/854876c67fdee2dbd3d0448dc69a530d5f30a7": "429e8931dc35104420408c0967b7bb64",
".git/objects/18/f8be5b4526f63ab3ba8d17b29c0ceb80e22691": "e4105f27dd079b727f860b28b005e35c",
".git/objects/5d/dbe3c1005474b6ecc3dda1b9aaab7e8487ed1c": "6a719669bc971b1b9a4b48eea8890226",
".git/objects/5d/2bc4258c134c973fcc8b012195bdcbbfbaa697": "efc8ca6532fa6b703422363620619491",
".git/objects/7c/8888d22a323052f2246647bb6f19e203758430": "d6e7e37ee2ec345203d0d23a26fb25fe",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/1d/63f774c0d3db03d3e5648d315579f34ea2571b": "cc4ae408d885ec197e89be3c9e2e374c",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/fb/7f86b72f7ebd3f53c6053eda5f01c466552a28": "86e4211f77d8fa98f33bac323ec7e3d0",
".git/objects/de/a8a38eceaafc76407fba56709f00ca5ae4483e": "f24337fa1deccc9376b8be0cad6fc2cf",
".git/objects/ed/c588f5c8d4889ee02982815b23df44bbee5a22": "112d78b5cceffd51b5f0460d7c4d91c8",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/8c/1d81e9387386d132d2733f1e77f73cde0fe90c": "c28bbd88fe3762eb1e4cb469c148e7ff",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/26/a202f78241c50d3ef127c6e27ff407c22ab5e9": "22e41ed92aba49be87b4a3193f83d85e",
".git/objects/eb/d40395d2f600311c7280dcf4e268698cb3b742": "4f697352b4b948ba8da376c33fdf455e",
".git/objects/eb/861eb1bf4c6ef4c423044a5b85f4e47d1bd08e": "0efedbad2b9dfd1bf9977237e0e39758",
".git/objects/7b/3218bd788684cc1af45243dd7a798732fb057a": "06759ce83e8dfe7a3273f25d5179f608",
".git/objects/7b/ca5ad54540c6e1b55416e1a524bc26a016e5d3": "41228ff72dc3a0e2c887e2600c182879",
".git/objects/3e/698128b9ee227e7f7d490dc42e387af09f7192": "e0f4b7919847b4c57d44e23c4058de0f",
".git/objects/3e/4a3dac66b0d0a1410023946beccdb8d5794237": "ee6eff2608efcc425bd6fee62dae19d3",
".git/objects/84/e430740cd2c0d15c1b1f124474bf6c53c0a7d9": "8e709096b1d9821a1a608947da150021",
".git/objects/f5/a19fe9ba5a5d2e95f34bda7b66125e43490533": "1fcd9d18eb45672440e35002d2aee680",
".git/objects/15/489afa0204119fbb4d19a2f123bdd72f97e762": "7681b54b1fe6eb14462abb4ebf649f88",
".git/objects/3b/6f038d74c54c4e94747b8f4f941d9a60c9392d": "773810b2bb6d798985dd5525884f9ea8",
".git/objects/c1/4f1c258a5ac934b428aec2b0cdc438f42d49f8": "a2613184e6a408fe1c83c6bb726fce89",
".git/objects/a3/ae9540f7d2c8a221aa6afac6034f5d4175c5dc": "25bf23327d7dc12d385666ac1b0fda64",
".git/objects/27/bd0c67791a37c124547c5d94e271cee7ee0b50": "144ddf1d0d33891ec04866a3f890c96b",
".git/objects/c4/0bce4154d639bb4369349d83cc9068814b9db1": "7a442f0f43cc4bf45622f1f66488b7a4",
".git/objects/c4/2815deb3373d8775ad2d154810553be26745ff": "cc79620b282e3bac3127df2b1dbfa864",
".git/objects/c4/bd607279f909caca3475e952afbbdd33b1c2a3": "95cd01f6b3c98a75c1d437271547d929",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/08/428f6da0a34a5f644facd6a0cd51b55e9fcf89": "01bfcaf360da5639e792da1062b59583",
".git/objects/60/2e5ca3982258307bba15ca6711a1af541d276b": "677aee6694957dfce0dfe049b9d3c1cd",
".git/objects/13/c42ef455b70018b1fa2bbbcbc7c578bd84ebe9": "0d857d7ccbe3a687d290642d2e2c931b",
".git/objects/8a/59fc33c7fe4e88d77362db94f39c5787015634": "f20949e89a680260d6595f2238d0b371",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/94/3b9b0b474cfccde2ea6d3c139b0d13b82ff805": "9b11658a65eb30567ef463dd9ede9b10",
".git/objects/a5/0f66aea586a2b176340c2083ef442f7b617f3a": "86f02b108cb46e22b6fb45d022acec5a",
".git/objects/85/3ffc82b886a0f738c13955f900f17a91be24a3": "375b36fcbbd7b5048b4a219b282cc734",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/8455729d07bb0b3b71232050372719b90cdd32": "7b1cd123abc1726b204ea5d39174d904",
".git/objects/5a/bdb7b454d7a7517691c791513490743855e486": "c96830f72114395048e3a41c8aa3688f",
".git/objects/b5/c60f799a8c7ce63610fc876061cfd9c070ffce": "2e49be415ba086bcac0cf399bfb17774",
".git/objects/65/42f26c8c97cf40a4d0661a553ddc31e9e5fb02": "54b293d2b147a13f3ae97deec41f0ee3",
".git/objects/65/a6eb9c55575a87bfa560f9fa795ddf91bbea98": "4d85e7dfefce8c3bb9dd762cc8605e58",
".git/objects/42/e6cd976e19bc5c549d13c3698555c956f79ba3": "759ae7607ad80746b82078e7ea235c58",
".git/objects/77/76056d2e310ee592ea8e83bdc1b2c780d1be4f": "b168b91e1973dbd91e9eb2521b68e4a1",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/53/be45c61f5f6a105584f2b05f11110aa19f742c": "b018e5ca8c82abe648c1c781f6a02581",
".git/objects/53/ec5202c7fe52a31fc60a2f0c0dce9cd5f336ff": "2df31c6d8f1a18b6e94d4a4692836674",
".git/objects/73/dc52e328555e6ce5d94f0149cffe1776b67474": "1690b6b6d7d42fb19445f117d60eb33c",
".git/objects/74/ae953d518bb88ae55fea7dccc598aa1b05bb0c": "b712c758217497c5bafd576fa5adc5d0",
".git/objects/32/5c60bdf9a81ef682566a3af8ea5be10e92c07e": "c53d4c5761cce1d8f0bee349c8e9b302",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/c9/b9d60d3e40b7b5c0ab49020c205e608cb42010": "a6283fa217e664726d3dc1ec53a63b1d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "d49fb5ab52d82fead7cab5da04a6ae20",
".git/logs/refs/heads/main": "4253595c74962cdd13a51fb07e8a10a6",
".git/logs/refs/remotes/origin/main": "e3e8a264370794ad90de426d315245cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "4545f2a8f888e5c9d0cda6098a1e0395",
"_config.yml": "2d2776841d6164413357f7f227b722a7",
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
