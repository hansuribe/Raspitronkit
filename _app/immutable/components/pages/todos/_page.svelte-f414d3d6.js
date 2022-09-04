import{Q as K,S as ue,i as de,s as ce,k as g,a as P,q as fe,P as _e,l as b,h as E,c as U,m as A,r as he,n,F as c,b as x,R as W,T as pe,d as me,f as ve,t as ge,E as ne,U as be,V as ye,W as Ee,X as Te,Y as le,O as ke,g as we,Z as Me,A as Oe}from"../../../chunks/index-5b0149c9.js";import{c as $}from"../../../chunks/singletons-81768ec6.js";import"../../../chunks/index-b73ee6b7.js";function ie(u){const e=u-1;return e*e*e+1}$.disable_scroll_handling;$.goto;$.invalidate;const Pe=$.invalidateAll;$.prefetch;$.prefetch_routes;$.before_navigate;$.after_navigate;function X(u,{pending:e,error:t,result:a}={}){let f;async function v(h){const s=f={};h.preventDefault();const i=new FormData(u);e&&e({data:i,form:u});try{const _=await fetch(u.action,{method:u.method,headers:{accept:"application/json"},body:i});if(s!==f)return;_.ok?(a&&a({data:i,form:u,response:_}),Pe()):t?t({data:i,form:u,error:null,response:_}):console.error(await _.text())}catch(_){if(t&&_ instanceof Error)t({data:i,form:u,error:_,response:null});else throw _}}return u.addEventListener("submit",v),{destroy(){u.removeEventListener("submit",v)}}}function se(u,{delay:e=0,duration:t=400,easing:a=ie,start:f=0,opacity:v=0}={}){const h=getComputedStyle(u),s=+h.opacity,i=h.transform==="none"?"":h.transform,_=1-f,o=s*(1-v);return{delay:e,duration:t,easing:a,css:(w,T)=>`
			transform: ${i} scale(${1-_*T});
			opacity: ${s-o*T}
		`}}function Ue(u,{from:e,to:t},a={}){const f=getComputedStyle(u),v=f.transform==="none"?"":f.transform,[h,s]=f.transformOrigin.split(" ").map(parseFloat),i=e.left+e.width*h/t.width-(t.left+h),_=e.top+e.height*s/t.height-(t.top+s),{delay:o=0,duration:w=M=>Math.sqrt(M)*120,easing:T=ie}=a;return{delay:o,duration:K(w)?w(Math.sqrt(i*i+_*_)):w,easing:T,css:(M,p)=>{const y=p*i,I=p*_,r=M+p*e.width/t.width,l=M+p*e.height/t.height;return`transform: ${v} translate(${y}px, ${I}px) scale(${r}, ${l});`}}}function oe(u,e,t){const a=u.slice();return a[3]=e[t],a[4]=e,a[5]=t,a}function re(u,e){let t,a,f,v,h,s,i,_,o,w,T,M,p,y,I,r,l,d,S,F,q,N,C,L,Y,D,V,j,Z,R,z,G=Oe,O,J,ee;function te(...k){return e[1](e[3],e[4],e[5],...k)}function ae(){return e[2](e[3],e[4],e[5])}return{key:u,first:null,c(){t=g("div"),a=g("form"),f=g("input"),h=P(),s=g("input"),_=P(),o=g("button"),M=P(),p=g("form"),y=g("input"),r=P(),l=g("input"),S=P(),F=g("button"),q=P(),N=g("form"),C=g("input"),Y=P(),D=g("button"),Z=P(),this.h()},l(k){t=b(k,"DIV",{class:!0});var m=A(t);a=b(m,"FORM",{action:!0,method:!0});var B=A(a);f=b(B,"INPUT",{type:!0,name:!0,class:!0}),h=U(B),s=b(B,"INPUT",{type:!0,name:!0,class:!0}),_=U(B),o=b(B,"BUTTON",{class:!0,"aria-label":!0}),A(o).forEach(E),B.forEach(E),M=U(m),p=b(m,"FORM",{class:!0,action:!0,method:!0});var H=A(p);y=b(H,"INPUT",{type:!0,name:!0,class:!0}),r=U(H),l=b(H,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),S=U(H),F=b(H,"BUTTON",{class:!0,"aria-label":!0}),A(F).forEach(E),H.forEach(E),q=U(m),N=b(m,"FORM",{action:!0,method:!0});var Q=A(N);C=b(Q,"INPUT",{type:!0,name:!0,class:!0}),Y=U(Q),D=b(Q,"BUTTON",{class:!0,"aria-label":!0}),A(D).forEach(E),Q.forEach(E),Z=U(m),m.forEach(E),this.h()},h(){n(f,"type","hidden"),n(f,"name","uid"),f.value=v=e[3].uid,n(f,"class","svelte-16nsat"),n(s,"type","hidden"),n(s,"name","done"),s.value=i=e[3].done?"":"true",n(s,"class","svelte-16nsat"),n(o,"class","toggle svelte-16nsat"),n(o,"aria-label",w="Mark todo as "+(e[3].done?"not done":"done")),n(a,"action","/todos?_method=PATCH"),n(a,"method","post"),n(y,"type","hidden"),n(y,"name","uid"),y.value=I=e[3].uid,n(y,"class","svelte-16nsat"),n(l,"aria-label","Edit todo"),n(l,"type","text"),n(l,"name","text"),l.value=d=e[3].text,n(l,"class","svelte-16nsat"),n(F,"class","save svelte-16nsat"),n(F,"aria-label","Save todo"),n(p,"class","text svelte-16nsat"),n(p,"action","/todos?_method=PATCH"),n(p,"method","post"),n(C,"type","hidden"),n(C,"name","uid"),C.value=L=e[3].uid,n(C,"class","svelte-16nsat"),n(D,"class","delete svelte-16nsat"),n(D,"aria-label","Delete todo"),D.disabled=V=e[3].pending_delete,n(N,"action","/todos?_method=DELETE"),n(N,"method","post"),n(t,"class","todo svelte-16nsat"),ne(t,"done",e[3].done),this.first=t},m(k,m){x(k,t,m),c(t,a),c(a,f),c(a,h),c(a,s),c(a,_),c(a,o),c(t,M),c(t,p),c(p,y),c(p,r),c(p,l),c(p,S),c(p,F),c(t,q),c(t,N),c(N,C),c(N,Y),c(N,D),c(t,Z),O=!0,J||(ee=[W(T=X.call(null,a,{pending:te})),W(X.call(null,p)),W(j=X.call(null,N,{pending:ae}))],J=!0)},p(k,m){e=k,(!O||m&1&&v!==(v=e[3].uid))&&(f.value=v),(!O||m&1&&i!==(i=e[3].done?"":"true"))&&(s.value=i),(!O||m&1&&w!==(w="Mark todo as "+(e[3].done?"not done":"done")))&&n(o,"aria-label",w),T&&K(T.update)&&m&1&&T.update.call(null,{pending:te}),(!O||m&1&&I!==(I=e[3].uid))&&(y.value=I),(!O||m&1&&d!==(d=e[3].text)&&l.value!==d)&&(l.value=d),(!O||m&1&&L!==(L=e[3].uid))&&(C.value=L),(!O||m&1&&V!==(V=e[3].pending_delete))&&(D.disabled=V),j&&K(j.update)&&m&1&&j.update.call(null,{pending:ae}),m&1&&ne(t,"done",e[3].done)},r(){z=t.getBoundingClientRect()},f(){be(t),G(),ye(t,z)},a(){G(),G=Ee(t,z,Ue,{duration:200})},i(k){O||(k&&Te(()=>{R||(R=le(t,se,{start:.7},!0)),R.run(1)}),O=!0)},o(k){k&&(R||(R=le(t,se,{start:.7},!1)),R.run(0)),O=!1},d(k){k&&E(t),k&&R&&R.end(),J=!1,ke(ee)}}}function Ne(u){let e,t,a,f,v,h,s,i,_,o=[],w=new Map,T,M,p,y=u[0].todos;const I=r=>r[3].uid;for(let r=0;r<y.length;r+=1){let l=oe(u,y,r),d=I(l);w.set(d,o[r]=re(d,l))}return{c(){e=g("meta"),t=P(),a=g("div"),f=g("h1"),v=fe("Todos"),h=P(),s=g("form"),i=g("input"),_=P();for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){const l=_e('[data-svelte="svelte-aw2gey"]',document.head);e=b(l,"META",{name:!0,content:!0}),l.forEach(E),t=U(r),a=b(r,"DIV",{class:!0});var d=A(a);f=b(d,"H1",{});var S=A(f);v=he(S,"Todos"),S.forEach(E),h=U(d),s=b(d,"FORM",{class:!0,action:!0,method:!0});var F=A(s);i=b(F,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),F.forEach(E),_=U(d);for(let q=0;q<o.length;q+=1)o[q].l(d);d.forEach(E),this.h()},h(){document.title="Todos",n(e,"name","description"),n(e,"content","A todo list app"),n(i,"name","text"),n(i,"aria-label","Add todo"),n(i,"placeholder","+ tap to add a todo"),n(i,"class","svelte-16nsat"),n(s,"class","new svelte-16nsat"),n(s,"action","/todos"),n(s,"method","post"),n(a,"class","todos svelte-16nsat")},m(r,l){c(document.head,e),x(r,t,l),x(r,a,l),c(a,f),c(f,v),c(a,h),c(a,s),c(s,i),c(a,_);for(let d=0;d<o.length;d+=1)o[d].m(a,null);T=!0,M||(p=W(X.call(null,s,{result:Ae})),M=!0)},p(r,[l]){if(l&1){y=r[0].todos,we();for(let d=0;d<o.length;d+=1)o[d].r();o=pe(o,l,I,1,r,y,w,a,Me,re,null,oe);for(let d=0;d<o.length;d+=1)o[d].a();me()}},i(r){if(!T){for(let l=0;l<y.length;l+=1)ve(o[l]);T=!0}},o(r){for(let l=0;l<o.length;l+=1)ge(o[l]);T=!1},d(r){E(e),r&&E(t),r&&E(a);for(let l=0;l<o.length;l+=1)o[l].d();M=!1,p()}}}const Ae=async({form:u})=>{u.reset()};function Ie(u,e,t){let{data:a}=e;const f=(h,s,i,{data:_})=>{s[i].done=!!_.get("done")},v=(h,s,i)=>t(0,s[i].pending_delete=!0,a);return u.$$set=h=>{"data"in h&&t(0,a=h.data)},[a,f,v]}class Re extends ue{constructor(e){super(),de(this,e,Ie,Ne,ce,{data:0})}}export{Re as default};