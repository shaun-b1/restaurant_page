(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(81),a=t.n(r),o=t(645),p=t.n(o)()(a());p.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const i=p},426:(n,e,t)=>{t.d(e,{Z:()=>b});var r=t(81),a=t.n(r),o=t(645),p=t.n(o),i=t(667),s=t.n(i),c=new URL(t(827),t.b),l=new URL(t(984),t.b),d=p()(a()),x=s()(c),u=s()(l);d.push([n.id,":root {\n  --green-color: #5bf870;\n  --blue-color: #a5a5ff;\n}\n\n@font-face {\n  font-family: 'aurebesh';\n  src: url("+x+");\n}\n\nbody {\n    background-image: url("+u+");\n    background-position: center top;\n    background-size: 100vw 100vh;\n    font-family: 'aurebesh';\n    color: var(--blue-color);\n    animation: textShadow 1.6s infinite;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    padding: 4rem;\n    background: rgba(0, 0, 0, 0.3);\n}\n\nheader > h1 {\n    font-size: 2rem;\n}\n\nheader > nav > button{\n    margin: 0 1rem;\n    font-family: 'aurebesh';\n}\n\nfooter {\n  width: 100vw;\n  padding: 9.5px 0;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  background: black;\n  opacity: 0.8;\n}\n  \nfooter a {\n  text-decoration: none;\n  color: white;\n}\n  \nfooter p {\n  color: white;\n}\n\n@keyframes flicker {\n  0% {\n    opacity: 0.27861;\n  }\n  5% {\n    opacity: 0.34769;\n  }\n  10% {\n    opacity: 0.23604;\n  }\n  15% {\n    opacity: 0.90626;\n  }\n  20% {\n    opacity: 0.18128;\n  }\n  25% {\n    opacity: 0.83891;\n  }\n  30% {\n    opacity: 0.65583;\n  }\n  35% {\n    opacity: 0.67807;\n  }\n  40% {\n    opacity: 0.26559;\n  }\n  45% {\n    opacity: 0.84693;\n  }\n  50% {\n    opacity: 0.96019;\n  }\n  55% {\n    opacity: 0.08594;\n  }\n  60% {\n    opacity: 0.20313;\n  }\n  65% {\n    opacity: 0.71988;\n  }\n  70% {\n    opacity: 0.53455;\n  }\n  75% {\n    opacity: 0.37288;\n  }\n  80% {\n    opacity: 0.71428;\n  }\n  85% {\n    opacity: 0.70419;\n  }\n  90% {\n    opacity: 0.7003;\n  }\n  95% {\n    opacity: 0.36108;\n  }\n  100% {\n    opacity: 0.24387;\n  }\n}\n@keyframes textShadow {\n  0% {\n    text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  5% {\n    text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  10% {\n    text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  15% {\n    text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  20% {\n    text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  25% {\n    text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  30% {\n    text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  35% {\n    text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  40% {\n    text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  45% {\n    text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  50% {\n    text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  55% {\n    text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  60% {\n    text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  65% {\n    text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  70% {\n    text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  75% {\n    text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  80% {\n    text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  85% {\n    text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  90% {\n    text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  95% {\n    text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  100% {\n    text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n}\nbody::after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(18, 16, 16, 0.1);\n  opacity: 0;\n  z-index: 2;\n  pointer-events: none;\n  animation: flicker 0.15s infinite;\n}\nbody::before {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));\n  z-index: 2;\n  background-size: 100% 2px, 3px 100%;\n  pointer-events: none;\n}\n",""]);const b=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var p={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(p[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&p[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},p=[],i=0;i<n.length;i++){var s=n[i],c=r.base?s[0]+r.base:s[0],l=o[c]||0,d="".concat(c," ").concat(l);o[c]=l+1;var x=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==x)e[x].references++,e[x].updater(u);else{var b=a(u,r);r.byIndex=i,e.splice(i,0,{identifier:d,updater:b,references:1})}p.push(d)}return p}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var p=0;p<o.length;p++){var i=t(o[p]);e[i].references--}for(var s=r(n,a),c=0;c<o.length;c++){var l=t(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},827:(n,e,t)=>{n.exports=t.p+"b37861957d0401a8b576.ttf"},984:(n,e,t)=>{n.exports=t.p+"aee718845217f5b0b8c5.jpeg"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),p=t.n(o),i=t(565),s=t.n(i),c=t(216),l=t.n(c),d=t(589),x=t.n(d),u=t(917),b={};b.styleTagTransform=x(),b.setAttributes=s(),b.insert=p().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=l(),e()(u.Z,b),u.Z&&u.Z.locals&&u.Z.locals;var f=t(426),g={};g.styleTagTransform=x(),g.setAttributes=s(),g.insert=p().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals})()})();