'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "ea5957aab6d2c6d5a65af21cde7614cd",
"version.json": "78b5df3505a599885c0325f82bf07d9d",
"favicon.ico": "d5ade6c9ac474c269f8110a56daea862",
"index.html": "fd82fb78fcaa234805aa3723c4341bc4",
"/": "fd82fb78fcaa234805aa3723c4341bc4",
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
".git/index": "7c2d8d8a8f111b66693f87cfb81dda8f",
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
".git/refs/heads/main": "d13bbc097807aa8d7c1936e728d7ca04",
".git/refs/remotes/origin/main": "d13bbc097807aa8d7c1936e728d7ca04",
".git/COMMIT_EDITMSG": "1dc25cec4aaac93a0c48b901805275be",
".git/objects/d7/0537a63f41dbd2ce9544fcee4914e4aee127bf": "cadee54863b7adc086b37dee876f4bec",
".git/objects/c6/471a05639b5154b95e64afb3e2fdf020722fdb": "e35825c6f2749ee45a438061b750a201",
".git/objects/dd/6bdcb29b772fd06e54142d6b46b385fb371a55": "eb79dbdcd47ebca2491812505498ad6e",
".git/objects/dd/cf86b4c00544655f0eeec28dccc55a34a73040": "530a544bd30fe360a874016a395bf44e",
".git/objects/25/74d874042a65a2967ca013302af2565c6d112a": "3d37efe133300141b3352008f9f27841",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/c8/3458f1f02e90ecd26fd4c94d306afc32b1d12a": "ba16a86dfa616559baddeb096d5ff6a2",
".git/objects/c8/c33c50089cc3b1cb3e913ba20ea4f575708e8b": "8988e02219b4af50c3bf41b6dbdce5a7",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/d6/70d43ad2bd71b15f62d8659890ff5bef6d419b": "a214686722f706a9e059b822674be91a",
".git/objects/3d/691f92b9d2d9a409b32970cff3c17f39a345a7": "be17f40bf2a045f90c301c092ae628cc",
".git/objects/3d/87b5a61e5bdda66e213fbc702cf6ad684c3a5b": "d09797d9d05766f9d86e22a586af65cf",
".git/objects/54/4d9ab0fcfd350eca6a2fd2466efd2819827e34": "9e2468f733492157e9bb4d83c635f822",
".git/objects/6d/6b8cfc66f1e47828f81193e05ed8354b8a2cc1": "fc7dce3e766cb78adfe560aad5b9e095",
".git/objects/44/00a8f632fbc9ba5a65d9ff94c7cd34e4381f27": "bda483b59cf35760c7eea152f441e3b9",
".git/objects/14/b9dfedc38633e899e9a4399ceb06d4dc1cbf57": "0052cdc641c4360a16481097db6215f8",
".git/objects/2a/5ed8bdd6e67eb7abb3b605d4c065e0b4ccc755": "f6f9ee05fe1e08ad9c7bb1c97327cdbe",
".git/objects/2a/01514f8ea0de69fc8a152d69e4066a3a65e0f0": "e8909dc8cdaeb75ee7d61dc6bd360046",
".git/objects/ae/7998b99c3e4554f9a354aa757b8eb6dab3a483": "26671a74054d477f7f717f8e019ae4ee",
".git/objects/ae/12a7f29017fc9f3d6424720077ea46766f5c69": "a90f980230ae43dcc5c03736a725d5e5",
".git/objects/9c/5e34f5088dc591be2dc682cc07328cc08a33a6": "abcb54f1991f8f0d37bffe3ea58756c5",
".git/objects/50/ad5d3bbceb4a5317649f871ad3deb4dde3e465": "c465bd5b4419f1d76244c34d4d0c7040",
".git/objects/b3/f022e4be54a4c57c44ada62892241bf51b1b85": "1fabbe022d5dd90014a4a5c551ce2098",
".git/objects/b3/b31e077d9200e29507c3bcbe33385490eda2f2": "988955964fdd3810075b6bc7a5d59a6a",
".git/objects/7f/2e7bfa829f6b5b6716bf1117aedc7f84f2ee43": "ae2aaa7a82d1e73d1cd4cb7b123d366b",
".git/objects/41/d963230648cfdb1f590fb61522375b2c92272b": "86b0b6008e39d144a54d943fc4dd6cd6",
".git/objects/41/c67881ed9d19cbd8c392ce1e354db8e88d3085": "4f6aaec51fe6a77de8a6f0d0189a7787",
".git/objects/80/fe73bb0a94472352886b5e7ad98e2411cfae29": "105b00179f62544a672d407e237b8ed4",
".git/objects/80/666bf98f45b8f16107dfaf56ceae692f10ec21": "587ab9c61843f2a87b59827c19f3c660",
".git/objects/9b/fe25265e2bd9455204d2f8be6dffce6419fe3c": "d38f39fe1fc8678e6bbba4995f425b3b",
".git/objects/9b/33903fc6317fbe4a14f5f937b75a85bd6a3cde": "f71f0cd208ee823928ad602c70f2bc89",
".git/objects/03/d9648167c970c471cbc25b9c9385299f8918a8": "f0614087ef5df532c787c4586602243d",
".git/objects/03/e4d80c78b3c036a6f0e4b2ba8f085a043802f1": "742794708d4093fb65db2bce0e6df807",
".git/objects/03/f0860a945eb16742f112651dc327270c0e8d6d": "ffcc3c04a97b06ed94b93184a95d8a86",
".git/objects/be/4d44c932390ee3dcac66cd3e53220d8b2d558a": "131194e24b1ae1edbe6bc367e3d750b6",
".git/objects/a9/a036fbb9b2c972728e88b1c02247a1b1aecd30": "6710f9b125dc8cf45e24d21602d74f0a",
".git/objects/e6/a2620a9d7f139b6c3c0c984dbf9c4ab0ea9def": "2e055b1f367eaa2fde131cba85dcd382",
".git/objects/43/fb8cc06e3e2f3a17428f55824ab0fbfd1efd2d": "916c399ea4582d2b027e24510c17a87e",
".git/objects/43/ad7a21d5e4268c124db1511177017567793ba7": "fa8961caef382f0cf19eabeb66734475",
".git/objects/43/aa156f267f90a60f97600645ff0c795407c9c6": "62d5627c663cb732fc1d3a33d02bb01c",
".git/objects/28/ce1ae4662f4b25cecc9c5bdaa39aa5b9de9f2d": "c4ccfd852466986029f1291e9c7bf12b",
".git/objects/51/53d2aacad786982764c90107691bce95560ffb": "1b355c4eede3e85a0337e3cd285ced0b",
".git/objects/51/14368405057c1bb1b6b35f2f81224e81c92126": "ce0332f6adbb34dc0f89ecbae75f5650",
".git/objects/4f/88a0bf8853779fa0d9c3be883b6c95b0f40107": "b04ba8fdb18799b490505ae9ae3b6fd4",
".git/objects/4f/e756dcfdb2f49a9adad17f18b16d194152c67c": "236c12e7eec5e307af9d3770adcfa84b",
".git/objects/a2/b6784f9911be5928b21568536a1ef59cc1cac8": "0ff09b6dc2788d1ef847be522af033ef",
".git/objects/a2/1f0363233ebfaee8b777971728a4e3d69d0e77": "d08abaef0d895500830ca30f422ab956",
".git/objects/af/4ae9016bc891ad85e973cc9328a90120564c2c": "fcaf857d2f09b4bc7b2656bb9057b6c9",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/22/8f64eea6e20890d8eebfda4a2cd974e0484c4f": "e6b87868356a1554f2b0c3b8e3935a0b",
".git/objects/22/caab6f0a8497e23ea89e4d5b1c8a2e2c8cfe9a": "1dd056a7b5c68a72a6ac3a698aa02b39",
".git/objects/ee/915e9faa3f8fa0fd4693438013b524a2918115": "b5a51873a8bfaf825d926de02b992c59",
".git/objects/0b/c46d235054516461905ab7162c88828e292fa3": "8075ec1f70c55a1cdbaf93af62ce53ab",
".git/objects/4b/979a5caf73a2fb5b20bcd8349beb65d6de1ffb": "5d509c156df44d8d1ccf3bbb9d700b01",
".git/objects/b2/daa448f6f39cea00cb97c83ea56e88eba0d06a": "329b4ab605c4edc52cf84a91a2f3c650",
".git/objects/b2/f73bf9ec9aa3a90a6c6ce2140d2529a8abe8b4": "451d11aa6141b0e1a818c528a05560ff",
".git/objects/93/7e14b7861f54f27d3126527c894d46ded83e5e": "7017ef6453c72aa9703cbcd47cfba940",
".git/objects/93/cc816b1b8dca7dfccd3aecc7c69c6127ed024f": "00fa2cbf7ea4aa9c2631b26016ea5c28",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/bb/74ab6c59e56293806ba4a8b222300a5410ff37": "2686ac6f9cc1e68ba99c6b13612539aa",
".git/objects/6f/9e3ddaace38c87beffea69953bf75011473418": "32141e9ef8eccfd46bc6e0f21f69725e",
".git/objects/ab/d9ed4eb3880d4dc77c78ecf8e5b28c65ea2a8b": "77a7df527ada8602eabb6b0d63bdc016",
".git/objects/35/67d1127bfc313e95daeb098b411a316af322e9": "1d055a2d39ef33558fa7b7116ddf25ef",
".git/objects/e4/7019019898cb2a7711a04243fe7e8698998adb": "6b9f37e1721e20ea8bed7ef8fe169a20",
".git/objects/07/a0fa278055c27ddc1d4899205f4e79210ae7cf": "61077ab6a95b160f6d248b64ee26d571",
".git/objects/90/6ccca7b0544af70167df013cbea1f6c4ec7892": "b98dc81b6451ec0191fe674317d2f025",
".git/objects/f4/7b1e2a5c6d945e9c09c9173849895fb498fd1c": "4b8a39bc4ee64c9ee236005e57a9c83b",
".git/objects/f4/145df52d6c4f38db2b0dbb1420564615600505": "9fcab2b5c476c853c71701dd0ccdf6dc",
".git/objects/f4/e59e60fba99904784e1d4d0539176e3834ad4e": "bceec3f29f2eacb198c6757401c98631",
".git/objects/e0/38b9f35d3016a8986d9e617e7af69091965652": "450528f3ec423a19c1cff808880e233f",
".git/objects/97/52e4a2dbe9e30586a2ecb8d19124aab712937c": "9083ce7306829aca8795dee29c729c16",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/37/78c60bdf2eb83b544fc7a6c98ad0f72c14a73c": "10960082dc5089c48f0404ba94b71703",
".git/objects/37/ede2e7497f1a2b923cf218e4d9f8966abd9ac4": "e4a9ecd5fc4f310de3c64db838f034bc",
".git/objects/ba/ec4e82ae799f5a0f383d66e490eae5b2d54fbc": "f0b5bbdc5bfbee33e37f0413f6bdb747",
".git/objects/c2/669b6ad14759e599457517f90b32ac2e25ee8a": "58b68ecc6edaa775deaabbba4323ce72",
".git/objects/db/ddb01836fb4a399f051312a246081e6e17556a": "a984ae6b24960f384800342d9aa7b411",
".git/objects/18/9ca4b4b14ccf3996755fe50dd6fccbf2ca4e1b": "103002632d25e518ed4d0ca8710841e0",
".git/objects/18/fd96ed2cba56946eeef635f250b63ee8a428f4": "c097812e537f0167d24caaad215d2449",
".git/objects/18/854876c67fdee2dbd3d0448dc69a530d5f30a7": "429e8931dc35104420408c0967b7bb64",
".git/objects/18/f8be5b4526f63ab3ba8d17b29c0ceb80e22691": "e4105f27dd079b727f860b28b005e35c",
".git/objects/5d/dbe3c1005474b6ecc3dda1b9aaab7e8487ed1c": "6a719669bc971b1b9a4b48eea8890226",
".git/objects/5d/2bc4258c134c973fcc8b012195bdcbbfbaa697": "efc8ca6532fa6b703422363620619491",
".git/objects/bd/1cc8f40af8b1f18267b30bd8a7e83deaeb4392": "cf0269d4f3ff15348c5c113947041a15",
".git/objects/3a/2c3a0cdd8b60d8a110040224c6ac60788455e0": "21cea2803123953810ea59e3662552e5",
".git/objects/55/8d643d8dec583518a2534d326dbfef4ebbac4a": "d5d953e6f7a73dd44e2ebe9ccf384505",
".git/objects/55/5e0669f3b3697110d69f195cf74ac801a10daa": "f38d9ccf00ceab22e5212eb1711c41a8",
".git/objects/7c/8888d22a323052f2246647bb6f19e203758430": "d6e7e37ee2ec345203d0d23a26fb25fe",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/1d/63f774c0d3db03d3e5648d315579f34ea2571b": "cc4ae408d885ec197e89be3c9e2e374c",
".git/objects/1d/5b1eb8ad294e5a5726139c3e0fdb7b67eb75e0": "71d8db2dade3efe0255138485288ab3a",
".git/objects/47/b4e11fcd49d368659d0b795e7a42248f420743": "5bc3f214834037145c697788e75b24d7",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/57/03723608433aa890ea3bbac4cdb3b44d41db76": "f2aa6ee359cacbc1bdce49b96cafc205",
".git/objects/70/c11336f5ef9fd03c61afa6ebbbc3536978b9ca": "09565a34d13fadca58da350cd2304fcf",
".git/objects/d1/65bf16b4f944c57f97736f0df67dd8766b9b0f": "23cc67ef1c70a7c8af64c4e8bc7dc3a5",
".git/objects/fb/7f86b72f7ebd3f53c6053eda5f01c466552a28": "86e4211f77d8fa98f33bac323ec7e3d0",
".git/objects/de/a8a38eceaafc76407fba56709f00ca5ae4483e": "f24337fa1deccc9376b8be0cad6fc2cf",
".git/objects/ed/c588f5c8d4889ee02982815b23df44bbee5a22": "112d78b5cceffd51b5f0460d7c4d91c8",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/ac/6a01dd1a2fe35aa6f5b032a83614e3ad8a9fe0": "6991cd543fd985c978dc88cbaa846f65",
".git/objects/df/6066e2ae11f2d67707c505e71e320199632836": "08188dff53b0ac19146ed6988a6ecafa",
".git/objects/df/2cd40f719668e08c3855af831fb3f52b98ce04": "fa757cece7cd1615545ba154d5aacdfa",
".git/objects/17/f2030e9589b001ad7bf7a1fe99a2095419ad39": "2849d52677640060dd9305eacdb52830",
".git/objects/0d/13ab82f1a00bb202749459cc554865744d0345": "fabeb4a1a87100b73d8550c31b5ac4f5",
".git/objects/8c/eef610f9d6bcd79b9dc013ecd88768f68d143c": "b40394a7eedead823d8b5699cbc9174b",
".git/objects/8c/1d81e9387386d132d2733f1e77f73cde0fe90c": "c28bbd88fe3762eb1e4cb469c148e7ff",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/5f/ae3f9f2193605bf39e4d82dde225c5de56b623": "4a94ae6d2fe53dbb2329a87c25617edf",
".git/objects/26/1c04ffbd442ca89ae8d21a91cd12f67063de80": "084829b1b9160794a73c3cdf9c88dbac",
".git/objects/26/a202f78241c50d3ef127c6e27ff407c22ab5e9": "22e41ed92aba49be87b4a3193f83d85e",
".git/objects/ec/55075dd67cdfdbabeea68f9c2195891fbdfa60": "e910920344aa2e61803497a843afff57",
".git/objects/ec/4ebbf6d193c8d014fcb8d594c8aa97ec53d1f3": "ca950d18aac450a6ef05ddf4bc3f7310",
".git/objects/eb/d40395d2f600311c7280dcf4e268698cb3b742": "4f697352b4b948ba8da376c33fdf455e",
".git/objects/eb/861eb1bf4c6ef4c423044a5b85f4e47d1bd08e": "0efedbad2b9dfd1bf9977237e0e39758",
".git/objects/1a/6a22a847593ef81df0c1504e7f1f0e55ead509": "414813068891630b7a71c0d3db449595",
".git/objects/7b/3218bd788684cc1af45243dd7a798732fb057a": "06759ce83e8dfe7a3273f25d5179f608",
".git/objects/7b/ca5ad54540c6e1b55416e1a524bc26a016e5d3": "41228ff72dc3a0e2c887e2600c182879",
".git/objects/3e/fd9cc923f81a41a8eaac1bc981752d4222317f": "e9ecaf1746e7dae849be0c774e6f5f77",
".git/objects/3e/698128b9ee227e7f7d490dc42e387af09f7192": "e0f4b7919847b4c57d44e23c4058de0f",
".git/objects/3e/4a3dac66b0d0a1410023946beccdb8d5794237": "ee6eff2608efcc425bd6fee62dae19d3",
".git/objects/84/e430740cd2c0d15c1b1f124474bf6c53c0a7d9": "8e709096b1d9821a1a608947da150021",
".git/objects/4c/afed272d1fc01e0f63bbfe4b9dfb487c13ed5f": "be00c6edcd3aca791c8aa4778b0485c0",
".git/objects/f5/24b407e7155550274bea98d8a7acea2945cd92": "7f903c2c0152b9b90b124f80dc0a42c3",
".git/objects/f5/a19fe9ba5a5d2e95f34bda7b66125e43490533": "1fcd9d18eb45672440e35002d2aee680",
".git/objects/15/489afa0204119fbb4d19a2f123bdd72f97e762": "7681b54b1fe6eb14462abb4ebf649f88",
".git/objects/15/9fad349dbdca9554543e89daf01b60473af542": "a4d412039f8f92f705d3f138ed23426b",
".git/objects/3b/6f038d74c54c4e94747b8f4f941d9a60c9392d": "773810b2bb6d798985dd5525884f9ea8",
".git/objects/3b/092e9ccface11536ad460105c0802e6d43469a": "83f73cabdc70a5c8366929141a284ccc",
".git/objects/c1/4f1c258a5ac934b428aec2b0cdc438f42d49f8": "a2613184e6a408fe1c83c6bb726fce89",
".git/objects/a3/ae9540f7d2c8a221aa6afac6034f5d4175c5dc": "25bf23327d7dc12d385666ac1b0fda64",
".git/objects/a3/ec8c9f1d917518af80e56b554592c5bd21b263": "643222924eeed92118db8b82c194c6f7",
".git/objects/fe/aed42c86ce40a36e6e3da9fcb12b1039c592fc": "6b3a5cf42a45af7f6a814da0495d5464",
".git/objects/5b/4774eece6d567e981786965345374b3567e29d": "b9d93dad85b3fb541b4b1c5f6b889aaa",
".git/objects/bc/2612a1048f1a88a23ea17d26eede419125f389": "972974fc8ece582145dfef5baa61de39",
".git/objects/33/cf5b22fda05d510ba626b7e810fcfe9cd32754": "9cab1c20ce14fb74d7986230acadc37d",
".git/objects/33/38221bc7d09bdb4962ea08d4b87e14a23f4ede": "91a50225799290bdb3a2362753f826ff",
".git/objects/11/d8208574168e8126663ee3b2ec22088b92d9ca": "46e11a104fee3ba2e93cb729550b6f0d",
".git/objects/27/bd0c67791a37c124547c5d94e271cee7ee0b50": "144ddf1d0d33891ec04866a3f890c96b",
".git/objects/2e/d7bd95cd3777c2c089a4710a0115833a8f13ca": "62b1c3fb11b06da3193c971cd5376cea",
".git/objects/c4/0bce4154d639bb4369349d83cc9068814b9db1": "7a442f0f43cc4bf45622f1f66488b7a4",
".git/objects/c4/2815deb3373d8775ad2d154810553be26745ff": "cc79620b282e3bac3127df2b1dbfa864",
".git/objects/c4/bd607279f909caca3475e952afbbdd33b1c2a3": "95cd01f6b3c98a75c1d437271547d929",
".git/objects/c4/d8cd44e1e132efc1d898ee3c423e540b462a01": "86dc458e5f709a9bdc78f39b83b19809",
".git/objects/f9/bc109887e3d633106057b4c335027c9b56d7f5": "713db1626e17100d89d19bfb390463b4",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/c5/03f25f931ce680b2e847f723713e1580227c52": "ea6c86ba3b9578e58893b4618be4b922",
".git/objects/08/428f6da0a34a5f644facd6a0cd51b55e9fcf89": "01bfcaf360da5639e792da1062b59583",
".git/objects/60/2e5ca3982258307bba15ca6711a1af541d276b": "677aee6694957dfce0dfe049b9d3c1cd",
".git/objects/9f/2d9f53dc0ce9b96ad5c8c0056b11d9c3e08243": "5110bc9eb071a714b7f22d8e42f35914",
".git/objects/13/25c6f350e6472986b23245bb660919f77b1117": "094656d7a10697602d008b06b4abed0a",
".git/objects/13/c42ef455b70018b1fa2bbbcbc7c578bd84ebe9": "0d857d7ccbe3a687d290642d2e2c931b",
".git/objects/71/a0253bcb25bc4323e844932f1c196877966742": "594f41354038de7c4838f5b8737ea092",
".git/objects/8a/59fc33c7fe4e88d77362db94f39c5787015634": "f20949e89a680260d6595f2238d0b371",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/94/3b9b0b474cfccde2ea6d3c139b0d13b82ff805": "9b11658a65eb30567ef463dd9ede9b10",
".git/objects/a5/4bc37cf2d46a2a0987da4617c9482b775461a0": "5fcfa28032a1fb39d7a697fdc257f885",
".git/objects/a5/0f66aea586a2b176340c2083ef442f7b617f3a": "86f02b108cb46e22b6fb45d022acec5a",
".git/objects/86/7ca16d41a191a7a0933d86897a4c77c10cadbe": "63f68581755bb5f22f63725dd0702f60",
".git/objects/85/9e38717a87fa7c35f32ac3f1d8297d9ede9a17": "561ba143671c6d4833c73058f837587c",
".git/objects/85/3ffc82b886a0f738c13955f900f17a91be24a3": "375b36fcbbd7b5048b4a219b282cc734",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/9229cb0e66a4ccc0f710912e96520d2ce3126b": "ff0f9d3f4c9a541417eb29477efce206",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/8455729d07bb0b3b71232050372719b90cdd32": "7b1cd123abc1726b204ea5d39174d904",
".git/objects/5a/bdb7b454d7a7517691c791513490743855e486": "c96830f72114395048e3a41c8aa3688f",
".git/objects/c3/babfc28ba6e72facbc0e9bc7cc8a337f9d9b2a": "398b9ce3e64b2023a8cb19c49222c006",
".git/objects/b5/b175e21d2f3952b1002ee942fb63d83b9ea7a8": "c057b069b475d4a1035942968ab2a33e",
".git/objects/b5/c60f799a8c7ce63610fc876061cfd9c070ffce": "2e49be415ba086bcac0cf399bfb17774",
".git/objects/b5/18ecd39f21c6b3d815b933c8940cf63f14bf66": "be545182b616fb2d4a13db1cfd39c2f0",
".git/objects/b5/c360d62609b977d647ac3e24b0e9460c53ebf4": "6153e69ec303918745fe891df4ee3a68",
".git/objects/ca/e2adbc70ed0d677786c664ba9f8d8c6290fc5c": "4efb18e4bec4f1888a26676f37f6a0ae",
".git/objects/65/0f88dc9c03d719a0a72ce9710662ea4ed28eee": "f7e2a3cca26f59a45fc4349b6077a724",
".git/objects/65/42f26c8c97cf40a4d0661a553ddc31e9e5fb02": "54b293d2b147a13f3ae97deec41f0ee3",
".git/objects/65/a6eb9c55575a87bfa560f9fa795ddf91bbea98": "4d85e7dfefce8c3bb9dd762cc8605e58",
".git/objects/24/d2a8da4c8b9119532c5c8dc2fd070f681ab9c1": "edf9f728f2c67195da3b66e708a1a012",
".git/objects/4a/5b2a9ecca8c508cd91dd3736bbb92ad178b571": "473434f6ea1d5c451ca12378d675fa73",
".git/objects/4a/eb63e8bbc77e3499dbf39a8995009ea9e3fe5c": "67e51f6df80f18f7b1259926e4e91f5a",
".git/objects/16/a7240d1f3362c851c79f5bc41210e03f6db516": "26c2509b5b81719cdb6d89c65722989c",
".git/objects/42/e6cd976e19bc5c549d13c3698555c956f79ba3": "759ae7607ad80746b82078e7ea235c58",
".git/objects/7e/f4f01727fd98d8683b18607aa97ad3dc8ae2da": "e682bf0b240655f20d7a1dad9de58444",
".git/objects/77/76056d2e310ee592ea8e83bdc1b2c780d1be4f": "b168b91e1973dbd91e9eb2521b68e4a1",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/53/be45c61f5f6a105584f2b05f11110aa19f742c": "b018e5ca8c82abe648c1c781f6a02581",
".git/objects/53/ec5202c7fe52a31fc60a2f0c0dce9cd5f336ff": "2df31c6d8f1a18b6e94d4a4692836674",
".git/objects/73/dc52e328555e6ce5d94f0149cffe1776b67474": "1690b6b6d7d42fb19445f117d60eb33c",
".git/objects/74/ae953d518bb88ae55fea7dccc598aa1b05bb0c": "b712c758217497c5bafd576fa5adc5d0",
".git/objects/32/5c60bdf9a81ef682566a3af8ea5be10e92c07e": "c53d4c5761cce1d8f0bee349c8e9b302",
".git/objects/32/f492ab64d4779cf8070373f5047660d04abec1": "d82c724e62faf291318cea1fff379739",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/92/e0b1025db2277156029ebfc99a98cf9b4f59ba": "f5c55e738d456403dbf2f94639666c84",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/969df44a3126f998016bf0a41475f2296b20ed": "7593c759d4e5682624c7867ac79e13bd",
".git/objects/c9/b9d60d3e40b7b5c0ab49020c205e608cb42010": "a6283fa217e664726d3dc1ec53a63b1d",
".git/objects/c9/098fad4df9432e85b65175eefaeef7dc744aaa": "ba24da40d06ab5700f8eebf9298fcb0c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "31c584fcaa4c303e28b165da5c9f7ccf",
".git/logs/refs/heads/main": "d458d28cf063f6f44a60886afc310ecd",
".git/logs/refs/remotes/origin/main": "25b4fc6a93e3b8090e02f7eae2450bc1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "5cf31682a0234999646e41d3d46b89f7",
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
