(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{207:function(e,t,r){var content=r(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("0faa4b99",content,!0,{sourceMap:!1})},208:function(e,t,r){var content=r(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("0ace817b",content,!0,{sourceMap:!1})},209:function(e,t,r){"use strict";r(207)},210:function(e,t,r){var o=r(26)(!1);o.push([e.i,'.game{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:30px;background-color:#1fa3de;border-radius:3px;border:18px solid #fff;-webkit-box-shadow:0 0 6px rgba(0,0,0,.12),0 1px 6px rgba(0,0,0,.24);box-shadow:0 0 6px rgba(0,0,0,.12),0 1px 6px rgba(0,0,0,.24);z-index:2}.game-title{font-size:21px;margin-bottom:12px}.game-rules,.game-title{color:#fff;letter-spacing:2px;line-height:21px;font-weight:300;text-align:center}.game-rules{font-size:14px;margin-bottom:20px}.game-table{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:10px;-webkit-box-sizing:content-box;box-sizing:content-box}.game-table.in-refreshing .game-table-cell{-webkit-transform:rotate3d(1,1,0,90deg);transform:rotate3d(1,1,0,90deg);-webkit-transition:-webkit-transform .15s ease;transition:-webkit-transform .15s ease;transition:transform .15s ease;transition:transform .15s ease,-webkit-transform .15s ease}.game-table.in-creating .game-table-cell{top:calc(50% - 40px);left:calc(50% - 40px);-webkit-transform:rotate(1turn);transform:rotate(1turn);-webkit-transition:top .6s ease,left .6s ease,-webkit-transform .6s ease;transition:top .6s ease,left .6s ease,-webkit-transform .6s ease;transition:transform .6s ease,top .6s ease,left .6s ease;transition:transform .6s ease,top .6s ease,left .6s ease,-webkit-transform .6s ease}.game-table-cell{position:absolute;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:80px;height:80px;border:1px solid hsla(0,0%,100%,.55);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:12px;overflow:hidden;cursor:pointer;z-index:1;-webkit-transition:top .6s ease,left .6s ease,-webkit-transform .3s ease;transition:top .6s ease,left .6s ease,-webkit-transform .3s ease;transition:transform .3s ease,top .6s ease,left .6s ease;transition:transform .3s ease,top .6s ease,left .6s ease,-webkit-transform .3s ease}.game-table-cell:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background-color:hsla(0,0%,100%,.15);-webkit-backdrop-filter:blur(50px);backdrop-filter:blur(50px);z-index:1}.game-table-cell svg{position:relative;width:46px;height:46px;z-index:2}.game-table-cell.marine{background-color:#c23b64;border-color:#492727}.game-table-cell.marine:before{background-color:hsla(0,0%,100%,0);-webkit-backdrop-filter:blur(0);backdrop-filter:blur(0)}.game-table-cell.aqua{background-color:#c67cf1;border-color:#97e6fa}.game-table-cell.aqua:before{background-color:hsla(0,0%,100%,0);-webkit-backdrop-filter:blur(0);backdrop-filter:blur(0)}.game-table-cell.fubuki{background-color:#fff;border-color:#8fccff}.game-table-cell.fubuki:before{background-color:hsla(0,0%,100%,0);-webkit-backdrop-filter:blur(0);backdrop-filter:blur(0)}.game-table-cell.noel{background-color:#29314d;border-color:#d4a567}.game-table-cell.noel:before{background-color:hsla(0,0%,100%,0);-webkit-backdrop-filter:blur(0);backdrop-filter:blur(0)}.game-table-cell.korone{background-color:#f2f55a;border-color:#fc5555}.game-table-cell.korone:before{background-color:hsla(0,0%,100%,0);-webkit-backdrop-filter:blur(0);backdrop-filter:blur(0)}.game-table-cell.empty{background-color:transparent;border-color:transparent}.game-table-cell.empty:before{background-color:hsla(0,0%,100%,0);-webkit-backdrop-filter:blur(0);backdrop-filter:blur(0)}.game-table-dashbox{position:absolute;top:0;left:0;z-index:2;pointer-events:none;width:80px;height:80px;padding:4px}.game-table-dashbox.visible svg{opacity:1;-webkit-animation:spinner 4s linear infinite;animation:spinner 4s linear infinite}.game-table-dashbox.korone svg{stroke:#c23b64}.game-table-dashbox.fubuki svg{stroke:#096b75}.game-table-dashbox svg{width:72px;height:72px;fill:transparent;stroke:#fff;stroke-width:1;opacity:0;stroke-dasharray:20 14.125;stroke-dashoffset:227.9}.game-controls{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:20px}.game-score{font-size:14px;margin-right:20px}.game-btn,.game-score{color:#fff;letter-spacing:2px;font-weight:300}.game-btn{position:relative;padding:20px;background-color:hsla(0,0%,100%,.15);-webkit-backdrop-filter:blur(50px);backdrop-filter:blur(50px);cursor:pointer;overflow:hidden;font-size:12px;min-width:124px;-webkit-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}.game-btn:not(:last-child){margin-right:20px}.game-btn:hover{background-color:hsla(0,0%,100%,.25)}.game-btn:hover:before{left:0}.game-btn:before{display:block;content:"";position:absolute;bottom:0;left:-100%;width:100%;height:1px;background-color:#fff;-webkit-transition:left .2s ease-in-out;transition:left .2s ease-in-out}@-webkit-keyframes spinner{0%{stroke-dashoffset:273}to{stroke-dashoffset:0}}@keyframes spinner{0%{stroke-dashoffset:273}to{stroke-dashoffset:0}}',""]),e.exports=o},211:function(e,t,r){"use strict";r(208)},212:function(e,t,r){var o=r(26)(!1);o.push([e.i,".home{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:calc(100vh - 32px);background-image:url(/holopix/img/back.svg);background-repeat:no-repeat;background-position:50%;background-size:100% 100%;background-size:cover;padding-top:64px}.home .korone-decor{position:absolute;bottom:-4px;left:0;width:360px;z-index:1}.home .korone-decor-img{-webkit-filter:drop-shadow(12px 12px 0 #38abe0);filter:drop-shadow(12px 12px 0 #38abe0)}.home .korone-decor-img,.home .korone-decor-shadow{width:100%;-webkit-transform:scaleX(-1);transform:scaleX(-1)}.home .korone-decor-shadow{position:absolute;top:0;left:0;-webkit-filter:drop-shadow(-12px -12px 0 #fff);filter:drop-shadow(-12px -12px 0 white)}",""]),e.exports=o},215:function(e,t,r){"use strict";r.r(t);var o=r(83);var n=r(112);function l(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r(30),r(38),r(28),r(7),r(22),r(18),r(29),r(31),r(32);function c(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,n=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw n}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var f={name:"Game",components:{},data:function(){return{tableWidth:6,tableHeight:6,cellWidth:80,cells:[],currentPath:[],currentColorClass:"",paths:[],creating:!1,refreshing:!1,round:0}},mounted:function(){this.$refs["game-table"].style.width=" ".concat(this.tableWidth*this.cellWidth,"px"),this.$refs["game-table"].style.height=" ".concat(this.tableHeight*this.cellWidth,"px"),this.currentPath=[],this.currentColorClass="",this.paths=[],this.round=0,this.cells=this.generateCells()},methods:{mouseDown:function(e){e.value&&!this.cells[e.id].used&&(this.currentPath=[],this.currentColorClass=e.colorClass,this.cells[e.id].used=!0,this.currentPath.push(e),this.$refs["game-table-dashbox"].style.left="".concat(e.x*this.cellWidth,"px"),this.$refs["game-table-dashbox"].style.top="".concat(e.y*this.cellWidth,"px"))},mouseEnter:function(e){var t=this.currentPath.length,r=this.currentPath[t-1],o=this.currentPath[t-2],n=this.currentPath[0];if((null==o?void 0:o.id)===e.id)return this.cells[null==r?void 0:r.id].used=!1,this.cells[null==r?void 0:r.id].value||(this.cells[null==r?void 0:r.id].colorClass=""),this.$refs["game-table-dashbox"].style.left="".concat(e.x*this.cellWidth,"px"),this.$refs["game-table-dashbox"].style.top="".concat(e.y*this.cellWidth,"px"),void this.currentPath.pop();(null==r?void 0:r.id)===e.id||!((null==r?void 0:r.x)===e.x&&1===Math.abs((null==r?void 0:r.y)-e.y)||(null==r?void 0:r.y)===e.y&&1===Math.abs((null==r?void 0:r.x)-e.x))||e.used||0!==e.value&&e.value!==(null==n?void 0:n.value)||0!==(null==r?void 0:r.value)&&((null==r?void 0:r.value)!==(null==n?void 0:n.value)||(null==r?void 0:r.id)!==(null==n?void 0:n.id))||(this.cells[r.id].used=!0,this.cells[e.id].value||(this.cells[e.id].colorClass=this.currentColorClass),this.cells[e.id].used=!0,this.$refs["game-table-dashbox"].style.left="".concat(e.x*this.cellWidth,"px"),this.$refs["game-table-dashbox"].style.top="".concat(e.y*this.cellWidth,"px"),this.currentPath.push(e))},mouseUp:function(e){var t=this.currentPath.length,r=this.currentPath[0],o=this.currentPath[t-1];if(e.value===(null==r?void 0:r.value)&&e.id!==(null==r?void 0:r.id)&&e.id===o.id){this.paths.push(this.currentPath);var n,l=c(this.currentPath);try{for(l.s();!(n=l.n()).done;){var d=n.value;this.cells[d.id].used=!0}}catch(e){l.e(e)}finally{l.f()}}else{var f,h=c(this.currentPath);try{for(h.s();!(f=h.n()).done;){var m=f.value;this.cells[m.id].used=!1}}catch(e){h.e(e)}finally{h.f()}}this.currentPath=[],this.allSellsUsed(this.cells)&&(console.log("victory!!"),this.nextRound())},refreshGame:function(){var e=this;this.refreshing=!0,setTimeout((function(){e.currentPath=[],e.currentColorClass="",e.paths=[];var t,r=c(e.cells);try{for(r.s();!(t=r.n()).done;){var o=t.value;-1!==o.value&&(e.cells[o.id].used=!1),o.value||(e.cells[o.id].colorClass="")}}catch(e){r.e(e)}finally{r.f()}e.refreshing=!1}),200)},newGame:function(){var e=this;this.creating=!0,setTimeout((function(){e.currentPath=[],e.currentColorClass="",e.paths=[],e.round=0,e.cells=e.generateCells(),e.creating=!1}),600)},nextRound:function(){var e=this;this.creating=!0,setTimeout((function(){e.currentPath=[],e.currentColorClass="",e.paths=[],e.round++,e.cells=e.generateCells(),e.creating=!1}),600)},generateCells:function(){for(var e=this.tableWidth*this.tableHeight,t=[],r=[],i=0;i<e;i++){var o={id:i,value:0,colorClass:"",icon:"",used:!1,x:Math.floor(i%this.tableWidth),y:Math.floor(i/this.tableWidth)};t.push(o),r.push(o)}for(var n=[{value:1,colorClass:"aqua",icon:"icon-aqua"},{value:2,colorClass:"marine",icon:"icon-marine"},{value:3,colorClass:"fubuki",icon:"icon-fubuki"},{value:4,colorClass:"noel",icon:"icon-noel"},{value:5,colorClass:"korone",icon:"icon-korone"}],l=function(){for(var e=r[Math.floor(Math.random()*r.length)],o=Math.floor(6*Math.random())+4,l=e,c=n[Math.floor(Math.random()*n.length)],d=0;d<o;d++){var f=(r=r.filter((function(e){return e.id!==l.id}))).filter((function(e){return e.x===l.x&&1===Math.abs(e.y-l.y)||e.y===l.y&&1===Math.abs(e.x-l.x)}));if(d){if(!f.length||d===o-1){t[l.id].value=c.value,t[l.id].colorClass=c.colorClass,t[l.id].icon=c.icon;break}l=f[Math.floor(Math.random()*f.length)]}else{if(!f.length){t[l.id].value=-1,t[l.id].colorClass="empty",t[l.id].used=!0,t[l.id].icon="";break}t[l.id].value=c.value,t[l.id].colorClass=c.colorClass,t[l.id].icon=c.icon,l=f[Math.floor(Math.random()*f.length)]}}};r.length;)l();return t},printCurrentPath:function(){return l(this.currentPath.map((function(e){return e.id})))},allSellsUsed:function(e){var t,r=c(e);try{for(r.s();!(t=r.n()).done;){if(!t.value.used)return!1}}catch(e){r.e(e)}finally{r.f()}return!0}}},h=(r(209),r(16)),m={name:"HomePage",components:{Game:Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"game"},[r("div",{staticClass:"game-title"},[e._v("\n        Rules:\n    ")]),e._v(" "),e._m(0),e._v(" "),r("div",{ref:"game-table",staticClass:"game-table",class:[e.refreshing?"in-refreshing":null,e.creating?"in-creating":null]},[e._l(e.cells,(function(t){return r("div",{key:t.id,staticClass:"game-table-cell",class:[t.used?t.colorClass:null],style:e.creating?null:{top:t.y*e.cellWidth+"px",left:t.x*e.cellWidth+"px"},on:{mousedown:function(r){return e.mouseDown(t)},mouseup:function(r){return e.mouseUp(t)},mouseenter:function(r){return e.mouseEnter(t)}}},[t.icon?r("svg",{class:t.icon},[r("use",{attrs:{"xlink:href":"icons/all.svg#"+t.icon}})]):e._e()])})),e._v(" "),r("div",{ref:"game-table-dashbox",staticClass:"game-table-dashbox",class:[e.currentPath.length?"visible":null,e.currentColorClass]},[r("svg",{attrs:{id:"icon-dashbox",viewBox:"0 0 72 72"}},[r("rect",{attrs:{x:"1",y:"1",rx:"8",ry:"8",width:"70",height:"70"}})])])],2),e._v(" "),r("div",{staticClass:"game-controls"},[r("button",{staticClass:"game-btn",on:{click:e.newGame}},[e._v("\n            NEW\n        ")]),e._v(" "),r("span",{staticClass:"game-score"},[e._v("Winning streak: "+e._s(e.round))]),e._v(" "),r("button",{staticClass:"game-btn",on:{click:e.refreshGame}},[e._v("\n            TRY AGAIN\n        ")])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"game-rules"},[e._v("\n        1. connect the same icons to each other "),r("br"),e._v("\n        2. do NOT leave empty squares "),r("br"),e._v("\n        3. paths cannot intersect\n    ")])}],!1,null,null,null).exports}},x=(r(211),Object(h.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("Game"),e._v(" "),e._m(0)],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"korone-decor"},[r("img",{staticClass:"korone-decor-shadow",attrs:{src:"img/korone.png",alt:""}}),e._v(" "),r("img",{staticClass:"korone-decor-img",attrs:{src:"img/korone.png",alt:""}})])}],!1,null,null,null));t.default=x.exports}}]);