if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const o=e=>i(e,n),d={module:{uri:n},exports:r,require:o};s[n]=Promise.all(a.map((e=>d[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"kiwi_cook"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios-B_vaVXfi.js",revision:"90612cc946d68337d323a3c03011a6dc"},{url:"assets/dom-jY1HDJzH.js",revision:"0391a50174102881a1bdf007897a2c8c"},{url:"assets/ErrorNotFound-D1mUNtoC.js",revision:"7da2dae696f96bfd06020b7a8034cbb0"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/i18n-dFOjn0y_.js",revision:"fd0e7d1819b06f52843b47320341812b"},{url:"assets/index-Bdlm1ZtJ.js",revision:"12e1a678b63d2e35643aa3cd26469208"},{url:"assets/index-DGuxCQtp.css",revision:"03447da36e8025981fbd5248d8d7cea8"},{url:"assets/IndexPage-Dvfz4_Cy.css",revision:"8740653b3d4c77fb8a49340276763abd"},{url:"assets/IndexPage-wK-3uOfu.js",revision:"4f61003bdf787aba46267ee08467f65a"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ-C5u4Lasg.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc--j0ba7u44.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc--CDXAfhRl.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc--7z0HfM8a.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc--Yv75Cvt_.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM-CEBEUyyq.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout-DD3Ns17u.css",revision:"4d5aa5d7f48c0d9be290697a2d486ba5"},{url:"assets/MainLayout-DPdAQDkH.js",revision:"007b193fc3e65693a78bc721b39ac08b"},{url:"assets/materialdesignicons-webfont-Dp5v-WZN.woff2",revision:"1d7bcee1b302339c3b8db10214dc9ec6"},{url:"assets/materialdesignicons-webfont-PXm3-2wK.woff",revision:"026b7ac9c43c7e04250f00acd510fa49"},{url:"assets/QAvatar-DyomPkvA.js",revision:"a696baee4334a9bf3032ca04b2d5cac0"},{url:"assets/QBtn-Zp0MCxB_.js",revision:"a72f72d3131035ed350e8b49e9a6a172"},{url:"assets/QScrollObserver-BZDrValU.js",revision:"78fa1d055472a60ce018dce2d2a45d2b"},{url:"assets/QSpinner-CiPhgIn4.js",revision:"3cb5bee478338d158ca1aa6efcb5cb5c"},{url:"assets/recipe-store-CtuVgrWu.js",revision:"951fd611608ad3cc59f15ddd34ee1208"},{url:"assets/RecipePage-CL081MpT.js",revision:"ab3a8989d46f3dd9d3d9800f5f396743"},{url:"assets/RecipePage-w8yiCI3Z.css",revision:"9098bd8fd0dfa48b141aa71836fcb48b"},{url:"assets/scroll-GPeo8u1N.js",revision:"1f5a5107bf9e10b8ba89416c2182b4e2"},{url:"assets/use-router-link-PER3gbyu.js",revision:"bfe963f487ca8728b3fd8bdfbe8a396a"},{url:"assets/vue-i18n.runtime-ZHCIjERu.js",revision:"4e6d4e19168192255879d54f5951b71e"},{url:"favicon.ico",revision:"6149cdc4e1d2c589b5ef5c61821327c5"},{url:"icons/apple-icon-120x120.png",revision:"a9ffb68021138d5e45ded64b136458ec"},{url:"icons/apple-icon-152x152.png",revision:"67a8bb2c57af5db445f8599c82452238"},{url:"icons/apple-icon-167x167.png",revision:"162ae2d44907634b3667d02de0fcdc3a"},{url:"icons/apple-icon-180x180.png",revision:"af877cb62f3c70813efb189f35a17282"},{url:"icons/apple-launch-1080x2340.png",revision:"2eaa6b77edb13280ee2034454c729e97"},{url:"icons/apple-launch-1125x2436.png",revision:"0e026e10cfc26ac5b2c28434a1aa14d7"},{url:"icons/apple-launch-1170x2532.png",revision:"abd816067046a7bbdbbc2a898f448585"},{url:"icons/apple-launch-1179x2556.png",revision:"12d01035f394549626613bd46efd65b1"},{url:"icons/apple-launch-1242x2208.png",revision:"877371fb98c3fe5681f133b2829bd630"},{url:"icons/apple-launch-1242x2688.png",revision:"bf9eb889da0ade7f3b0d8ed4de82bcb9"},{url:"icons/apple-launch-1284x2778.png",revision:"10dd6701e06924bbcfcc6357c3bed405"},{url:"icons/apple-launch-1290x2796.png",revision:"7cec285d63398c06b517b5f1d09cb47c"},{url:"icons/apple-launch-1536x2048.png",revision:"2b56ee999691b57b0ae43da48798bfec"},{url:"icons/apple-launch-1620x2160.png",revision:"a866580825148ae857b5d0c56e695835"},{url:"icons/apple-launch-1668x2224.png",revision:"ce3606ba134b07234c640fe427fc467a"},{url:"icons/apple-launch-1668x2388.png",revision:"7f6ae3e276e0d2b3dbab13f632ba1030"},{url:"icons/apple-launch-2048x2732.png",revision:"0db03b93fa3262faa39d0987b3434227"},{url:"icons/apple-launch-750x1334.png",revision:"73e9e3871ef4a38f33e61fc508f2fd54"},{url:"icons/apple-launch-828x1792.png",revision:"ac980f2cec3fda8e314247625198716c"},{url:"icons/favicon-128x128.png",revision:"e6ca9a7b6c6c9c317b884d3238740b80"},{url:"icons/favicon-16x16.png",revision:"c4db4f419365edd51e7aef2989940d07"},{url:"icons/favicon-32x32.png",revision:"72b3fb0769f238e5c21fbd3e7c6c865a"},{url:"icons/favicon-96x96.png",revision:"a9e07de171a4e2a34d8d6b652d07d7e1"},{url:"icons/icon-128x128.png",revision:"e6ca9a7b6c6c9c317b884d3238740b80"},{url:"icons/icon-192x192.png",revision:"1c3f6cb558578a3d1da9a5b4542ec876"},{url:"icons/icon-256x256.png",revision:"ae3155242d18d984f841f61f51369df0"},{url:"icons/icon-384x384.png",revision:"8cddaee9a85a9d619707708172d81540"},{url:"icons/icon-500x500.jpeg",revision:"42f2e59934588a2269a969b205fced58"},{url:"icons/icon-500x500.png",revision:"dc9df93646d19b7cf9840458a8daaea6"},{url:"icons/icon-512x512.png",revision:"27c715fce7af0b2d8111731f00cffbec"},{url:"icons/ms-icon-144x144.png",revision:"64953705919d105613281e38d0e19926"},{url:"icons/safari-pinned-tab.svg",revision:"aa747cd50d6c16cdff39a112d0a98d3b"},{url:"index.html",revision:"83ebe1204951e335e94834208cc05803"},{url:"manifest.json",revision:"6207e8353b000ebc9992a0d29e382314"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));