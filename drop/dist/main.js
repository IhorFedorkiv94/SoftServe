!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=(e,t)=>{const n=document.createElement("option");n.innerText=t,e.appendChild(n),e.disabled=!1},o=(e,t)=>{e.options.length=1,t.options.length=1};let i,c=null,u=[];fetch("./src/data.json").then(e=>e.json()).then(e=>{l(e),a(e),s(e)}).catch(e=>{console.log("Somthing went wrong"+e)});const l=e=>i=e,a=e=>c=e.filter(e=>e.cities),s=e=>e.filter(e=>u.push(e)),f=document.querySelector("#countries"),d=document.querySelector("#cities"),p=document.querySelector("#streets");let m;setTimeout(()=>{((e,t)=>{e.forEach(e=>{r(t,e.name)})})(i,f)},1e3),f.addEventListener("change",e=>{o(d,p),((e,t,n)=>{e||(t.disabled=!0,n.disabled=!0)})(m=c.find(t=>t.name===e.target.value),d,p),m.cities.forEach(e=>r(d,e.name))}),d.addEventListener("change",e=>{o(p,p),u.forEach(t=>t.cities.filter(t=>{t.name===e.target.value&&t.streets.forEach(e=>r(p,e.name))}))})}]);