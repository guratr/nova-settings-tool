!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=function(t,e,n,s,i,r){var o,a=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,a=t.default);var u,c="function"==typeof a?a.options:a;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):s&&(u=s),u){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(t,e){return u.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:o,exports:a,options:c}}},function(t,e,n){var s=n(0)(null,n(14),!1,null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(15),n(16),!1,null,null,null);t.exports=s.exports},function(t,e,n){n(4),t.exports=n(22)},function(t,e,n){Nova.booting(function(t,e,s){e.addRoutes([{name:"settings-tool",path:"/settings",component:n(5)}])})},function(t,e,n){var s=n(0)(n(6),n(21),!1,null,null,null);t.exports=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(7),i=n.n(s),r=n(18),o=n.n(r);e.default={components:{ToggleSetting:i.a,TextSetting:o.a},data:function(){return{loading:!0,saving:"",settings:{},settingConfig:[]}},mounted:function(){var t=this;Nova.request().get("/nova-vendor/settings-tool").then(function(e){t.settingConfig=e.data.settingConfig,t.settings=e.data.settings,setTimeout(function(){t.loading=!1},200)})},methods:{handleToggle:function(t){this.settings[t]=!this.settings[t]},handleInput:function(t){this.settings[t.key]=t.value},saveAndReload:function(t){var e=this;this.saving=t;var n={};this.settingConfig.filter(function(e){return e.name==t})[0].settings.map(function(t){return t.key}).forEach(function(t){n[t]=e.settings[t]}),Nova.request().post("/nova-vendor/settings-tool",{settings:n}).then(function(t){202==t.status&&(e.saving="",e.$toasted.show("Settings saved!",{type:"success"}))}).catch(function(t){console.log(t),e.saving=""})}}}},function(t,e,n){var s=n(0)(n(13),n(17),!1,function(t){n(8)},"data-v-2d3b3dbb",null);t.exports=s.exports},function(t,e,n){var s=n(9);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(11)("0dec9b64",s,!0,{})},function(t,e,n){(t.exports=n(10)(!1)).push([t.i,'.toggle[data-v-2d3b3dbb]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.slider[data-v-2d3b3dbb]{position:relative;margin-right:1rem;width:4rem;height:2rem;background:var(--50);-webkit-transition:.2s ease-out;transition:.2s ease-out;border-radius:1rem;cursor:pointer;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.15);box-shadow:inset 0 1px 2px rgba(0,0,0,.15)}.slider[data-v-2d3b3dbb]:before{position:absolute;content:"";height:1.5rem;width:1.5rem;left:.25rem;top:.25rem;background:#fff;-webkit-transition:.2s;transition:.2s;border-radius:50%;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.15);box-shadow:0 1px 3px rgba(0,0,0,.15)}.toggle.on .slider[data-v-2d3b3dbb]{background:var(--info)}.toggle.on .slider[data-v-2d3b3dbb]:before{-webkit-transform:translateX(2rem);transform:translateX(2rem)}',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",s=t[3];if(!s)return n;if(e&&"function"==typeof btoa){var i=(o=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),r=s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"});return[n].concat(r).concat([i]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(s[r]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&s[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=n(12),r={},o=s&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,u=!1,c=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(t){for(var e=0;e<t.length;e++){var n=t[e],s=r[n.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](n.parts[i]);for(;i<n.parts.length;i++)s.parts.push(h(n.parts[i]));s.parts.length>n.parts.length&&(s.parts.length=n.parts.length)}else{var o=[];for(i=0;i<n.parts.length;i++)o.push(h(n.parts[i]));r[n.id]={id:n.id,refs:1,parts:o}}}}function v(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function h(t){var e,n,s=document.querySelector("style["+f+'~="'+t.id+'"]');if(s){if(u)return c;s.parentNode.removeChild(s)}if(p){var i=l++;s=a||(a=v()),e=x.bind(null,s,i,!1),n=x.bind(null,s,i,!0)}else s=v(),e=function(t,e){var n=e.css,s=e.media,i=e.sourceMap;s&&t.setAttribute("media",s);d.ssrId&&t.setAttribute(f,e.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,s),n=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else n()}}t.exports=function(t,e,n,s){u=n,d=s||{};var o=i(t,e);return g(o),function(e){for(var n=[],s=0;s<o.length;s++){var a=o[s];(l=r[a.id]).refs--,n.push(l)}e?g(o=i(t,e)):o=[];for(s=0;s<n.length;s++){var l;if(0===(l=n[s]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete r[l.id]}}}};var b,m=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function x(t,e,n,s){var i=n?"":s.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var r=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}},function(t,e){t.exports=function(t,e){for(var n=[],s={},i=0;i<e.length;i++){var r=e[i],o=r[0],a={id:t+":"+i,css:r[1],media:r[2],sourceMap:r[3]};s[o]?s[o].parts.push(a):n.push(s[o]={id:o,parts:[a]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=n.n(s),r=n(2),o=n.n(r);e.default={props:{name:String,setting:Object,description:String,link:Object},components:{SettingLabel:i.a,SettingInfo:o.a},methods:{toggle:function(t){this.$emit("toggle",this.setting.key)}}}},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-1/4 py-6 px-8"},[e("p",{staticClass:"inline-block text-black text-lg font-bold leading-tight py-2"},[this._t("default")],2)])},staticRenderFns:[]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{text:String,url:String}}},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center"},[e("p",{staticClass:"text-80 leading-tight"},[this._t("default"),this._v(" "),e("a",{staticClass:"no-underline dim text-primary",attrs:{href:this.url,target:"_blank"}},[this._v(this._s(this.text))])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex border-b border-40"},[n("setting-label",[t._v(t._s(t.name))]),t._v(" "),n("div",{staticClass:"w-1/6 py-6 px-8"},[n("div",{staticClass:"toggle py-1",class:{on:t.setting.value},on:{click:t.toggle}},[n("span",{staticClass:"slider"})])]),t._v(" "),n("setting-info",{staticClass:"py-6 px-8 w-1/2",attrs:{text:t.link.text,url:t.link.url}},[t._v(t._s(t.description))])],1)},staticRenderFns:[]}},function(t,e,n){var s=n(0)(n(19),n(20),!1,null,null,null);t.exports=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=n.n(s),r=n(2),o=n.n(r);e.default={props:{name:String,setting:Object,description:String,link:Object},components:{SettingLabel:i.a,SettingInfo:o.a},methods:{input:function(t){this.$emit("input",{key:this.setting.key,value:t.target.value})}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex border-b border-40"},[n("setting-label",[t._v(t._s(t.name))]),t._v(" "),n("div",{staticClass:"w-1/2 py-6 px-8"},[n("input",{staticClass:"w-full form-control form-input form-input-bordered",domProps:{value:t.setting.value},on:{input:t.input}}),t._v(" "),n("setting-info",{staticClass:"pt-3",attrs:{text:t.link.text,url:t.link.url}},[t._v(t._s(t.description))])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[t.loading?n("div",{staticClass:"rounded-lg flex items-center justify-center absolute pin z-50 bg-40 -m-4"},[n("loader",{staticClass:"text-60"})],1):t._e(),t._v(" "),t._l(t.settingConfig,function(e){return n("div",[n("heading",{staticClass:"mb-6"},[t._v(t._s(e.name))]),t._v(" "),n("card",{staticClass:"relative overflow-hidden mb-8"},[t._l(e.settings,function(e){return n("div",["toggle"==e.type?n("toggle-setting",{attrs:{name:e.name,description:e.description,link:e.link,setting:{key:e.key,value:t.settings[e.key]}},on:{toggle:t.handleToggle}}):t._e(),t._v(" "),"text"==e.type?n("text-setting",{attrs:{name:e.name,description:e.description,link:e.link,setting:{key:e.key,value:t.settings[e.key]}},on:{input:t.handleInput}}):t._e()],1)}),t._v(" "),n("div",{staticClass:"bg-30 flex px-8 py-4"},[n("progress-button",{staticClass:"ml-auto",attrs:{processing:t.saving==e.name},nativeOn:{click:function(n){t.saveAndReload(e.name)}}},[t._v("\n                    Save\n                ")])],1)],2)],1)})],2)},staticRenderFns:[]}},function(t,e){}]);