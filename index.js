(()=>{"use strict";var e={"./node_modules/css-loader/dist/cjs.js!./src/index.css"(e,t,n){n.r(t),n.d(t,{default:()=>a});var r=n(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"),i=n.n(r),s=n(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"),o=n.n(s)()(i());o.push([e.id,`#menuScreen {
    justify-content: center; /* Align horizontal */
    align-items: center; /* Align vertical */
}

#gameScreen {
    /* transform: perspective(100px) rotate3d(1, 1, 1, 1deg); */
}

#endScreen {
    justify-content: center; /* Align horizontal */
    align-items: center; /* Align vertical */
    flex-direction: column;
    font: bold 5vw/7vw monospace;
}

#loadingScreen {
    justify-content: center; /* Align horizontal */
    align-items: center; /* Align vertical */
    display: flex;
    font: bold 5vw/7vw monospace;
    background-color: white;
}

.screen {
    border: 5px solid black;
    width: inherit;
    height: inherit;
    position: absolute;
    overflow: hidden;
}

.gameLayer {
    position: absolute;
    width: inherit;
    height: inherit;
    transform: translateX(0%) rotate(0.02deg);
}

#menuPage {
    font: bold 3vw/5vw monospace;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 50%;
}

#menuPage > div {
    background-color: aqua;
}

#levelPage {
    display: none;
    align-items: center; /* Align vertical */
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
}

#levelPage > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    margin: 2% 3%;
    flex: 1 0 26%;
    background-color: aqua;
}

#loseMessage {
    color: maroon;
}

#winScore {
    font-size: 3vw;
    color: green;
}

#scoreField {
    position: absolute;
    top: 82%;
    left: 77%;
    font: bold 30px monospace;
}

#fpsField {
    position: relative;
    top: 18%;
    left: 77%;
    font: bold 30px monospace;
}

.selectedItem {
    background-color: red!important;
    border-radius: 10px!important;
}

/* https://loading.io/spinner/ball/-ball-circle-round-bounce-jump-reflex */

@keyframes ball {
    0%, 100% {
        animation-timing-function: cubic-bezier(0.45,0,0.9,0.55)
    }
    0% {
        transform: translate(0,0)
    }
    50% {
        transform: translate(0,108px);
        animation-timing-function: cubic-bezier(0,0.45,0.55,0.9);
    }
    100% {
        transform: translate(0,0);
    }
}

.ball div {
    position: absolute;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: red;
    left: 74px;
    top: 20px;
    animation: ball 1s linear infinite;
}
.spinner-ball {
    width: 200px;
    height: 200px;
    display: inline-block;
    top: 60%;
    position: absolute;
    overflow: hidden;
    background: none;
}
.ball {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
}
`,"",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;IACI,uBAAuB,EAAE,qBAAqB;IAC9C,mBAAmB,EAAE,mBAAmB;AAC5C;;AAEA;IACI,2DAA2D;AAC/D;;AAEA;IACI,uBAAuB,EAAE,qBAAqB;IAC9C,mBAAmB,EAAE,mBAAmB;IACxC,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,uBAAuB,EAAE,qBAAqB;IAC9C,mBAAmB,EAAE,mBAAmB;IACxC,aAAa;IACb,4BAA4B;IAC5B,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,yCAAyC;AAC7C;;AAEA;IACI,4BAA4B;IAC5B,sBAAsB;IACtB,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB,EAAE,mBAAmB;IACxC,mBAAmB;IACnB,eAAe;IACf,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,+BAA+B;IAC/B,6BAA6B;AACjC;;AAEA,0EAA0E;;AAE1E;IACI;QACI;IACJ;IACA;QACI;IACJ;IACA;QACI,6BAA6B;QAC7B,wDAAwD;IAC5D;IACA;QACI,yBAAyB;IAC7B;AACJ;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,UAAU;IACV,SAAS;IACT,kCAAkC;AACtC;AACA;IACI,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,QAAQ;IACR,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,iCAAiC;IACjC,2BAA2B;IAC3B,qBAAqB,EAAE,mBAAmB;AAC9C",sourcesContent:["#menuScreen {\r\n    justify-content: center; /* Align horizontal */\r\n    align-items: center; /* Align vertical */\r\n}\r\n\r\n#gameScreen {\r\n    /* transform: perspective(100px) rotate3d(1, 1, 1, 1deg); */\r\n}\r\n\r\n#endScreen {\r\n    justify-content: center; /* Align horizontal */\r\n    align-items: center; /* Align vertical */\r\n    flex-direction: column;\r\n    font: bold 5vw/7vw monospace;\r\n}\r\n\r\n#loadingScreen {\r\n    justify-content: center; /* Align horizontal */\r\n    align-items: center; /* Align vertical */\r\n    display: flex;\r\n    font: bold 5vw/7vw monospace;\r\n    background-color: white;\r\n}\r\n\r\n.screen {\r\n    border: 5px solid black;\r\n    width: inherit;\r\n    height: inherit;\r\n    position: absolute;\r\n    overflow: hidden;\r\n}\r\n\r\n.gameLayer {\r\n    position: absolute;\r\n    width: inherit;\r\n    height: inherit;\r\n    transform: translateX(0%) rotate(0.02deg);\r\n}\r\n\r\n#menuPage {\r\n    font: bold 3vw/5vw monospace;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    min-height: 50%;\r\n}\r\n\r\n#menuPage > div {\r\n    background-color: aqua;\r\n}\r\n\r\n#levelPage {\r\n    display: none;\r\n    align-items: center; /* Align vertical */\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n#levelPage > div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30%;\r\n    margin: 2% 3%;\r\n    flex: 1 0 26%;\r\n    background-color: aqua;\r\n}\r\n\r\n#loseMessage {\r\n    color: maroon;\r\n}\r\n\r\n#winScore {\r\n    font-size: 3vw;\r\n    color: green;\r\n}\r\n\r\n#scoreField {\r\n    position: absolute;\r\n    top: 82%;\r\n    left: 77%;\r\n    font: bold 30px monospace;\r\n}\r\n\r\n#fpsField {\r\n    position: relative;\r\n    top: 18%;\r\n    left: 77%;\r\n    font: bold 30px monospace;\r\n}\r\n\r\n.selectedItem {\r\n    background-color: red!important;\r\n    border-radius: 10px!important;\r\n}\r\n\r\n/* https://loading.io/spinner/ball/-ball-circle-round-bounce-jump-reflex */\r\n\r\n@keyframes ball {\r\n    0%, 100% {\r\n        animation-timing-function: cubic-bezier(0.45,0,0.9,0.55)\r\n    }\r\n    0% {\r\n        transform: translate(0,0)\r\n    }\r\n    50% {\r\n        transform: translate(0,108px);\r\n        animation-timing-function: cubic-bezier(0,0.45,0.55,0.9);\r\n    }\r\n    100% {\r\n        transform: translate(0,0);\r\n    }\r\n}\r\n\r\n.ball div {\r\n    position: absolute;\r\n    width: 52px;\r\n    height: 52px;\r\n    border-radius: 50%;\r\n    background: red;\r\n    left: 74px;\r\n    top: 20px;\r\n    animation: ball 1s linear infinite;\r\n}\r\n.spinner-ball {\r\n    width: 200px;\r\n    height: 200px;\r\n    display: inline-block;\r\n    top: 60%;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    background: none;\r\n}\r\n.ball {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    transform: translateZ(0) scale(1);\r\n    backface-visibility: hidden;\r\n    transform-origin: 0 0; /* see note above */\r\n}\r\n"],sourceRoot:""}]);let a=o},"./node_modules/css-loader/dist/runtime/api.js"(e){e.exports=function(e){var t=[];return t.toString=function t(){return this.map(function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n}).join("")},t.i=function e(n,r,i,s,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var A=[].concat(n[d]);(!i||!a[A[0]])&&(void 0!==o&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=o),r&&(A[2]&&(A[1]="@media ".concat(A[2]," {").concat(A[1],"}")),A[2]=r),s&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=s):A[4]="".concat(s)),t.push(A))}},t}},"./node_modules/css-loader/dist/runtime/sourceMaps.js"(e){e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r);return[t].concat(["/*# ".concat(i," */")]).join("\n")}return[t].join("\n")}},"./src/index.css"(e,t,n){n.r(t),n.d(t,{default:()=>g});var r=n(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=n.n(r),s=n(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=n.n(s),a=n(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=n.n(a),c=n(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=n.n(c),A=n(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"),u=n.n(A),h=n(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"),p=n.n(h),m=n(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css"),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),i()(m.default,f);let g=m.default&&m.default.locals?m.default.locals:void 0},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"(e){var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},o=[],a=0;a<e.length;a++){var l=e[a],c=r.base?l[0]+r.base:l[0],d=s[c]||0,A="".concat(c," ").concat(d);s[c]=d+1;var u=n(A),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var p=i(h,r);r.byIndex=a,t.splice(a,0,{identifier:A,updater:p,references:1})}o.push(A)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function t(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap||r.supports!==e.supports||r.layer!==e.layer)&&n.update(e=r):n.remove()}}e.exports=function(e,i){i=i||{},e=e||[];var s=r(e,i);return function e(o){o=o||[];for(var a=0;a<s.length;a++){var l=n(s[a]);t[l].references--}for(var c=r(o,i),d=0;d<s.length;d++){var A=n(s[d]);0===t[A].references&&(t[A].updater(),t.splice(A,1))}s=c}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js"(e){var t={};e.exports=function e(n,r){var i=function e(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(i){r=null}t[n]=r}return t[n]}(n);if(!i)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js"(e){e.exports=function e(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"(e,t,n){e.exports=function e(t){var r=n.nc;r&&t.setAttribute("nonce",r)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js"(e){e.exports=function e(t){if("undefined"==typeof document)return{update:function e(){},remove:function e(){}};var n=t.insertStyleElement(t);return{update:function e(r){var i,s,o,a,l,c;i=n,s=t,a="",(o=r).supports&&(a+="@supports (".concat(o.supports,") {")),o.media&&(a+="@media ".concat(o.media," {")),(l=void 0!==o.layer)&&(a+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),a+=o.css,l&&(a+="}"),o.media&&(a+="}"),o.supports&&(a+="}"),(c=o.sourceMap)&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),s.styleTagTransform(a,i,s.options)},remove:function e(){!function e(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js"(e){e.exports=function e(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},"./src/modules/Barrier.js"(e,t,n){n.r(t),n.d(t,{default:()=>r});class r{positionAtPath=0;positionX=0;positionY=0;offsetX=0;offsetY=0;speed=0;range=0;color=null;opacity=null;collisionRadius=0;distanceToPlayer=0;#a=0;#b=0;#c=0;#d=null;#e=0;initialOffset=0;#f=0;#g=0;constructor(e,t,n){this.positionAtPath=e,this.#b=t;let r=this.#h(this.positionAtPath);this.#f=Math.sin(r),this.#g=Math.cos(r),n&&this.setOptions(n),this.#d=t.getPointAtLength(this.positionAtPath),this.#e=this.range,this.#i()}changePositionShiftBy(e){this.#e=(this.#e+e)%(2*this.range),this.#c=Math.abs(this.#e-this.range)-this.range/2,this.#i()}checkCollision(e){return e.findDistanceTo(this)<this.collisionRadius&&Math.abs(this.#c)<this.length}setOptions(e){for(let t in e)this[t]||(this[t]=e[t]);this.range&&(this.#e=this.range/2+this.initialOffset)}#h(i){let s=this.#b.getPointAtLength(i-1),o=this.#b.getPointAtLength(i+1);return Math.atan2(s.y-o.y,o.x-s.x)}#i(){this.positionX=this.#d.x+this.#f*this.#c,this.positionY=this.#d.y+this.#g*this.#c}set length(e){this.#a=e,this.offsetX=this.#f*this.length,this.offsetY=this.#g*this.length}get length(){return this.#a}}},"./src/modules/Game.js"(e,t,n){n.r(t),n.d(t,{default:()=>r});class r{player=null;path=null;fieldLayer=null;barrierLayer=null;playerLayer=null;uiLayer=null;fpsField=null;scoreField=null;screenWidth=0;screenHeight=0;scaleFactor=0;score=0;constructor(e,t,n,r,i,s){this.player=e,this.path=t,s.forEach((e,t)=>this[e]=t),this.screenWidth=i.width,this.screenHeight=i.height,this.scaleFactor=i.scale,this.path.barrierArray.forEach(e=>e.setOptions(n)),this.player.speed=r.standardSpeed}}},"./src/modules/MenuItem.js"(e,t,n){n.r(t),n.d(t,{default:()=>r});class r{name="";level="";pageLink=null;connectedElement=null;action=()=>{};constructor(e,t){this.name=e,t&&(this.pageLink=t?.pageLink,this.action=t?.action,this.connectedElement=t?.element,this.level=t?.level)}}},"./src/modules/MenuList.js"(e,t,n){n.r(t),n.d(t,{default:()=>r});class r{menuItems=[];connectedElement=null;itemsPerRow=0;#j=0;lastActiveItem=null;constructor(e,t,n){this.menuItems=e,this.itemsPerRow=n,this.connectedElement=t}addMenuItem(e){this.menuItems.push(e)}shiftPosition(e){this.#j+=e}get currentPosition(){return(this.#j+this.menuItems.length)%this.menuItems.length}set currentPosition(e){this.#j=e}get currentActiveItem(){return this.menuItems[this.currentPosition]}set currentActiveItem(e){this.currentPosition=this.menuItems.indexOf(e)}}},"./src/modules/Path.js"(e,t,n){n.r(t),n.d(t,{default:()=>r});class r{pathToDraw=null;pathLength=0;barrierArray=[];#k=null;constructor(e){this.#k=e,this.pathLength=e.getTotalLength(),this.pathToDraw=new Path2D(e.attributes.d.value)}getPointAtLength(e){return this.#k.getPointAtLength(e)}findClosestBarrier(e){return this.barrierArray.reduce((t,n)=>Math.abs(n.positionAtPath-e)<=Math.abs(t.positionAtPath-e)?n:t)}findClosestPositionOnPath(e){let t=0,n=0,r=0,i=(e,t)=>Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2);for(let s=0;s<this.pathLength;s+=10)r=i(this.getPointAtLength(s),e),(0===t||r<t)&&(t=r,n=s);let o=n-10,a=i(this.getPointAtLength(o),e),l=n+10,c=i(this.getPointAtLength(l),e),d,A;for(;Math.abs(o-l)>1e-7;)d=(o+l)/2,A=i(this.getPointAtLength(d),e),a<=c?(l=d,c=A):(o=d,a=A);return(o+l)/2}}},"./src/modules/Player.js"(e,t,n){n.r(t),n.d(t,{default:()=>r});class r{positionAtPath=0;positionX=0;positionY=0;positionShiftX=0;positionShiftY=0;speed=0;#b=null;constructor(e,t){this.#b=t,this.positionAtPath=e;let n=t.getPointAtLength(e);[this.positionX,this.positionY]=[n.x,n.y]}advanceBy(e){this.positionAtPath+=e;let t=this.#b.getPointAtLength(this.positionAtPath);[this.positionShiftX,this.positionShiftY]=[this.positionX-t.x,this.positionY-t.y],[this.positionX,this.positionY]=[t.x,t.y]}findDistanceTo(e){return Math.abs(e.positionAtPath-this.positionAtPath)}}},"./src/modules/addControls.js"(e,t,n){function r(e,t){let n=new AbortController;for(let r in e)window.addEventListener(r,n=>{let i=e[r][n.key];e.universal?.(n,t),"function"==typeof i?i(n,t):"string"==typeof i?e[r][i](n,t):void 0===i&&e[r].default&&e[r].default(n,t)},{signal:n.signal});return n}n.r(t),n.d(t,{addControls:()=>r})},"./src/modules/menuCreate.js"(e,t,n){n.r(t),n.d(t,{menuCreate:()=>o});var r=n(/*! ./MenuItem.js */ "./src/modules/MenuItem.js"),i=n(/*! ./MenuList.js */ "./src/modules/MenuList.js");function s(e){for(let t of e.menuItems){let n=document.createElement("div");n.innerHTML=t.name,e.connectedElement.appendChild(n),t.connectedElement=n}}function o(e,t){let n=new i.default([],e,1),o=new i.default([],t,3);return n.addMenuItem(new r.default("PLAY",{pageLink:o})),n.addMenuItem(new r.default("HIGHSCORE")),n.addMenuItem(new r.default("OPTIONS")),o.addMenuItem(new r.default("Level 1",{level:"level1.svg"})),o.addMenuItem(new r.default("Level 2",{level:"level2.svg"})),o.addMenuItem(new r.default("Level 3",{level:"level3.svg"})),o.addMenuItem(new r.default("Level 4",{level:"level4.svg"})),o.addMenuItem(new r.default("Level 5")),o.addMenuItem(new r.default("Level 6")),s(n),s(o),n}},"./src/modules/pathFileLoader.js"(e,t,n){n.r(t),n.d(t,{pathFileLoader:()=>s});var r=n(/*! ./Barrier.js */ "./src/modules/Barrier.js"),i=n(/*! ./Path.js */ "./src/modules/Path.js");async function s(e){let t=await fetch(new Request(e)).then(e=>e.text()).then(e=>new DOMParser().parseFromString(e,"image/svg+xml")),n=null;for(let s in t.documentElement.children)"path"===t.documentElement.children[s].nodeName&&(n=new i.default(t.documentElement.children[s]));let a=t.documentElement.children.layer1.children;return n.barrierArray=function e(t,n){let i=[];for(let s of t){let a={range:0,collisionRaduis:0,color:"",offset:0};for(let l in a)a[l]=s.attributes[l]?.value,!isNaN(a[l])&&a[l]&&(a[l]=Number(a[l]));let c=null,d=s.attributes.d.value.split(" ").map(e=>e.length>1?e.split(",").map(e=>Number(e)):e);"M"===d[0]?c=new DOMPoint(d[2][0],d[2][1]):"m"===d[0]?c=new DOMPoint(d[1][0]+d[2][0],d[1][1]+d[2][1]):console.error("You fucked up");let A={speed:o(s,"stroke")/360,length:o(s,"fill")/20,opacity:Number(s.style.opacity)};i.push(new r.default(n.findClosestPositionOnPath(c),n,{...A,...a}))}return i}(a,n),n}function o(e,t){var n;let r=new Map(e.attributes.style.value.split(";").map(e=>e.split(":"))),i=r.get(t),s=[i[1]+i[2],i[3]+i[4],i[5]+i[6]].map(e=>Number("0x"+e)),o;return o=0,(n=(n=s).map(e=>e/255))[0]===n[1]&&n[0]===n[2]?o=0:n[0]>=n[1]&&n[0]>=n[2]?o=(n[1]-n[2])/(n[0]-Math.min(n[1],n[2]))%6*60:n[1]>=n[0]&&n[1]>=n[2]?o=((n[2]-n[0])/(n[1]-Math.min(n[0],n[2]))+2)*60:n[2]>=n[0]&&n[2]>=n[1]&&(o=((n[0]-n[1])/(n[2]-Math.min(n[0],n[1]))+4)*60),Math.round(o)}},"./src/modules/setCalculate.js"(e,t,n){n.r(t),n.d(t,{setCalculate:()=>r});let r=e=>{let t=e.path,n=e.player,r=t.barrierArray;return function i(s){for(let o of(n.advanceBy(n.speed*(s/10)),r))o.changePositionShiftBy(o.speed*(s/10)),o.distanceToPlayer=Math.sqrt((o.positionX-n.positionX)**2+(o.positionY-n.positionY)**2);return(e.score+=(n.speed/10)**2*(10*s),!0===t.findClosestBarrier(n.positionAtPath).checkCollision(n))?"lose":n.positionAtPath>=t.pathLength?"win":void 0}}},"./src/modules/setDraw.js"(e,t,n){n.r(t),n.d(t,{setDraw:()=>r});let r=(e,t)=>{let n=e.fieldLayer,r=e.barrierLayer,i=e.playerLayer,s=e.screenWidth,o=e.screenHeight,a=e.scaleFactor,l=e.player,c=e.path.barrierArray,d=e.fpsField,A=e.scoreField,u=i.getContext("2d"),h=n.getContext("2d");return!function c(){i.width=r.width=s,i.height=r.height=o,n.width=s*a,n.height=o*a,r.offscreen=r.transferControlToOffscreen(),t.postMessage({canvas:r.offscreen,positionX:l.positionX,positionY:l.positionY,screenOptions:{width:s,height:o,scale:a,color:"yellow"}},[r.offscreen]),h.translate(s/2,o/2),h.scale(a,a),h.strokeStyle="green";let d=new Image;d.src="bg1.jpg",d.onload=()=>{h.drawImage(d,0,0,.1*d.width,.1*d.height),h.stroke(e.path.pathToDraw),window.dispatchEvent(new Event("imageLoaded"))},n.style.width=s*a+"px",n.style.height=o*a+"px",u.fillStyle="red",u.beginPath(),u.arc(s/2,o/2,2*a,0,2*Math.PI),u.fill()}(),function r(i){var s;t.postMessage({array:c,positionShiftX:l.positionShiftX,positionShiftY:l.positionShiftY}),n.style.transform="translate("+-a*l.positionX+"px, "+-a*l.positionY+"px)rotate(0.02deg)",s=i,A.innerHTML="Score: "+(0|e.score),s&&(d.innerHTML="FPS: "+(1e3/s|0))}}},"./src/assets/bg1.jpg"(e,t,n){e.exports=n.p+"bg1.jpg"},"./src/assets/level1.svg"(e,t,n){e.exports=n.p+"level1.svg"},"./src/assets/level2.svg"(e,t,n){e.exports=n.p+"level2.svg"},"./src/assets/level3.svg"(e,t,n){e.exports=n.p+"level3.svg"},"./src/assets/level4.svg"(e,t,n){e.exports=n.p+"level4.svg"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n.g.importScripts&&(e=n.g.location+"");var e,t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!e;)e=r[i--].src}if(!e)throw Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var r={};(()=>{/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/ n.r(r);var e=n(/*! ./index.css */ "./src/index.css"),t=n(/*! ./assets/level1.svg */ "./src/assets/level1.svg"),i=n(/*! ./assets/level2.svg */ "./src/assets/level2.svg"),s=n(/*! ./assets/level3.svg */ "./src/assets/level3.svg"),o=n(/*! ./assets/level4.svg */ "./src/assets/level4.svg"),a=n(/*! ./assets/bg1.jpg */ "./src/assets/bg1.jpg"),l=n(/*! ./modules/MenuList */ "./src/modules/MenuList.js"),c=n(/*! ./modules/Player */ "./src/modules/Player.js"),d=n(/*! ./modules/Game */ "./src/modules/Game.js"),A=n(/*! ./modules/pathFileLoader */ "./src/modules/pathFileLoader.js"),u=n(/*! ./modules/addControls */ "./src/modules/addControls.js"),h=n(/*! ./modules/menuCreate */ "./src/modules/menuCreate.js"),p=n(/*! ./modules/setDraw */ "./src/modules/setDraw.js"),m=n(/*! ./modules/setCalculate */ "./src/modules/setCalculate.js");let f=45,g=null,$=null,v=null,y=null,C=null,I=null,b=null,B=null,w=null,_={keydown:{" "(e){e.repeat||(I.player.speed=.75)},Escape:()=>R("lose"),w:()=>R("win")},keyup:{" ":()=>I.player.speed=.25},touchstart:{default(e){e.repeat||(I.player.speed=.75)}},touchend:{default:()=>I.player.speed=.25},universal(){X||(X=!0)}},x={keydown:{Enter:" "," "(e,t){t.currentActiveItem.pageLink instanceof l.default?M(t.currentActiveItem.pageLink):t.currentActiveItem.level?Y(t.currentActiveItem.level):t.currentActiveItem.action&&t.currentActiveItem.action()},ArrowLeft(e,t){t.shiftPosition(-1),S(t)},ArrowRight(e,t){t.shiftPosition(1),S(t)},ArrowUp(e,t){t.shiftPosition(-t.itemsPerRow),S(t)},ArrowDown(e,t){t.shiftPosition(+t.itemsPerRow),S(t)},Escape(){M(g)}}},P={keydown:{default(e){e.repeat||k(g)}}};function S(e){e.lastActiveItem&&e.lastActiveItem.connectedElement.classList.remove("selectedItem"),e.currentActiveItem&&e.currentActiveItem!==e.lastActiveItem&&e.currentActiveItem.connectedElement.classList.add("selectedItem"),e.lastActiveItem=e.currentActiveItem}function L(e,t,n){e.style.width=t+"px",e.style.height=n+"px"}function j(e){$?.remove(),($=T(document.body,"div",{id:e,class:"screen"})).style.display="flex",$.tabIndex="-1",$.focus()}function E(e){v&&(v.style.display="none"),e.style.display="flex",v=e}function k(){j("menuScreen");let e=T($,"div",{id:"menuPage"}),t=T($,"div",{id:"levelPage"});g=(0,h.menuCreate)(e,t),M(g)}function M(e){C?.abort(),E(e.connectedElement),e.lastActiveItem=null,S(e),C=(0,u.addControls)(x,e)}function T(e,t,n){let r=document.createElement(t);return n.id&&r.setAttribute("id",n.id),n.class&&r.setAttribute("class",n.class),n.innerHTML&&(r.innerHTML=n.innerHTML),e.appendChild(r)}async function Y(e){C?.abort(),j("gameScreen");let t=H(),n=await (0,A.pathFileLoader)(e);I=F(n),w=new Worker("drawWorker.js"),b=(0,p.setDraw)(I,w),B=(0,m.setCalculate)(I),window.addEventListener("imageLoaded",()=>{t.remove(),C=(0,u.addControls)(_),y=requestAnimationFrame(e=>O(e,0))},{once:!0})}function F(e){let t=new c.default(0,e),n=T($,"canvas",{id:"fieldLayer",class:"gameLayer"}),r=T($,"canvas",{id:"barrierLayer",class:"gameLayer"}),i=T($,"canvas",{id:"playerLayer",class:"gameLayer"}),s=T($,"div",{id:"uiLayer",class:"gameLayer"}),o=T(s,"span",{id:"scoreField"}),a=T(s,"span",{id:"fpsField"}),l=[n,r,i,s,o,a].reduce((e,t)=>e.set(t,t.id),new Map);return new d.default(t,e,{speed:.25,length:5,range:45,collisionRadius:1},{standardSpeed:.25,acceleratedSpeed:.75},{width:1e3,height:600,scale:10},l)}let X=!1,D=null;function O(e,t){b(t),X&&(D=B(t)),D?R(D):y=requestAnimationFrame(t=>O(t,t-e))}function H(){let e=T(document.body,"div",{id:"loadingScreen",class:"screen"}),t=T(e,"span",{id:"loadingField"});t.innerHTML="Loading... ";let n=T(e,"div",{class:"spinner-ball"});return n.innerHTML="<div class='ball'><div></div></div>",e}function R(e){X=!1,cancelAnimationFrame(y),y=null,D=null,$?.remove(),w.terminate(),C.abort(),j("endScreen"),"win"===e?(T($,"span",{id:"winMessage",innerHTML:"YOU WIN"}),T($,"span",{id:"winScore",innerHTML:"YOUR SCORE: "+(0|I.score)})):"lose"===e&&T($,"span",{id:"loseMessage",innerHTML:"YOU LOSE"}),C=(0,u.addControls)(P)}L(document.body,1e3,600),k()})()})();