import{w as i}from"./index-64a29325.js";let u="",d="";function g(n){u=n.base,d=n.assets||u}function m(n){let e=n.baseURI;if(!e){const t=n.getElementsByTagName("base");e=t.length?t[0].href:n.URL}return e}function _(){return{x:pageXOffset,y:pageYOffset}}function k(n){let e;const t={noscroll:null,prefetch:null,reload:null};for(const s of n.composedPath())s instanceof Element&&(!e&&s.nodeName.toUpperCase()==="A"&&(e=s),t.noscroll===null&&(t.noscroll=s.getAttribute("data-sveltekit-noscroll")),t.prefetch===null&&(t.prefetch=s.getAttribute("data-sveltekit-prefetch")),t.reload===null&&(t.reload=s.getAttribute("data-sveltekit-reload")));const o=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:o,options:t}}function f(n){const e=i(n);let t=!0;function o(){t=!0,e.update(a=>a)}function s(a){t=!1,e.set(a)}function r(a){let l;return e.subscribe(c=>{(l===void 0||t&&c!==l)&&a(l=c)})}return{notify:o,set:s,subscribe:r}}function b(){const{set:n,subscribe:e}=i(!1);let t;async function o(){clearTimeout(t);const s=await fetch(`${d}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const{version:r}=await s.json(),a=r!=="1662179249177";return a&&(n(!0),clearTimeout(t)),a}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:e,check:o}}let p;function v(n){p=n.client}const w={url:f({}),page:f({}),navigating:i(null),updated:b()};export{_ as a,g as b,p as c,k as f,m as g,v as i,w as s};
