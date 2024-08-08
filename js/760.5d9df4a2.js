"use strict";(self["webpackChunktaste_buddy"]=self["webpackChunktaste_buddy"]||[]).push([[760],{8379:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>c});var r=n(9185),s=n(3183),a=n(2635);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=(t,e,n,c,i)=>{const o=t.ownerDocument.defaultView;let u=(0,s.i)(t);const d=t=>{const e=50,{startX:n}=t;return u?n>=o.innerWidth-e:n<=e},l=t=>u?-t.deltaX:t.deltaX,h=t=>u?-t.velocityX:t.velocityX,k=n=>(u=(0,s.i)(t),d(n)&&e()),b=t=>{const e=l(t),n=e/o.innerWidth;c(n)},w=t=>{const e=l(t),n=o.innerWidth,s=e/n,a=h(t),c=n/2,u=a>=0&&(a>.2||e>c),d=u?1-s:s,k=d*n;let b=0;if(k>5){const t=k/Math.abs(a);b=Math.min(t,540)}i(u,s<=0?.01:(0,r.k)(0,s,.9999),b)};return(0,a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:k,onStart:n,onMove:b,onEnd:w})}}}]);
//# sourceMappingURL=760.5d9df4a2.js.map