(()=>{"use strict";var e={8987:(e,r,t)=>{t(8964),t(702);var o=t(1957),n=t(8266),a=t(499),i=t(9835);function l(e,r,t,o,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var c=t(1639);const u=(0,c.Z)(s,[["render",l]]),d=u;var p=t(3340),f=t(8910);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(64),t.e(445)]).then(t.bind(t,2445)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(298)]).then(t.bind(t,3298))},{path:"/getting-started",component:()=>Promise.all([t.e(736),t.e(64),t.e(102)]).then(t.bind(t,1102))},{path:"/playground",component:()=>Promise.all([t.e(736),t.e(64),t.e(237)]).then(t.bind(t,6237))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(431)]).then(t.bind(t,9431))}],m=h,b=(0,p.BC)((function(){const e=f.r5,r=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return r}));async function v(e,r){const t=e(d);t.use(n.Z,r);const o=(0,a.Xl)("function"===typeof b?await b({}):b);return{app:t,router:o}}var y=t(6950);const g={config:{},plugins:{Loading:y.Z}},w="";async function _({app:e,router:r},t){let o=!1;const n=e=>{try{return r.resolve(e).href}catch(t){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const r=n(e);null!==r&&(window.location.href=r,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<t.length;s++)try{await t[s]({app:e,router:r,ssrContext:null,redirect:a,urlPath:i,publicPath:w})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(r),e.mount("#q-app"))}v(o.ri,g).then((e=>Promise.all([Promise.resolve().then(t.bind(t,4290))]).then((r=>{const t=r.map((e=>e.default)).filter((e=>"function"===typeof e));_(e,t)}))))},4290:(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});var o=t(3340),n=t(2502);const a=(0,o.xr)((({app:e})=>{e.use((0,n.WB)())}))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,(()=>{var e="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",r="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},a=t=>t.map((t=>{if(null!==t&&"object"===typeof t){if(t[e])return t;if(t.then){var a=[];a.d=0,t.then((e=>{i[r]=e,n(a)}),(e=>{i[o]=e,n(a)}));var i={};return i[e]=e=>e(a),i}}var l={};return l[e]=e=>{},l[r]=t,l}));t.a=(t,i,l)=>{var s;l&&((s=[]).d=1),s&&(s.moduleId=t.id);var c,u,d,p=new Set,f=t.exports,h=new Promise(((e,r)=>{d=r,u=e}));h[r]=f,h[e]=e=>(s&&e(s),p.forEach(e),h["catch"]((e=>{}))),h.moduleId=t.id,t.exports=h,i((t=>{var n;c=a(t);var i=()=>c.map((e=>{if(e[o])throw e[o];return e[r]})),l=new Promise((r=>{n=()=>r(i),n.r=0;var t=e=>e!==s&&!p.has(e)&&(p.add(e),e&&!e.d&&(n.r++,e.push(n)));c.map((r=>r[e](t)))}));return n.r?l:i()}),(e=>(e?d(h[o]=e):u(f),n(s)))),s&&(s.d=0)}})(),(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=n();void 0!==c&&(r=c)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"b7ca8b0a",102:"2927b08c",124:"62acf8b4",237:"7d6c128d",298:"c90c716d",431:"de5f4f11",445:"5c0c3b60"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{102:"39b30a4b",143:"31d6cfe0",237:"c2e5c762",298:"33920073",736:"f1766d70"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="fhe-module-quasar-demo:";t.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==r+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",r+a),l.src=o),e[o]=[n];var p=(r,t)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.v=(e,r,o,n)=>{var a=fetch(t.p+""+o+".module.wasm");return"function"===typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(a,n).then((r=>Object.assign(e,r.instance.exports))):a.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((r=>Object.assign(e,r.instance.exports)))}})(),(()=>{t.p=""})(),(()=>{var e=(e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),o(s)}};return n.onerror=n.onload=a,n.href=r,document.head.appendChild(n),n},r=(e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=t[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===r))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===r)return n}},o=o=>new Promise(((n,a)=>{var i=t.miniCssF(o),l=t.p+i;if(r(i,l))return n();e(o,l,n,a)})),n={143:0};t.f.miniCss=(e,r)=>{var t={102:1,237:1,298:1};n[e]?r.push(n[e]):0!==n[e]&&t[e]&&r.push(n[e]=o(e).then((()=>{n[e]=0}),(r=>{throw delete n[e],r})))}})(),(()=>{t.b=document.baseURI||self.location.href;var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var i=t.p+t.u(r),l=new Error,s=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};t.l(i,s,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,l,s]=o,c=0;if(i.some((r=>0!==e[r]))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(s)var u=s(t)}for(r&&r(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},o=globalThis["webpackChunkfhe_module_quasar_demo"]=globalThis["webpackChunkfhe_module_quasar_demo"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(8987)));o=t.O(o)})();