if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const o=e=>r(e,c),f={module:{uri:c},exports:a,require:o};i[c]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(n(...e),a)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DWQM1-2n.css",revision:null},{url:"assets/index-XucfP4aU.js",revision:null},{url:"index.html",revision:"a5396b149abac0f0336b27326c801a80"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"e166684893f6a651b82909a0bb4cc563"},{url:"pwa/pwa-192x192.png",revision:"2a7daca54608a115915a462f2755a7c3"},{url:"pwa/pwa-512x512.png",revision:"6e04307603ede2b6c7622c5f6ddaf8fb"},{url:"img/O.svg",revision:"4c8e2558a6fce5e63f875c7d2feae09a"},{url:"img/O@200.webp",revision:"7e98795ae46effef307e1a1dd326a50d"},{url:"img/O@400.webp",revision:"7075037623bf9a1cb00f6879f271d968"},{url:"img/X.svg",revision:"0bacdeee558a030d7c7cf56f1cb9333c"},{url:"img/X@200.webp",revision:"979a62cab8f52fd35f39531fe68bb087"},{url:"img/X@400.webp",revision:"0de461cc79c6e0a57cb9c75a83101784"},{url:"manifest.webmanifest",revision:"6287e5994396af3cb578ca92bc85acb8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
