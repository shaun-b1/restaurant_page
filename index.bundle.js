(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\na {\n\tall: unset;\n}",""]);const c=i},426:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),d=new URL(t(827),t.b),l=new URL(t(984),t.b),p=new URL(t(255),t.b),u=new URL(t(220),t.b),m=i()(a()),g=s()(d),x=s()(l),f=s()(p),b=s()(u);m.push([n.id,'/* Body and Root Styles */\n\n:root {\n  --blue-color: #a5a5ff;\n  --green-color: #5bf870;\n}\n\n@font-face {\n  font-family: "aurebesh";\n  src: url('+g+");\n}\n\nbody {\n  background-image: url("+x+');\n  background-position: center center;\n  background-size: cover 100vh;\n  background-attachment: fixed;\n  color: var(--blue-color);\n  font-family: "aurebesh";\n}\n\n.scanline {\n  animation: scanline 10s linear infinite;\n  background: linear-gradient(\n    0deg,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(255, 255, 255, 0.2) 10%,\n    rgba(0, 0, 0, 0.1) 100%\n  );\n  bottom: 100%;\n  height: 100px;\n  opacity: 0.1;\n  position: fixed;\n  width: 100%;\n  z-index: 5;\n}\n\n/* Header Styles */\nheader {\n  align-items: center;\n  animation: textShadow 1.6s infinite;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0));\n  display: flex;\n  flex-flow: row wrap;\n  height: 22vh;\n  justify-content: space-around;\n  margin-bottom: 1rem;\n  text-align: center;\n  width: 100vw;\n}\n\nheader > h1 {\n  font-size: 2.7rem;\n}\n\nheader > nav {\n  display: grid;\n  gap: 0;\n  grid-template-columns: 8rem 8rem 8rem;\n  grid-template-rows: 4rem;\n}\n\nheader > nav > :first-child {\n  border-color: black;\n  border-style: solid;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n}\n\nheader > nav > :last-child {\n  border-left: 0;\n}\n\nheader > nav > button {\n  border: 0.5rem solid black;\n  box-shadow: inset 0 0 15px 0 #000;\n  cursor: pointer;\n  font-family: "aurebesh";\n  margin: 0;\n  outline: none;\n}\n\nheader > nav > button.active {\n  background-color: var(--green-color);\n  position: relative;\n}\n\n/* Body Content Styles */\n#content {\n  animation: textShadow 1.6s infinite;\n  display: grid;\n  color: aliceblue;\n  /* margin-top: 3rem; */\n  max-width: 65rem;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 4rem;\n  padding: 0 1rem;\n  z-index: 1;\n}\n\n/* Home Content Styles */\n#home-content {\n  margin-top: 3rem;\n  justify-self: center;\n  align-self: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  text-align: center;\n  width: 50vw;\n  background-image: url('+f+");\n  background-position: top left;\n  background-size: cover;\n  height: 50vh;\n  outline: 4px solid black;\n}\n\n#home-content > * {\n  padding: 1.5rem 4rem;\n}\n\n#home-content h2 {\n  font-size: 1.3rem;\n}\n\n#home-content p {\n  font-size: 0.8rem;\n}\n\n/* Menu Content Styles */\n#menu-content {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));\n  grid-gap: 3rem;\n}\n\n.menu-item {\n  align-items: flex-start;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  background-color: rgba(0, 0, 0, .25);\n  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .4); \n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 1rem;\n}\n\n.menu-item > * {\n  padding: 0.5rem;\n}\n\n.menu-image {\n  align-self: center;\n  width: 90%;\n}\n\n.menu-name {\n  font-size: 1.8rem;\n}\n\n.menu-text {\n  font-size: 0.8rem;\n}\n\n/* Contact Content Styles */\n#contact-content {\n  margin-top: 3rem;\n  justify-self: center;\n  align-self: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  text-align: center;\n  width: 50vw;\n  background-image: url("+b+');\n  background-position: center center;\n  background-size: cover;\n  height: 50vh;\n  outline: 4px solid black;\n}\n\n#contact-content > * {\n  padding: 1.5rem 4rem;\n}\n\n.contact-title {\n  font-size: 1.8rem;\n}\n\n.content-text {\n  font-size: 0.8rem;\n}\n\n.contact-email {\n  word-break: break-all;\n  /* Non standard for webkit */\n  word-break: break-word;\n}\n\n/* Footer Styles */\nfooter {\n  width: 100vw;\n  padding: 9.5px 0;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  background: black;\n  opacity: 0.8;\n  z-index: 2;\n  animation: none;\n  font-family: sans-serif;\n}\n\nfooter a {\n  text-decoration: none;\n  color: white;\n  animation: none;\n}\n\nfooter p {\n  color: white;\n  animation: none;\n}\n\n/* Text Flicker */\n@keyframes textShadow {\n  0% {\n    text-shadow: 0.4389924193300864px 0 1px rgba(0, 30, 255, 0.5),\n      -0.4389924193300864px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  5% {\n    text-shadow: 2.7928974010788217px 0 1px rgba(0, 30, 255, 0.5),\n      -2.7928974010788217px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  10% {\n    text-shadow: 0.02956275843481219px 0 1px rgba(0, 30, 255, 0.5),\n      -0.02956275843481219px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  15% {\n    text-shadow: 0.40218538552878136px 0 1px rgba(0, 30, 255, 0.5),\n      -0.40218538552878136px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  20% {\n    text-shadow: 3.4794037899852017px 0 1px rgba(0, 30, 255, 0.5),\n      -3.4794037899852017px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  25% {\n    text-shadow: 1.6125630401149584px 0 1px rgba(0, 30, 255, 0.5),\n      -1.6125630401149584px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  30% {\n    text-shadow: 0.7015590085143956px 0 1px rgba(0, 30, 255, 0.5),\n      -0.7015590085143956px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  35% {\n    text-shadow: 3.896914047650351px 0 1px rgba(0, 30, 255, 0.5),\n      -3.896914047650351px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  40% {\n    text-shadow: 3.870905614848819px 0 1px rgba(0, 30, 255, 0.5),\n      -3.870905614848819px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  45% {\n    text-shadow: 2.231056963361899px 0 1px rgba(0, 30, 255, 0.5),\n      -2.231056963361899px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  50% {\n    text-shadow: 0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),\n      -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  55% {\n    text-shadow: 2.3758461067427543px 0 1px rgba(0, 30, 255, 0.5),\n      -2.3758461067427543px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  60% {\n    text-shadow: 2.202193051050636px 0 1px rgba(0, 30, 255, 0.5),\n      -2.202193051050636px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  65% {\n    text-shadow: 2.8638780614874975px 0 1px rgba(0, 30, 255, 0.5),\n      -2.8638780614874975px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  70% {\n    text-shadow: 0.48874025155497314px 0 1px rgba(0, 30, 255, 0.5),\n      -0.48874025155497314px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  75% {\n    text-shadow: 1.8948491305757957px 0 1px rgba(0, 30, 255, 0.5),\n      -1.8948491305757957px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  80% {\n    text-shadow: 0.0833037308038857px 0 1px rgba(0, 30, 255, 0.5),\n      -0.0833037308038857px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  85% {\n    text-shadow: 0.09769827255241735px 0 1px rgba(0, 30, 255, 0.5),\n      -0.09769827255241735px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  90% {\n    text-shadow: 3.443339761481782px 0 1px rgba(0, 30, 255, 0.5),\n      -3.443339761481782px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  95% {\n    text-shadow: 2.1841838852799786px 0 1px rgba(0, 30, 255, 0.5),\n      -2.1841838852799786px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n  100% {\n    text-shadow: 2.6208764473832513px 0 1px rgba(0, 30, 255, 0.5),\n      -2.6208764473832513px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;\n  }\n}\n\n/* Scanline Animation */\n@keyframes scanline {\n  0% {\n    bottom: 100%;\n  }\n  80% {\n    bottom: 100%;\n  }\n  100% {\n    bottom: 0%;\n  }\n}\n\n/* CRT Effect */\nbody:before {\n  content: " ";\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(\n    to bottom,\n    rgba(18, 16, 16, 0) 20%,\n    rgba(0, 0, 0, 0.25) 20%\n  );\n  background-size: 100% 3px;\n  z-index: -1;\n  pointer-events: none;\n}\n',""]);const h=m},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},637:(n,e,t)=>{function r(){const n=document.createElement("div");n.id="contact-content";const e=document.createElement("h2");e.innerText="Contact Us",e.classList.add("contact-title");const t=document.createElement("p");t.innerText="Reach out to us via Comlink, or at the email address below",t.classList.add("contact-text");const r=document.createElement("a"),a=document.createTextNode("contact@chalmunscantina.com");return r.appendChild(a),r.href="mailto:contact@chalmunscantina.com",r.classList.add("contact-email"),n.append(e,t,r),n}t.d(e,{Z:()=>r})},666:(n,e,t)=>{function r(){const n=document.createElement("div");n.id="home-content";const e=document.createElement("h2");e.innerText='"You\'ll never find a more wretched hive of scum and villainy!" - Time Out Outer Rim';const t=document.createElement("p");return t.innerText="No Droids!",n.append(e,t),n}t.d(e,{Z:()=>r})},652:(n,e,t)=>{t.d(e,{Z:()=>i});const r=[t.p+"images/f11209c0d4e018e78ba3.gif",t.p+"images/4d19a720f508d399fbfc.gif",t.p+"images/807a4a97e37a2ae1ce7f.gif",t.p+"images/70d6ea4080ece1835239.gif",t.p+"images/96258cea2f135e0aa374.gif",t.p+"images/e5255f8d3feb4a2dfaa0.gif"],a=["Chuba","Death Sticks","Frog","Green Milk","Jawa Juice","Pear"],o=["Just wait until you find out how much they cost","You want to go home and rethink your life","I don't want Jabba touching me either","Not to be confused with Blue Milk, equally as disgusting","This is fermented Bantha meat. Look it up","How cringe is this?"];function i(){const n=document.createElement("div");n.id="menu-content";for(let e=0;e<r.length;e++){const t=document.createElement("div");t.classList.add("menu-item");const i=new Image;i.classList.add("menu-image"),i.src=r[e];const c=document.createElement("div");c.classList.add("menu-name"),c.textContent=a[e];const s=document.createElement("div");s.classList.add("menu-text"),s.textContent=o[e],t.append(i,c,s),n.appendChild(t)}return n}},827:(n,e,t)=>{n.exports=t.p+"b37861957d0401a8b576.ttf"},220:(n,e,t)=>{n.exports=t.p+"images/3f07b7cbd052b890762a.png"},984:(n,e,t)=>{n.exports=t.p+"images/aee718845217f5b0b8c5.jpeg"},255:(n,e,t)=>{n.exports=t.p+"images/e4771420b30837c45eb2.jpeg"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(917),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var x=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(x.Z,f),x.Z&&x.Z.locals&&x.Z.locals;var b=t(666),h=t(652),v=t(637);const w=(()=>{const n={homePage:(0,b.Z)(),menu:(0,h.Z)(),contact:(0,v.Z)()},e=document.getElementById("content");return{createPage:t=>e.appendChild(n[t]),deletePage:()=>{for(;e.firstChild;)e.removeChild(e.firstChild)}}})(),y=document.querySelectorAll("button");for(const n of y)n.addEventListener("click",(e=>{w.deletePage();for(const n of y)n.classList.remove("active");w.createPage(e.target.id),n.classList.add("active")}));document.getElementById("content").appendChild((0,b.Z)())})()})();