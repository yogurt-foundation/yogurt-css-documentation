(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],d=0,g=[];d<i.length;d++)s=i[d],r[s]&&g.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(g.length)g.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0b65ffb6":"593d411f","chunk-12950967":"80848c8c","chunk-2d0a3196":"290ceac8","chunk-2d0a3577":"ab3bfb0a","chunk-2d0a40c8":"e6ae95c1","chunk-2d0a43df":"bb478432","chunk-2d0a4bbf":"d415a2cd","chunk-2d0aa90c":"dd4b4d25","chunk-2d0aab07":"9b2d7a57","chunk-2d0abc00":"8eb61c7b","chunk-2d0ae937":"48e26b4f","chunk-2d0aeb45":"6b345a31","chunk-2d0af08c":"a1c021fb","chunk-2d0afa49":"49142b5b","chunk-2d0b1fd5":"6a5feef0","chunk-2d0b2762":"ed146b28","chunk-2d0b6187":"6604227e","chunk-2d0ba136":"67463780","chunk-2d0bb267":"e27a693b","chunk-2d0bcec1":"77a2d584","chunk-2d0bdf38":"ea784f79","chunk-2d0bff92":"ed276735","chunk-2d0c0494":"4e8e409c","chunk-2d0c0a09":"41225d9b","chunk-2d0c4313":"7b9d8785","chunk-2d0c46d1":"73cf11e3","chunk-2d0c4a95":"90e9fe6c","chunk-2d0c512b":"33291b99","chunk-2d0c86e3":"397e88b3","chunk-2d0c8f4c":"5c6cf8ad","chunk-2d0cf16e":"f1ba774a","chunk-2d0d056d":"701b75bc","chunk-2d0d0645":"650c3104","chunk-2d0d2f22":"c6f5f205","chunk-2d0d61fd":"7a82e68f","chunk-2d0d7e63":"ea14c48d","chunk-2d0dda4e":"fdc3e9bf","chunk-2d0de971":"f9abf71c","chunk-2d0e1b57":"5c78e893","chunk-2d0e1fbe":"7e1f9b1d","chunk-2d0e22d6":"8ec93f98","chunk-2d0e4fe5":"7f6338cc","chunk-2d0e542a":"8118738b","chunk-2d0e57ec":"997f9763","chunk-2d0e5b34":"5e0918f0","chunk-2d0e6553":"24870849","chunk-2d0e6c86":"2e7a9e9a","chunk-2d0ea098":"4977c614","chunk-2d0f0a11":"f33e74f4","chunk-2d208ac5":"1827f25c","chunk-2d209408":"d77b5877","chunk-2d20f745":"3be8bf71","chunk-2d20ff23":"9c537c8d","chunk-2d2138c7":"ba2571d3","chunk-2d216f3b":"ee7e0eb4","chunk-2d217e5b":"bb484cd1","chunk-2d21b84a":"017c6de4","chunk-2d21dcd2":"6062154d","chunk-2d21f327":"aebda2dc","chunk-2d2214b3":"a8726c8c","chunk-2d221799":"d528d7fb","chunk-2d221814":"930fe270","chunk-2d221a34":"2ccf9824","chunk-2d22502a":"536b6fec","chunk-2d226775":"0e4dbec1","chunk-2d229411":"4af102db","chunk-2d2295e9":"a6aabab6","chunk-2d22c171":"29b276c8","chunk-2d22c2b8":"dbc08b32","chunk-2d22ca58":"5404d50e","chunk-2d2311f7":"8f74e18f","chunk-2d237ee7":"3165d17a","chunk-2d238465":"fa95717a","chunk-7532b3ea":"c18e5539","chunk-e13e4362":"360518b1"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e),o=function(t){l.onerror=l.onload=null,clearTimeout(c);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");s.type=n,s.request=o,a[1](s)}r[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"199c":function(e,t){var a='\x3c!-- \n  Welcome to Yogurt Playground!\n\n  A developer tool for you to testing or prototyping complex or simple .\n\n  The tool is also available for SnapCraft and AppImage (Linux/Win/Mac),\n  desktop apps, you can find the information on the Github repository page.\n\n  (!) In the example below, the ".." is to separate in between different\n  utilities for easy to read for a beginner. You don\'t need ".." in writing\n  Yogurt CSS.\n\n  (?) F1 for Command Palette\n  (?) Right-Click for more options\n  (?) Ctrl+Alt+M to switch windows\n  (?) Ctrl+Alt+/ to run code\n  (?) Ctrl+Alt+D to reset auto-saved data\n--\x3e \n\n<body class="h-screen .. font-default .. flex justify-center items-center">\n  <y class="z-10 .. absolute top-0 left-0 .. w-full">\n    <y class="h-screen .. pattern ripple-lg text-white bg-gray-300"></y>\n  </y>\n  <y class="(xs)p-0 (sm)p-10 .. flex flex-col justify-center items-center">\n    <y class="z-50 .. animation fade-in-up duration-800 delay-2">\n      <y class="pb-6 .. text-gray-600 text-center .. fluid text-min-xl text-max-3xl .. highlight fore-gray-100 rear-teal-400">\n        Welcome to Yogurt Playground\n      </y>\n    </y>\n    <y class="z-50 .. px-16 py-10 .. (xs)max-w-full .. flex justify-center items-center .. bg-transparent .. rounded-lg .. shadow-dreamy-lg .. backdrop-filter blur-2 .. animation fade-in duration-4000">\n      <y class="flex (xs)flex-col (sm)flex-row justify-center items-center">\n        <y class="h-24 w-24 .. bg-gray-500 .. rounded-full .. shadow-dreamy-lg"></y>\n        <y class="(xs)pt-4 (sm)p-4 .. text-gray-500 .. fluid text-min-3xl text-max-5xl text-center font-thin .. highlight fore-gray-100 rear-amber-400">\n          Hello World!\n        </y>\n      </y>\n    </y>\n    <y class="z-50 .. (lg)max-w-xl .. animation fade-in-down duration-800 delay-2">\n      <y class="text-gray-500 font-thin text-center .. fluid p-min-2 p-max-6 text-min-xl text-max-5xl .. depth-tight .. highlight fore-gray-100 rear-pink-400">\n        Start craft something beautiful\n        <span class="underline .. highlight fore-gray-800 rear-gray-400">\n          today!\n        </span>\n      </y>\n    </y>\n  </y>\n</body>',n="@import 'assets/css/yogurt-1.1.6_solidcore.min.css';[debug=screen]{font-size:13px;color:#000;background-color:#d3d3d3;opacity:.3;border-radius:3px;margin:4px;font-weight:700}@media (min-width:320px){[debug=screen]::after{content:'(xs) 320px'}}@media (min-width:480px){[debug=screen]::after{content:'(sm) 480px'}}@media (min-width:640px){[debug=screen]::after{content:'(sm) 640px'}}@media (min-width:768px){[debug=screen]::after{content:'(md) 768px'}}@media (min-width:1024px){[debug=screen]::after{content:'(lg) 1024px'}}@media (min-width:1280px){[debug=screen]::after{content:'(xl) 1280px'}}@media (min-width:1920px){[debug=screen]::after{content:'(2xl) 1920px'}}@media (min-width:2560px){[debug=screen]::after{content:'(3k) 2560px'}}@media (min-width:3840px){[debug=screen]::after{content:'(4k) 3840px'}}@media (min-width:5120px){[debug=screen]::after{content:'(5k) 5120px'}}@media (min-width:5760px){[debug=screen]::after{content:'(6k) 5760px'}}@media (min-width:7000px){[debug=screen]::after{content:'(7k) 7000px'}}@media (min-width:7680px){[debug=screen]::after{content:'(8k) 7680px'}}",r="";"true"===localStorage.dataSaveEnabled||(localStorage.dataSaveEnabled="true",localStorage.dataHTML=a,localStorage.dataCSS=n,localStorage.dataJS=r),"true"===localStorage.dataThemeEnabled||(localStorage.dataThemeEnabled="true",localStorage.dataTheme="vs"),"true"===localStorage.dataBgThemeEnabled||(localStorage.dataBgThemeEnabled="true",localStorage.dataBgTheme="relative flex flex-row pattern ripple-lg text-white bg-gray-300"),"true"===localStorage.dataButtonThemeEnabled||(localStorage.dataButtonThemeEnabled="true",localStorage.dataButtonTheme="opacity-50 transform (hover)scale-125 w-5 h-5 transition duration-300 ease-in-out transform (group-hover)scale-125"),"true"===localStorage.dataMenuBarThemeEnabled||(localStorage.dataMenuBarThemeEnabled="true",localStorage.dataMenuBarTheme="p-1 absolute bottom-0 left-0 h-20 w-full"),"true"===localStorage.dataLogoThemeEnabled||(localStorage.dataLogoThemeEnabled="true",localStorage.dataLogoTheme="invert-0 opacity-75 h-8 w-auto object-fit object-center overflow-hidden"),"true"===localStorage.dataBgLogoThemeEnabled||(localStorage.dataBgLogoThemeEnabled="true",localStorage.dataBgLogoTheme="invert-0 h-auto w-64 object-cover object-center overflow-hidden opacity-75 select-none"),"true"===localStorage.dataMainButtonThemeEnabled||(localStorage.dataMainButtonThemeEnabled="true",localStorage.dataMainButtonTheme="(group) flex justify-center items-center px-2 py-1 text-black-900 (group-hover)text-black-900 bg-transparent (active)bg-gray-300 border border-gray-200 (hover)border-gray-500 (focus)border-gray-500 filter saturate-4 rounded transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none"),"true"===localStorage.dataMainButtonIconThemeEnabled||(localStorage.dataMainButtonIconThemeEnabled="true",localStorage.dataMainButtonIconTheme="invert-0 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 w-5 h-5 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-110"),"true"===localStorage.dataPreloaderThemeEnabled||(localStorage.dataPreloaderThemeEnabled="true",localStorage.dataPreloaderTheme="z-50 absolute top-16 right-6 w-5 h-5 preloader light animation fade-in duration-300"),"true"===localStorage.dataDocButtonThemeEnabled||(localStorage.dataDocButtonThemeEnabled="true",localStorage.dataDocButtonTheme="flex justify-center items-center px-2 h-6 text-sm text-gray-600 (active)bg-gray-300 border border-gray-200 (hover)border-gray-500 (focus)border-gray-500 rounded")},"23be":function(e,t,a){"use strict";var n=a("199c"),r=a.n(n);t["default"]=r.a},"3d00":function(e,t,a){"use strict";var n=a("b436"),r=a.n(n);r.a},"3dfd":function(e,t,a){"use strict";var n=a("422c"),r=a("23be"),o=(a("034f"),a("2877")),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"422c":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("y",{staticClass:"font-default antialiased",attrs:{id:"app"}},[a("router-view")],1)},r=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},"4aa8":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("a026"),r=a("3dfd"),o=a("8c4f"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("y",{class:e.bgCoverTheme},[a("y",{staticClass:"z-10 absolute top-0 left-0 flex justify-start items-center h-screen w-full"},[a("y",{staticClass:"ml-24"},[a("img",{class:e.bgLogoTheme,attrs:{src:"assets/image/logo_full.svg",title:"Yogurt"}})])],1),a("y",{class:[e.isActive?"hidden":"z-50 absolute bottom-5 left-6 (group) flex justify-center items-center px-3 py-2 bg-charcoal-800 (hover)bg-orange-700 (active)bg-orange-800 border-4 border-transparent (hover)border-orange-600 shadow-dreamy-lg filter saturate-4 rounded-lg transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none"],attrs:{title:"Editor (Ctrl+Alt+M)"},on:{click:e.toggleModes}},[a("img",{staticClass:"invert-1 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 w-6 h-6 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-110",attrs:{src:"assets/image/editor.svg"}}),a("y",{staticClass:"ml-2 text-sm font-semibold text-gray-100 (group-hover)text-black-900 opacity-50 (group-hover)opacity-100"},[e._v("\n      Editor\n    ")])],1),a("y",{class:[e.isActive?"z-20 relative h-screen w-full animation fade-in duration-300":"flex-initial invisible animation fade-out duration-300"],model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("y",{class:[e.isActive?"z-50 breakpoint-540 menuBarTheme bg-transparent":"hidden"]},[a("y",{staticClass:"p-2 flex justify-between items-center"},[a("y",{staticClass:"flex justify-center items-center select-none"},[a("y",{staticClass:"px-2 animation roll-in-left duration-800"},[a("img",{class:e.logoTheme,attrs:{src:"assets/image/logo_full.svg",alt:"Yogurt"}})]),a("y",{staticClass:"animation roll-in-left duration-800"},[a("a",{class:e.docButtonTheme,attrs:{href:"https://yogurtcss.netlify.app/getting-started/",target:"_blank",rel:"noopener",title:"Read the Documentation"}},[e._v("\n              Docs\n            ")])])],1),a("y",{staticClass:"px-2 flex flex-gap-3 justify-end items-center"},[a("y",{staticClass:"flex justify-center items-center px-2 py-2 filter saturate-4 rounded transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none",attrs:{title:"Reset Data (Ctrl+Alt+D)"},on:{click:e.resetData}},[a("img",{class:e.themeButton,attrs:{src:"assets/image/reset.svg",alt:"Reset Data"}})]),a("y",{staticClass:"flex justify-center items-center px-2 py-2 filter saturate-4 rounded transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none",attrs:{title:"Dark or Light Theme"},on:{click:e.changeEditorTheme}},[a("img",{class:e.themeButton,attrs:{src:"assets/image/dark-light-mode.svg",alt:"Dark/Light Mode"}})]),a("y",{class:e.mainButtonTheme,attrs:{title:"Preview (Ctrl+Alt+M)"},on:{click:function(t){return e.toggleModes()}}},[a("img",{class:e.mainButtonIconTheme,attrs:{src:"assets/image/preview.svg"}}),a("y",{staticClass:"ml-2 text-sm font-semibold opacity-50 (group-hover)opacity-100"},[e._v("\n              Preview\n            ")])],1),a("y",{class:e.mainButtonTheme,attrs:{title:"Run Code (F2 or Ctrl+Alt+/)"},on:{click:e.renderCode}},[a("img",{class:e.mainButtonIconTheme,attrs:{src:"assets/image/editor.svg"}}),a("y",{staticClass:"ml-2 text-sm font-semibold opacity-50 (group-hover)opacity-100"},[e._v("\n              Run\n            ")])],1)],1)],1)],1),e.workingStatus?a("y",{class:e.preloaderTheme}):e._e(),e.resetStatus?a("y",{class:e.preloaderTheme}):e._e(),a("y",{key:e.componentKey,attrs:{name:"html",lazy:!0}},[a("MyEditor",{attrs:{language:"html",codes:e.loadHtmlCodes,theme:e.editorTheme},on:{onCodeChange:e.htmlOnCodeChange}})],1)],1),a("y",{class:[e.isActive?"z-20 w-auto h-screen":"z-20 w-auto h-full"],attrs:{title:"Resize Window",id:"resizableWindowBar"}},[a("y",{class:[e.isActive?"h-full":"(group) h-full flex flex-col justify-start items-center filter saturate-4"]},[a("y",{class:[e.isActive?"w-1 h-full bg-black-700 (hover)bg-orange-600 (active)bg-orange-600 (focus)bg-orange-600 filter saturate-4 cursor-col-resize select-none transition duration-200 ease-in-out":"z-30 -mr-8 transform (hover)-translate-x-8 flex justify-center items-center w-10 h-screen bg-orange-500 (group-hover)bg-orange-600 (hover)shadow-dreamy-sm cursor-col-resize transition duration-200 ease-in-out shadow-dreamy-lg rounded-l-lg select-none"]})],1)],1),a("y",{class:[e.isActive?"z-20 flex-1 h-screen animation fade-in duration-300":"z-20 flex-1 h-screen animation fade-in duration-200"]},[a("y",{class:[e.isActive?"z-20 h-screen breakpoint-640 bg-white shadow-lg":"z-20 flex-1 h-screen breakpoint-320 bg-white shadow-lg"],attrs:{id:"result"}})],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("y",{ref:"container",staticClass:"h-cus-985",attrs:{id:"container"}})},c=[],d=a("8ea9"),u={props:{codes:{type:String,default:function(){return""}},language:{type:String,default:function(){return"html"}},theme:{type:String,default:function(){return"vs"}}},data:function(){return{codesCopy:null}},mounted:function(){this.initEditor()},methods:{initEditor:function(){var e=this;e.$refs.container.innerHTML="",e.monacoEditor=d["a"].create(e.$refs.container,{value:e.codesCopy||e.codes,language:e.language,theme:e.theme,accessibilitySupport:"auto",autoClosingBrackets:!0,autoIndent:!0,automaticLayout:!0,codeLens:!0,colorDecorators:!0,cursorStyle:"line",disableLayerHinting:!0,emptySelectionClipboard:!1,enableSplitViewResizing:!1,folding:!0,formatOnPaste:!0,formatOnType:!0,foldingHighlight:!0,foldingStrategy:"indentation",fontSize:13,glyphMargin:!0,lineNumbers:"on",lineNumbersMinChars:2,minimap:{enabled:!1},quickSuggestions:{other:!0,comments:!0,strings:!0},quickSuggestionsDelay:500,readOnly:!1,renderWhitespace:!0,roundedSelection:!0,scrollBeyondLastLine:!0,selectionClipboard:!1,selectOnLineNumbers:!0,showFoldingControls:"always",tabCompletion:"on",tabSize:"2",useTabStops:!1,wordWrap:"on",wordWrapMinified:!0,wrappingIndent:"indent"}),e.monacoEditor.onDidChangeModelContent(function(t){e.codesCopy=e.monacoEditor.getValue(),e.$emit("onCodeChange",e.monacoEditor.getValue(),t)}),window.addEventListener("resize",function(){e.initEditor()});var t=document.getElementById("app");t.addEventListener("onresize",function(){e.initEditor()})}}},g=u,f=(a("af30"),a("2877")),h=Object(f["a"])(g,l,c,!1,null,"ffebd9dc",null),p=h.exports;function m(){var e=document.getElementById("resizableWindowBar"),t=e.previousElementSibling,a=e.nextElementSibling,n=0,r=0,o=function(e){n=e.clientX,e.clientY,r=t.getBoundingClientRect().width,document.addEventListener("mousemove",s),document.addEventListener("mouseup",i)};e.addEventListener("mousedown",o);var s=function(o){var s=o.clientX-n,i=(o.clientY,100*(r+s)/e.parentNode.getBoundingClientRect().width);t.style.width="".concat(i,"%"),e.style.cursor="col-resize",t.style.userSelect="none",t.style.pointerEvents="none",a.style.userSelect="none",a.style.pointerEvents="none"},i=function n(){e.style.removeProperty("cursor"),document.body.style.removeProperty("cursor"),t.style.removeProperty("user-select"),t.style.removeProperty("pointer-events"),a.style.removeProperty("user-select"),a.style.removeProperty("pointer-events"),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",n),document.initEditor()}}var y={components:{MyEditor:p},data:function(){return{activeName:"html",htmlCodes:'\x3c!-- \n  Welcome to Yogurt Playground!\n\n  A developer tool for you to testing or prototyping complex or simple .\n\n  The tool is also available for SnapCraft and AppImage (Linux/Win/Mac),\n  desktop apps, you can find the information on the Github repository page.\n\n  (!) In the example below, the ".." is to separate in between different\n  utilities for easy to read for a beginner. You don\'t need ".." in writing\n  Yogurt CSS.\n\n  (?) F1 for Command Palette\n  (?) Right-Click for more options\n  (?) Ctrl+Alt+M to switch windows\n  (?) Ctrl+Alt+/ to run code\n  (?) Ctrl+Alt+D to reset auto-saved data\n--\x3e \n  <body class="h-screen .. font-default .. flex justify-center items-center">\n    <y class="z-10 .. absolute top-0 left-0 .. w-full">\n      <y class="h-screen .. pattern ripple-lg text-white bg-gray-300"></y>\n    </y>\n    <y class="(xs)p-0 (sm)p-10 .. flex flex-col justify-center items-center">\n      <y class="z-50 .. animation fade-in-up duration-800 delay-2">\n        <y class="pb-6 .. text-gray-600 text-center .. fluid text-min-xl text-max-3xl .. highlight fore-gray-100 rear-teal-400">\n          Welcome to Yogurt Playground\n        </y>\n      </y>\n      <y class="z-50 .. px-16 py-10 .. (xs)max-w-full .. flex justify-center items-center .. bg-transparent .. rounded-lg .. shadow-dreamy-lg .. backdrop-filter blur-2 .. animation fade-in duration-4000">\n        <y class="flex (xs)flex-col (sm)flex-row justify-center items-center">\n          <y class="h-24 w-24 .. bg-gray-500 .. rounded-full .. shadow-dreamy-lg"></y>\n          <y class="(xs)pt-4 (sm)p-4 .. text-gray-500 .. fluid text-min-3xl text-max-5xl text-center font-thin .. highlight fore-gray-100 rear-amber-400">\n            Hello World!\n          </y>\n        </y>\n      </y>\n      <y class="z-50 .. (lg)max-w-xl .. animation fade-in-down duration-800 delay-2">\n        <y class="text-gray-500 font-thin text-center .. fluid p-min-2 p-max-6 text-min-xl text-max-5xl .. depth-tight .. highlight fore-gray-100 rear-pink-400">\n          Start craft something beautiful\n          <span class="underline .. highlight fore-gray-800 rear-gray-400">\n            today!\n          </span>\n        </y>\n      </y>\n    </y>\n  </body>',jsCodes:"",cssCodes:"@import 'assets/css/yogurt-1.1.6_solidcore.min.css';[debug=screen]{font-size:13px;color:#000;background-color:#d3d3d3;opacity:.3;border-radius:3px;margin:4px;font-weight:700}@media (min-width:320px){[debug=screen]::after{content:'(xs) 320px'}}@media (min-width:480px){[debug=screen]::after{content:'(sm) 480px'}}@media (min-width:640px){[debug=screen]::after{content:'(sm) 640px'}}@media (min-width:768px){[debug=screen]::after{content:'(md) 768px'}}@media (min-width:1024px){[debug=screen]::after{content:'(lg) 1024px'}}@media (min-width:1280px){[debug=screen]::after{content:'(xl) 1280px'}}@media (min-width:1920px){[debug=screen]::after{content:'(2xl) 1920px'}}@media (min-width:2560px){[debug=screen]::after{content:'(3k) 2560px'}}@media (min-width:3840px){[debug=screen]::after{content:'(4k) 3840px'}}@media (min-width:5120px){[debug=screen]::after{content:'(5k) 5120px'}}@media (min-width:5760px){[debug=screen]::after{content:'(6k) 5760px'}}@media (min-width:7000px){[debug=screen]::after{content:'(7k) 7000px'}}@media (min-width:7680px){[debug=screen]::after{content:'(8k) 7680px'}}",htmlEditor:null,jsEditor:null,cssEditor:null,componentKey:0,isActive:!0,loadHtmlCodes:localStorage.dataHTML,loadCssCodes:localStorage.dataCSS,loadJsCodes:localStorage.dataJS,workingStatus:!1,resetStatus:!1,editorTheme:localStorage.dataTheme,bgCoverTheme:localStorage.dataBgTheme,menubarTheme:localStorage.dataMenuBarTheme,docButtonTheme:localStorage.dataDocButtonTheme,themeButton:localStorage.dataButtonTheme,mainButtonIconTheme:localStorage.dataMainButtonIconTheme,mainButtonTheme:localStorage.dataMainButtonTheme,logoTheme:localStorage.dataLogoTheme,bgLogoTheme:localStorage.dataBgLogoTheme,preloaderTheme:localStorage.dataPreloaderTheme}},mounted:function(){this.shortcutKeysEvents(),this.renderCode(),m()},beforeDestroy:function(){document.removeEventListener("keydown",this.shortcutKeys)},methods:{runCode:function(){this.workingStatus=!0;var e='<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><style>'+this.loadCssCodes+"</style></head><body>"+this.loadHtmlCodes+'<y debug="screen"></y></body><script>'+this.loadJsCodes+"<\\/script></html>",t=document.getElementById("result");t.innerHTML="";var a=document.createElement("iframe");a.name="result",a.id="resultIframe",a.sandbox="allow-forms allow-popups allow-scripts allow-same-origin allow-modals",a.frameBorder="0",a.style.width="100%",a.style.height="100%",t.append(a);var n=document.getElementById("resultIframe");n.contentDocument.write(e),n.contentDocument.close()},htmlOnCodeChange:function(e){this.loadHtmlCodes=e,localStorage.dataHTML=e},cssOnCodeChange:function(e){this.loadCssCodes=e,localStorage.dataCSS=e},javascriptOnCodeChange:function(e){this.loadJsCodes=e,localStorage.dataJS=e},toggleModes:function(){this.isActive=!this.isActive,this.forceRerender()},shortcutKeysEvents:function(){this.shortcutKeys=function(e){var t=this;("/"===e.key&&(e.altKey||e.metaKey)||"F2"===e.key)&&(e.preventDefault(),this.renderCode()),"m"===e.key&&(e.altKey||e.metaKey)&&(e.preventDefault(),this.toggleModes()),"p"===e.key&&(e.altKey||e.metaKey)&&(e.preventDefault(),localStorage.dataHTML=this.htmlCodes,localStorage.dataCSS=this.cssCodes,localStorage.dataJS=this.jsCodes,this.forceRerender()),"d"===e.key&&(e.altKey||e.metaKey)&&(e.preventDefault(),this.resetStatus=!0,setTimeout(function(){localStorage.clear(),window.location.reload(),t.resetStatus=!1},1e3))},document.addEventListener("keydown",this.shortcutKeys.bind(this))},resetData:function(){var e=this;this.resetStatus=!0,setTimeout(function(){localStorage.clear(),window.location.reload(),e.resetStatus=!1},1e3)},forceRerender:function(){this.componentKey+=1},renderCode:function(){var e=this;this.runCode(),setTimeout(function(){e.workingStatus=!1},2e3)},changeEditorTheme:function(){"vs"===localStorage.dataTheme?(localStorage.dataTheme="vs-dark",localStorage.dataBgLogoTheme="invert-1 h-auto w-64 object-cover object-center overflow-hidden opacity-75 select-none",localStorage.dataLogoTheme="invert-1 opacity-75 h-8 w-auto object-fit object-center overflow-hidden",localStorage.dataDocButtonTheme="flex justify-center items-center px-2 h-6 text-sm text-gray-500 (hover)text-gray-400 bg-transparent (active)bg-gray-700 border border-gray-200 (hover)border-gray-500 (focus)border-gray-500 rounded transition duration-300 ease-in-out",localStorage.dataMenuBarTheme="p-1 absolute bottom-0 left-0 h-20 w-full",localStorage.dataButtonTheme="invert-1 opacity-50 transform (hover)scale-125 w-5 h-5 transition duration-300 ease-in-out transform (group-hover)scale-125",localStorage.dataMainButtonTheme="(group) flex justify-center items-center px-2 py-1 text-gray-400 (hover)text-gray-300 bg-transparent (active)bg-gray-700 border border-gray-200 (hover)border-gray-500 (focus)border-gray-500 rounded transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none",localStorage.dataMainButtonIconTheme="invert-1 opacity-50 (group-hover)opacity-75 (group-hover)invert-1 w-5 h-5 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-110",localStorage.dataBgTheme="relative flex flex-row pattern ripple-lg text-charcoal-100 bg-charcoal-400",localStorage.dataPreloaderTheme="z-50 absolute top-16 right-6 w-5 h-5 preloader dark animation fade-in duration-300",window.location.reload()):"vs-dark"===localStorage.dataTheme&&(localStorage.dataTheme="vs",localStorage.dataBgLogoTheme="invert-0 h-auto w-64 object-cover object-center overflow-hidden opacity-75 select-none",localStorage.dataLogoTheme="invert-0 opacity-75 h-8 w-auto object-fit object-center overflow-hidden",localStorage.dataMenuBarTheme="p-1 absolute bottom-0 left-0 h-20 w-full",localStorage.dataDocButtonTheme="flex justify-center items-center px-2 h-6 text-sm text-gray-600 (hover)text-gray-800 (active)bg-gray-300 border border-gray-300 (hover)border-gray-500 rounded transition duration-300 ease-in-out",localStorage.dataButtonTheme="opacity-50 text-gray-200 transform (hover)scale-125 w-5 h-5 transition duration-300 ease-in-out transform (group-hover)scale-125",localStorage.dataMainButtonTheme="(group) flex justify-center items-center px-2 py-1 text-black-900 (group-hover)text-black-900 bg-gray-100 (active)bg-gray-300 border border-gray-300 (hover)border-gray-500 (focus)border-gray-500 filter saturate-4 rounded transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none",localStorage.dataMainButtonIconTheme="invert-0 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 w-5 h-5 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-110",localStorage.dataBgTheme="relative flex flex-row pattern ripple-lg text-white bg-gray-300",localStorage.dataPreloaderTheme="z-50 absolute top-16 right-6 w-5 h-5 preloader light animation fade-in duration-300",window.location.reload())}}},x=y,b=(a("3d00"),Object(f["a"])(x,s,i,!1,null,"b254443a",null)),v=b.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("y",{staticClass:"relative h-screen flex justify-center items-center pattern ripple-lg text-gray-100 bg-gray-300"},[a("y",{staticClass:"z-50 max-w-3xl p-24 flex flex-col justify-center items-center"},[a("img",{staticClass:"opacity-75 h-16 w-auto object-fit object-center overflow-hidden animation roll-in-left duration-800",attrs:{src:"assets/image/logo_full.svg",alt:"Yogurt CSS"}}),a("y",{staticClass:"my-4 text-gray-600 text-md font-mono animation roll-in-left duration-800"},[e._v("\n      v0.1.4-beta\n    ")]),a("y",{staticClass:"pb-6 w-full text-gray-600 text-center"},[a("y",{staticClass:"pb-2 text-lg text-gray-700 font-bold"},[e._v("\n        Shortcut Keys\n      ")]),a("y",{staticClass:"pb-2 flex justify-between items-center"},[a("y",{staticClass:"text-xs font-semibold"},[a("span",{staticClass:"p-1 border border-gray-500 rounded"},[e._v("Ctrl")]),e._v(" +\n          "),a("span",{staticClass:"p-1 border border-gray-500 rounded"},[e._v("Alt")]),e._v(" +\n          "),a("span",{staticClass:"p-1 border border-gray-500 rounded"},[e._v("M")])]),a("y",{staticClass:"mx-4 text-sm"},[e._v("\n          Switch between Editor or Preview mode\n        ")])],1),a("y",{staticClass:"pb-2 flex justify-between items-center"},[a("y",{staticClass:"text-xs font-semibold"},[a("span",{staticClass:"p-1 border border-gray-500 rounded"},[e._v("Ctrl")]),e._v(" +\n          "),a("span",{staticClass:"p-1 border border-gray-500 rounded"},[e._v("Alt")]),e._v(" +\n          "),a("span",{staticClass:"p-1 border border-gray-500 rounded"},[e._v("/")])]),a("y",{staticClass:"mx-4 text-sm"},[e._v("\n          Execute your codes\n        ")])],1),a("y",{staticClass:"flex justify-between items-center"},[a("y",{staticClass:"text-xs font-semibold"},[a("span",{staticClass:"p-1 border border-gray-500 rounded"},[e._v("Ctrl")]),e._v(" +\n          "),a("span",{staticClass:"p-1 border border-gray-500 rounded"},[e._v("Alt")]),e._v(" +\n          "),a("span",{staticClass:"p-1 border border-gray-500 rounded"},[e._v("D")])]),a("y",{staticClass:"mx-4 text-sm"},[e._v("\n          Reset stored data in the app\n        ")])],1)],1),a("y",{staticClass:"pb-6 text-gray-700 text-center animation roll-in-left duration-800"},[a("y",{staticClass:"pb-2 text-lg font-bold "},[e._v("\n        Official Documentation\n      ")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/getting-started/",target:"_self",rel:"noopener"}},[e._v("\n        Getting Started\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/installation/",target:"_self",rel:"noopener"}},[e._v("\n        Installation\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/utility-map/",target:"_self",rel:"noopener"}},[e._v("\n        Utility Map\n      ")])],1),a("y",{staticClass:"pb-6 text-gray-700 text-center animation roll-in-left duration-800"},[a("y",{staticClass:"pb-2 text-lg font-bold"},[e._v("\n        Features\n      ")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/responsive/",target:"_self",rel:"noopener"}},[e._v("\n        Breakpoints\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/getting-started-themes/",target:"_self",rel:"noopener"}},[e._v("\n        Dark/Light Mode\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/pseudo-class-variants/",target:"_self",rel:"noopener"}},[e._v("\n        Variants\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/getting-started-palette/",target:"_self",rel:"noopener"}},[e._v("\n        Color Palette\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/getting-started-gradient/",target:"_self",rel:"noopener"}},[e._v("\n        Gradient Presets\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/background-gradient/",target:"_self",rel:"noopener"}},[e._v("\n        Custom Gradient\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/getting-started-animations/",target:"_self",rel:"noopener"}},[e._v("\n        Animations\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/getting-started-filters/",target:"_self",rel:"noopener"}},[e._v("\n        Filters\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/getting-started-patterns/",target:"_self",rel:"noopener"}},[e._v("\n        Patterns\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/getting-started-fluids/",target:"_self",rel:"noopener"}},[e._v("\n        Fluids\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/getting-started-orientation",target:"_self",rel:"noopener"}},[e._v("\n        Orientation\n      ")])],1),a("y",{staticClass:"text-gray-700 text-center animation roll-in-left duration-800"},[a("y",{staticClass:"pb-2 text-lg font-bold"},[e._v("\n        What's Next?\n      ")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/utility/",target:"_self",rel:"noopener"}},[e._v("\n        Utility\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/responsive/",target:"_self",rel:"noopener"}},[e._v("\n        Responsive\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/pseudo-class-variants/",target:"_self",rel:"noopener"}},[e._v("\n        Pseudo-Class Variants\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/pseudo-class-variants/",target:"_self",rel:"noopener"}},[e._v("\n        Pseudo-Class Variants\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/extract-utility-classes/",target:"_self",rel:"noopener"}},[e._v("\n        Extract Utility Classes\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/import-framework/",target:"_self",rel:"noopener"}},[e._v("\n        Import Framework\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/create-empty-project/",target:"_self",rel:"noopener"}},[e._v("\n        Create Empty Project\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/refactoring-ui/",target:"_self",rel:"noopener"}},[e._v("\n        Refactoring UI\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/file-size-control/",target:"_self",rel:"noopener"}},[e._v("\n        File Size Control\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/plugin-api/",target:"_self",rel:"noopener"}},[e._v("\n        Plugin API\n      ")]),a("span",{staticClass:"mx-2 text-gray-400"},[e._v("|")]),a("a",{staticClass:"text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline",attrs:{href:"https://yogurtcss.netlify.app/debug/",target:"_self",rel:"noopener"}},[e._v("\n        Debug\n      ")])],1),a("y",{staticClass:"pt-10 text-gray-500 text-sm font-mono text-center"},[e._v("\n      Enjoy then!\n    ")]),a("y",{staticClass:"absolute right-4 flex flex-gap-3 flex-col justify-center items-center animation fade-in duration-2000"},[a("a",{attrs:{href:"https://discord.gg/A62YjNR",target:"_blank",rel:"noopener",title:"Discord"}},[a("img",{staticClass:"opacity-25 (hover)opacity-100 h-6 w-auto object-fit object-center overflow-hidden transition duration-200 ease-in-out",attrs:{src:"assets/image/discord.svg"}})]),a("a",{attrs:{href:"https://twitter.com/yogurtcss",target:"_blank",rel:"noopener",title:"Twitter"}},[a("img",{staticClass:"opacity-25 (hover)opacity-100 h-6 w-auto object-fit object-center overflow-hidden transition duration-200 ease-in-out",attrs:{src:"assets/image/twitter.svg"}})]),a("a",{attrs:{href:"https://github.com/yogurt-foundation",target:"_blank",rel:"noopener",title:"Github"}},[a("img",{staticClass:"opacity-25 (hover)opacity-100 h-6 w-auto object-fit object-center overflow-hidden transition duration-200 ease-in-out",attrs:{src:"assets/image/github.svg"}})])])],1)],1)},w=[],k={},S=Object(f["a"])(k,C,w,!1,null,null,null),_=S.exports;n["a"].use(o["a"]);var T=new o["a"]({routes:[{path:"/",name:"index",component:v},{path:"/about",name:"about",component:_}]});a("1028");n["a"].config.productionTip=!1,new n["a"]({router:T,render:function(e){return e(r["default"])}}).$mount("#app")},"64a9":function(e,t,a){},af30:function(e,t,a){"use strict";var n=a("4aa8"),r=a.n(n);r.a},b436:function(e,t,a){}});