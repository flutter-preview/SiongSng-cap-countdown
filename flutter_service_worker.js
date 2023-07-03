'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"privacy.html": "c3fb32b427f0ec50ae1929578ee8c78c",
"assets/NOTICES": "eaec7cda3159a3b87abfaaf8ed7bf66b",
"assets/assets/audios/exam/111_listening_5.mp3": "1939a5f537ec5c6c2eea39bb4f87db01",
"assets/assets/audios/exam/111_listening_example_3.mp3": "53cbdf6a3d165c8d8ce1338cb777d553",
"assets/assets/audios/exam/111_listening_15.mp3": "6965c5ac558f875c23cb6d78a1a0c70a",
"assets/assets/audios/exam/111_listening_16.mp3": "206bbacf5a1a6dc183c53b36e593381b",
"assets/assets/audios/exam/111_listening_13.mp3": "f34bf53207dddbd4b00b676d5974c671",
"assets/assets/audios/exam/111_listening_10.mp3": "45cc09016ffaff915bbf81ff40f88bbe",
"assets/assets/audios/exam/111_listening_2.mp3": "35cddcccf2111a762835c516dcee0977",
"assets/assets/audios/exam/111_listening_example_1.mp3": "9dbb449f651e99c76da40476a02b9e3d",
"assets/assets/audios/exam/111_listening_19.mp3": "63e3053bdfddeaf032d9ad0133d1e9e9",
"assets/assets/audios/exam/111_listening_12.mp3": "cf85010c8a1ed686101f189a2b02dba2",
"assets/assets/audios/exam/111_listening_17.mp3": "c63f1fbf7499c2e21bc57af86c004443",
"assets/assets/audios/exam/111_listening_20.mp3": "327e2ac5c04c8bc672253abd518807b6",
"assets/assets/audios/exam/111_listening_7.mp3": "2b588eb4b7c76c239596670049bd32fc",
"assets/assets/audios/exam/111_listening_4.mp3": "85ed030e7670babd5f0acb06321659c8",
"assets/assets/audios/exam/111_listening_9.mp3": "34dbe8a5c9d128da27befba48694a996",
"assets/assets/audios/exam/111_listening_1.mp3": "c140ae24e44febfad6b7ca5c9ac912c6",
"assets/assets/audios/exam/111_listening_14.mp3": "295da6fc2a397d069c7576c91599de44",
"assets/assets/audios/exam/111_listening_18.mp3": "5a661b75d5cb0b4046f35649748b2584",
"assets/assets/audios/exam/111_listening_21.mp3": "6253b9d06a9cb8e60b9ca65db05cbc10",
"assets/assets/audios/exam/111_listening_3.mp3": "3f16f00b3206e178ce8e538750f7ad37",
"assets/assets/audios/exam/111_listening_8.mp3": "d95473c6871d95b0f0ed8b7fe40e0857",
"assets/assets/audios/exam/111_listening_example_2.mp3": "be59956f1b0b8306a2bc4a53ef326c0b",
"assets/assets/audios/exam/111_listening_11.mp3": "4bb9dfdb68a8692428aaf6da0045d3c3",
"assets/assets/audios/exam/111_listening_6.mp3": "0c12204b13c5cd6a10129e6835a7218d",
"assets/assets/animations/animation_review.lottie": "d2b417f9cd1ad836d1af41f106ea38a4",
"assets/assets/animations/135507-exam-prep-topics.json": "3d8f891ea3d14c457be516ffb48078d5",
"assets/assets/images/exam/110_nature_39.png": "e1ea8d7cbd8b53b9e6e0e02614d5b1f7",
"assets/assets/images/exam/111_math_16.png": "836a5385b1f058eab5755c838a124996",
"assets/assets/images/exam/111_nature_33.png": "2d829fe7597de743fb5a853f5cccb138",
"assets/assets/images/exam/111_society_15.png": "fe76d8af770b9efabb53cf937985be19",
"assets/assets/images/exam/110_nature_48-49.png": "954781369b009314e26e475e8d39c231",
"assets/assets/images/exam/111_society_19.png": "55274f624db617c8aca4685d000c26af",
"assets/assets/images/exam/111_nature_17.png": "2eb9cd9a9f8e17cadc010676f1a08cbd",
"assets/assets/images/exam/111_math_23.png": "b031f75f21bc8d9f260638320c4d9461",
"assets/assets/images/exam/111_society_11.png": "88a610b6c6a4f95ac4fa10ba17c4f44f",
"assets/assets/images/exam/111_society_18.png": "ab5ac583feee7d0757a59d9545ecf637",
"assets/assets/images/exam/110_nature_40.png": "4bf5ebcf23345785eb23e3e114938a7a",
"assets/assets/images/exam/111_nature_45-46.png": "347d9bb6c740b74b551aa23a8a7d43cd",
"assets/assets/images/exam/111_society_3.png": "c576013edd54e32db8929f7847525648",
"assets/assets/images/exam/111_society_2.png": "9ea5b9e42d614ee26a09eba2f28966e1",
"assets/assets/images/exam/111_society_26.png": "47aec4298ebdcd8b03649dd9ff5622ec",
"assets/assets/images/exam/111_nature_16.png": "d709f19bd9e1f8294d5c73cd476e2efc",
"assets/assets/images/exam/111_chinese_11.png": "db2ec9aca903a0b77c1c4f95517c6907",
"assets/assets/images/exam/111_nature_25.png": "b46a924fedbe1c13288fd3302ac3436e",
"assets/assets/images/exam/110_nature_36.png": "44ab42356e0f80bb5c5aa1f1d0ae118a",
"assets/assets/images/exam/111_society_24.png": "55096e14b99a7e92dfb35afc8faf4f72",
"assets/assets/images/exam/111_society_6.png": "b3bb6f665f122d7bd4a6550596f7cf0c",
"assets/assets/images/exam/111_english_33-36.png": "73bb71de9f1c90f16669bf5fad01ac8c",
"assets/assets/images/exam/111_math_21.png": "8547e169d11030816ed9a17669d43a16",
"assets/assets/images/exam/111_english_33.png": "f45cfad85997aa0a2cdb0a4a7ddeb9fd",
"assets/assets/images/exam/111_math_24-25.png": "eb01e59035711a1122d934470eba2ef8",
"assets/assets/images/exam/111_english_21-22.png": "400de3451883e19eeffe076ab38a8c25",
"assets/assets/images/exam/111_nature_21.png": "d13cdb4955aca3ebf1898c10a1e80c1a",
"assets/assets/images/exam/110_nature_26.png": "fd00e99e5aabdaaeb2e3a3434a85093f",
"assets/assets/images/exam/111_society_16.png": "be7d948468f56e3b0342e38c69ccbeb4",
"assets/assets/images/exam/111_nature_15.png": "d7cd0a464796c13049cfa27a07c22041",
"assets/assets/images/exam/111_listening_example_1.png": "e32b35bd6d99783cde6a2e39af724b31",
"assets/assets/images/exam/111_chinese_4.png": "87de511d4a4da86be5d95ec852429c62",
"assets/assets/images/exam/110_nature_29.png": "aed6d86e83f226118db8b46dbfff95e7",
"assets/assets/images/exam/111_nature_47-48.png": "13e5f66d7f04f49c5c7effd52f9d3e3d",
"assets/assets/images/exam/110_nature_3.png": "c90f248d6e92a68d7f066e316d907efb",
"assets/assets/images/exam/111_nature_27.png": "d4f56ebd14fe545ad2186e311b88255f",
"assets/assets/images/exam/111_society_31.png": "54c2dfb7c0d88b87859d172ad08bc60d",
"assets/assets/images/exam/111_nature_41.png": "9d69cccd0f6ebe5539672cb1feb7f47c",
"assets/assets/images/exam/111_nature_43.png": "b23db85cc32231bd139b4b7c2032f7d9",
"assets/assets/images/exam/111_math_20.png": "7a76e55b08aaac7cc11b0bf0d67903b2",
"assets/assets/images/exam/111_nature_20.png": "1adf90f92738523590b2af01d40aeb05",
"assets/assets/images/exam/111_nature_12.png": "e6defaf41f1b6ffb10cdb32d2185ac41",
"assets/assets/images/exam/110_nature_52-54.png": "06820127027d4588e41cdbd925dc86ca",
"assets/assets/images/exam/110_nature_43.png": "71a6261ad9510fe6acf2552abd7a065f",
"assets/assets/images/exam/111_nature_23.png": "03e642837a009471ab4a670273901487",
"assets/assets/images/exam/110_nature_37.png": "cdad09c47a52810b30f574b57a263559",
"assets/assets/images/exam/111_listening_1.png": "289bed6fe0ed6c2451b04d34da235e1c",
"assets/assets/images/exam/111_nature_34.png": "6236bed003cef61b9d875b44c7a82b7f",
"assets/assets/images/exam/111_society_23.png": "2d23872bcf2eddf7383e3490079d73fd",
"assets/assets/images/exam/111_math_15.png": "27e820ed145135cc2364930a9af5f734",
"assets/assets/images/exam/111_chinese_26-27.png": "74c00e3a1ca734a137cbf4a29a3428d3",
"assets/assets/images/exam/111_nature_39.png": "1f0eb6bad3f7437d5a567fe66d8bb972",
"assets/assets/images/exam/111_listening_3.png": "0ca9eeb7d67332999dfd347243874d60",
"assets/assets/images/exam/110_nature_22.png": "a80e44901576646090c363cd5ebf7f6f",
"assets/assets/images/exam/111_society_27.png": "553e788a8b5e25ffbd01d0fb0a5544c1",
"assets/assets/images/exam/110_nature_16.png": "e04664929378e078b27010f749eee6de",
"assets/assets/images/exam/111_math_13.png": "0d226a1c113e1971b2bd4bfec4c3cc47",
"assets/assets/images/exam/111_math_4.png": "1c46edd932d3d36dc58067ad9389f180",
"assets/assets/images/exam/110_nature_1.png": "2356761173d28f34e3248c9ce02b6c4c",
"assets/assets/images/exam/111_society_20.png": "672bc9cc8c72f698943293c48a50eff1",
"assets/assets/images/exam/111_nature_42-44.png": "f07865c18b8377dc62752a0426b01a8a",
"assets/assets/images/exam/110_nature_24.png": "0bc9a531a3b6998003981d00292d6761",
"assets/assets/images/exam/110_nature_18.png": "0cac87022e87d41f0953fcfa7fd3a61a",
"assets/assets/images/exam/110_nature_33.png": "909a09dd557a7d04429d91071e30b2d7",
"assets/assets/images/exam/110_nature_32.png": "cf03183fd74a25fa8b4a800696b8c62f",
"assets/assets/images/exam/111_math_11.png": "430ca881030dfe0dcbe74e8f02aaa25a",
"assets/assets/images/exam/111_nature_35.png": "5f7cbb3d51882d7fb16050e0d1e03d3c",
"assets/assets/images/exam/110_nature_31.png": "92d79da6d4b5a213ce83c59b6fc5fb5b",
"assets/assets/images/exam/111_nature_48.png": "78fab75e48707c430c979f765e34cc85",
"assets/assets/images/exam/110_nature_44.png": "e4c8843d14bab5f495b5cb01403372c3",
"assets/assets/images/exam/110_nature_8.png": "841090101189ed210a55b857f9787e13",
"assets/assets/images/exam/111_nature_7.png": "98ac956bf61ff49d7aa7336bf66bfe35",
"assets/assets/images/exam/111_nature_28.png": "6f20d243c244b616b1bc7db132765502",
"assets/assets/images/exam/110_nature_12.png": "4cdc4726b84b5327fb50dea71b740afb",
"assets/assets/images/exam/111_society_53.png": "3e404cfde37f4b7c14cdfcf9f17bd8ff",
"assets/assets/images/exam/111_math_19.png": "99c766bcfdb93fa084f9fd32f3d9fcf0",
"assets/assets/images/exam/111_society_39.png": "10b8d001748e5e27a1580d53d5b7d820",
"assets/assets/images/exam/110_nature_45.png": "e2eb98773db2f88e2378913b1c9f1b27",
"assets/assets/images/exam/111_nature_24.png": "92065e519457ba21af6a591ad17e3241",
"assets/assets/images/exam/111_society_5.png": "c83092636f4eb69b10d899d10275bebf",
"assets/assets/images/exam/111_math_1.png": "11e814e5c25c72e059b62b9f43df85f5",
"assets/assets/images/exam/111_listening_2.png": "190a777d06bea128d31b9bf62f369fdb",
"assets/assets/images/exam/111_society_13.png": "af4da9aad96cf7bb8ac61091cef299d3",
"assets/assets/images/exam/111_nature_11.png": "b3bc74d46efd08a6c96bd863bea375b8",
"assets/assets/images/exam/111_society_43.png": "78914581bf16667cc2b1fd7c29fd3cd6",
"assets/assets/images/exam/110_nature_35.png": "7c5ff6b031b956b06f6609eba18181cf",
"assets/assets/images/exam/111_chinese_30-31.png": "39aedaec6fd13199011705dfda798907",
"assets/assets/images/exam/110_nature_27.png": "cdfc413b5273078ae31356a266bfad58",
"assets/assets/images/exam/111_society_12.png": "f2e91583c70f7682fcb8332a7170a312",
"assets/assets/images/exam/111_math_25.png": "881b027c754ee3e63f094ad8731adf81",
"assets/assets/images/exam/110_nature_17.png": "739e9e1ca356b37cf3dfb14849463520",
"assets/assets/images/exam/110_nature_7.png": "518753b2eea0409fe1ec62857cfc6e80",
"assets/assets/images/exam/111_society_36.png": "aa65acf7ff097f682ec76f12f05d81e8",
"assets/assets/images/exam/111_nature_8.png": "acfedc21f40bf4c8064eeac41b786560",
"assets/assets/images/exam/111_math_17.png": "07bdd4e3c417962e972468df60409a00",
"assets/assets/images/exam/111_english_30-32.png": "3720d308d5c010da97b820706664332f",
"assets/assets/images/exam/111_math_14.png": "fd234b9d78f700ca059ce1d80646343f",
"assets/assets/images/exam/111_nature_30.png": "3cca787d135a9c1838135f5bc635285b",
"assets/assets/images/exam/111_society_29.png": "404bf2945bcc83c743ceffca4ee19099",
"assets/assets/images/exam/111_chinese_25.png": "bb0a6a06ee5d56686152b441d6959cc5",
"assets/assets/images/exam/111_nature_42.png": "8b5595fb1a531de771a2964188f8a997",
"assets/assets/images/exam/111_society_40.png": "afeb793fdaf8cc9831d0e1e499a88ab3",
"assets/assets/images/exam/111_english_23-24.png": "5684f0e026e2e0b1cca5174ce48c83ea",
"assets/assets/images/exam/111_english_40-43.png": "1fd9d216c077eeb5476759c569e585fc",
"assets/assets/images/exam/111_english_37-39.png": "8ddb0218efe474a9cfb21531a145c3e6",
"assets/assets/images/exam/111_chinese_36.png": "66751ba5d3ad2833eae0c3c9582b98da",
"assets/assets/images/exam/111_math_18.png": "42b0f1da08b141b421397e29b4a33c5b",
"assets/assets/images/exam/110_nature_11.png": "e35d627f7ddd9f28c41f16fd77d8919e",
"assets/assets/images/exam/111_english_27-29.png": "2010325bac944fd4ff7644d17558665c",
"assets/assets/images/exam/110_nature_28.png": "67517b23a51cf75f0591628f4fba8037",
"assets/assets/images/exam/111_chinese_21.png": "2a56071f955aee0326da48e91f305576",
"assets/assets/images/exam/111_society_46-48.png": "c6cc5a55088f6c157a9324b3a4557ec6",
"assets/assets/images/exam/111_nature_26.png": "1c166457231d4a181d5ac0e0ca57a23b",
"assets/assets/images/exam/110_nature_20.png": "023d8e2f82615f57a62895c3c05bd46e",
"assets/assets/images/exam/111_society_52-54.png": "aa7da57d20cd8d58af154f5e291ccd86",
"assets/assets/images/exam/111_chinese_34-35.png": "551cd1b3f8defc0648accb2065526ee0",
"assets/assets/images/exam/111_chinese_28-29.png": "c90bfb275873031011108d4e555a437d",
"assets/assets/images/exam/111_society_8.png": "e6905901d1386db3c221dbdb8d4b0dec",
"assets/assets/images/exam/111_society_38.png": "68d6bfa3e72578f037b71c2e6148b187",
"assets/assets/images/exam/111_society_28.png": "4d32050ab569b9f5bbacadeba5fb208b",
"assets/assets/images/exam/110_nature_53.png": "44098083d9edf3cab09929c5db05d62d",
"assets/assets/images/exam/110_nature_19.png": "7d1fd068093171b64df5a42f1d66e0ae",
"assets/assets/images/exam/111_society_41.png": "26e2cfd304f259f6f0fa927b7f95c549",
"assets/assets/images/exam/111_nature_38.png": "b632488dbdb3480bd80aacceeaab729a",
"assets/assets/images/exam/111_society_33.png": "646bd7396bb97a6ee2572fd370a57f0e",
"assets/assets/images/exam/110_nature_42.png": "393628a797e2fb8541b165b23ed663ec",
"assets/assets/images/exam/111_nature_47.png": "31119decfcd79c11044024e28609b0e3",
"assets/assets/images/exam/110_nature_50-51.png": "270bf2c771da3c950c04082eb3f97426",
"assets/assets/images/exam/110_nature_38.png": "edcb013854ae934fd628e0fb2d088bc2",
"assets/assets/images/exam/111_chinese_1.png": "b1a64b2f3faf9facdc6c2716d17d5a90",
"assets/assets/images/exam/111_nature_40.png": "8c6d545a1db635f1668333231c2c07be",
"assets/assets/images/exam/111_society_42.png": "f9e85113c6de456e026c3e4e83cdf3ad",
"assets/assets/images/exam/111_english_22.png": "37f206c1268d413763eb8ff3ad6c709b",
"assets/assets/images/exam/111_nature_49-50.png": "1a187803bb1c902fbe092487cb4297d4",
"assets/assets/images/exam/111_society_1.png": "bb28dd13de755209f2e30140633037a1",
"assets/assets/images/exam/111_english_1.png": "3965fa787a4e22a3da058de2792db29b",
"assets/assets/images/materials/dice.png": "da4f2f5638d9e5bf4d7d7e349512be39",
"assets/assets/images/materials/awards.png": "72f6e01813c3c4937bbb249961f463c4",
"assets/assets/images/materials/homework.png": "f6c8cdcf894555889bef4c81a94a386a",
"assets/assets/images/logo.png": "ff3de03be0b72d00ed03476236e9ef4e",
"assets/assets/config.json": "ac131a2d11cd992448e98a2272b5ceab",
"assets/assets/cap_exams.json": "8b193f29ed84be4fd7866cd44ec726f9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "b7787fddb97a37005da336268acfdce9",
"assets/AssetManifest.json": "e1ba636aacae782f9f944b8a2ddf21cd",
"assets/FontManifest.json": "9d3694b6aa5d83b9d872004a25e3be30",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/fonts/MaterialIcons-Regular.otf": "4a61a7253c4ead034bfd4c76fa7e3e91",
"index.html": "9343d44f57adabe93219196ffd025c35",
"/": "9343d44f57adabe93219196ffd025c35",
"main.dart.js": "5f254dd89e754be181534b90c0002489",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"version.json": "f49823b94b02d46d9b0a059aad25fcf1",
"manifest.json": "3c47eee05d8d86a8af517e2a4ab17b68",
"icons/Icon-512.png": "ff3de03be0b72d00ed03476236e9ef4e",
"icons/Icon-maskable-512.png": "ff3de03be0b72d00ed03476236e9ef4e",
"icons/Icon-maskable-192.png": "ff3de03be0b72d00ed03476236e9ef4e",
"icons/Icon-192.png": "ff3de03be0b72d00ed03476236e9ef4e",
"favicon.png": "ff3de03be0b72d00ed03476236e9ef4e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
