if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const d=e=>a(e,r),f={module:{uri:r},exports:n,require:d};i[r]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"22077cd9efa789aeb9a7cfeb205dfd35"},{url:"assets/EventDetails-42a494e3.js",revision:null},{url:"assets/EventDetails-8a6bd074.css",revision:null},{url:"assets/index-75ca66c8.css",revision:null},{url:"assets/index-7d54ef6e.js",revision:null},{url:"favicon.ico",revision:"b496ef6430530138efd1e2215204bb3a"},{url:"images/cafe4.png",revision:"95a89eac4230da71f882709828c8ecca"},{url:"images/csikszentmihalyi.png",revision:"9e78d33d0d5da99adf9e818a98b0c06e"},{url:"images/faculty.svg",revision:"5e6c68f9529084576b58e944492d2ee0"},{url:"images/hakacha1.svg",revision:"1fcc9de1c94f93847e9f856e3526af4b"},{url:"images/hakacha2.svg",revision:"6e92bc4ad55df653a92cef21bb22698b"},{url:"images/hakacha3.svg",revision:"ac6a30fe3e8370b99e1dff09f331d29e"},{url:"images/hakacha4.svg",revision:"1a92616ccbee7837a76c2f6295d5f8d1"},{url:"images/student.svg",revision:"b8ae6fa2d5008f3e0d5274f1c821d0fa"},{url:"images/weather-cloudy.svg",revision:"865918fc1eb65c99b6c372a08b5c7498"},{url:"images/weather-raining.svg",revision:"eaded70610afbe8b653ab4863fe8f676"},{url:"images/weather-sunny.svg",revision:"70563e7fdf79a7e708c6e0a1c49dd8e1"},{url:"index.html",revision:"3a6177298d75d7badf3538fde612ceaf"},{url:"masked-icon.svg",revision:"cd8641fe3fc4b33dddbebcda16cdae26"},{url:"pwa-192x192.png",revision:"85c32c13cc1f4527fb9e7c92b627eb19"},{url:"pwa-512x512.png",revision:"51e55a25f5271a03831f2042d83302e2"},{url:"registerSW.js",revision:"bbc9acc38daa603a24543f2ceea7868e"},{url:"favicon.ico",revision:"b496ef6430530138efd1e2215204bb3a"},{url:"apple-touch-icon.png",revision:"22077cd9efa789aeb9a7cfeb205dfd35"},{url:"masked-icon.svg",revision:"cd8641fe3fc4b33dddbebcda16cdae26"},{url:"pwa-192x192.png",revision:"85c32c13cc1f4527fb9e7c92b627eb19"},{url:"pwa-512x512.png",revision:"51e55a25f5271a03831f2042d83302e2"},{url:"manifest.webmanifest",revision:"ac58de9b32e40f8afe29559298c664ba"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
