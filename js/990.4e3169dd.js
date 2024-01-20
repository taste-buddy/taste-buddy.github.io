"use strict";(self["webpackChunktaste_buddy"]=self["webpackChunktaste_buddy"]||[]).push([[990],{8990:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>c});var r=n(6587),s=n(545),a=n(1779);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=(t,e,n,c,i)=>{const o=t.ownerDocument.defaultView;let u=(0,s.i)(t);const d=t=>{const e=50,{startX:n}=t;return u?n>=o.innerWidth-e:n<=e},l=t=>u?-t.deltaX:t.deltaX,h=t=>u?-t.velocityX:t.velocityX,b=n=>(u=(0,s.i)(t),d(n)&&e()),k=t=>{const e=l(t),n=e/o.innerWidth;c(n)},w=t=>{const e=l(t),n=o.innerWidth,s=e/n,a=h(t),c=n/2,u=a>=0&&(a>.2||e>c),d=u?1-s:s,b=d*n;let k=0;if(b>5){const t=b/Math.abs(a);k=Math.min(t,540)}i(u,s<=0?.01:(0,r.m)(0,s,.9999),k)};return(0,a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:b,onStart:n,onMove:k,onEnd:w})}}}]);
//# sourceMappingURL=990.4e3169dd.js.map