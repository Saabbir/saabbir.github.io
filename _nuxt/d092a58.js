(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{330:function(t,e,o){"use strict";o(46),o(12),o(29);e.a=function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var o=Array.prototype.slice.call(arguments);return o.unshift(e),t.push(o),t}},t.methods.forEach((function(e){t[e]=t.factory(e)})),t.load=function(t){var e=3e5,o=Math.ceil(new Date/e)*e,r=document.createElement("script");r.type="text/javascript",r.async=!0,r.crossorigin="anonymous",r.src="https://js.driftt.com/include/"+o+"/"+t+".js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)}}drift.SNIPPET_VERSION="0.3.1",drift.load("am3ztba424by")}},331:function(t,e,o){"use strict";e.a=function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))}},333:function(t,e,o){t.exports=o.p+"img/4ff3757.jpg"},334:function(t,e,o){t.exports=o.p+"img/6b2d2d8.jpg"},335:function(t,e,o){t.exports=o.p+"img/5b2b81d.jpg"},336:function(t,e,o){t.exports=o.p+"img/1ffa022.jpg"},337:function(t,e,o){t.exports=o.p+"img/c8c9fe1.jpg"},338:function(t,e,o){t.exports=o.p+"img/9d12854.jpg"},339:function(t,e,o){t.exports=o.p+"img/5d4d19e.jpg"},375:function(t,e,o){t.exports=o.p+"img/06f6ddf.webp"},376:function(t,e,o){t.exports=o.p+"img/4a494c8.webp"},377:function(t,e,o){t.exports=o.p+"img/856462b.webp"},378:function(t,e,o){t.exports=o.p+"img/96ad51d.webp"},379:function(t,e,o){t.exports=o.p+"img/83a729a.webp"},380:function(t,e,o){t.exports=o.p+"img/f4a44f4.webp"},381:function(t,e,o){t.exports=o.p+"img/5889596.webp"},386:function(t,e,o){var content=o(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("3a154589",content,!0,{sourceMap:!1})},402:function(t,e,o){var map={"./aperfectspace-cover-sm.jpg":375,"./builder-cover-sm.jpg":376,"./cesppa-prototype-cover-sm.jpg":377,"./cesppa-redesign-v2-cover-sm.jpg":378,"./jump-work-cover-sm.jpg":379,"./personx-cover-sm.jpg":380,"./pragmaticworks-redesign-cover-sm.jpg":381};function r(t){var e=n(t);return o(e)}function n(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=402},403:function(t,e,o){var map={"./aperfectspace-cover-sm.jpg":333,"./builder-cover-sm.jpg":334,"./cesppa-prototype-cover-sm.jpg":335,"./cesppa-redesign-v2-cover-sm.jpg":336,"./jump-work-cover-sm.jpg":337,"./personx-cover-sm.jpg":338,"./pragmaticworks-redesign-cover-sm.jpg":339};function r(t){var e=n(t);return o(e)}function n(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=403},404:function(t,e,o){"use strict";o(386)},405:function(t,e,o){var r=o(73)(!1);r.push([t.i,".section-portfolio[data-v-245be226]{background-color:#f6f5f7}.l-works[data-v-245be226]{display:grid;grid-gap:2rem;gap:2rem;grid-template-columns:repeat(auto-fit,minmax(15.625rem,1fr))}@media(min-width:1024px){.l-works[data-v-245be226]{grid-template-columns:repeat(auto-fit,minmax(calc(33.33333% - 32px),1fr))}}.c-portfolio-card[data-v-245be226]{background-color:#fff;position:relative;box-shadow:0 0 0 .0625rem #eee;transition:.3s}.c-portfolio-card[data-v-245be226]:hover{transform:scale(1.05);box-shadow:0 0 2rem .0625rem rgba(0,0,0,.1)}.c-portfolio-card__link[data-v-245be226]{position:absolute;top:0;right:0;bottom:0;left:0}.c-portfolio-card__figcaption[data-v-245be226]{padding:2rem;color:#abacbf;font-size:1rem}.c-portfolio-card__title[data-v-245be226]{margin-bottom:.625rem}",""]),t.exports=r},437:function(t,e,o){"use strict";o.r(e);var r=o(9),n=(o(47),o(330)),c=o(331),f={name:"WorkIndex",head:function(){return{title:"Work - Saabbir Hossain"}},mounted:function(){window.onload=n.a,Object(c.a)()},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,o=t.$content,e.next=3,o("work").fetch();case 3:return r=e.sent,e.abrupt("return",{works:r});case 5:case"end":return e.stop()}}),e)})))()}},d=(o(404),o(28)),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"l-main"},[e("div",{staticClass:"section-portfolio u-py-32"},[e("div",{staticClass:"l-wrap"},[t._m(0),t._v(" "),e("div",{staticClass:"l-works"},t._l(t.works,(function(r){return e("div",{key:r.slug,staticClass:"c-portfolio-card"},[e("nuxt-link",{staticClass:"c-portfolio-card__link",attrs:{to:{name:"work-slug",params:{slug:r.slug}}}}),t._v(" "),e("figure",{staticClass:"c-portfolio-card__figure"},[e("picture",[e("source",{attrs:{srcset:o(402)("./".concat(r.coverImg,"-sm.jpg")),type:"image/webp"}}),t._v(" "),e("img",{attrs:{src:o(403)("./".concat(r.coverImg,"-sm.jpg")),alt:"".concat(r.title,"-cover"),width:"414",height:"311"}})]),t._v(" "),e("figcaption",{staticClass:"c-portfolio-card__figcaption"},[e("h5",{staticClass:"c-portfolio-card__title"},[t._v(t._s(r.title))]),t._v(" "),e("p",[t._v(t._s(r.highlight))])])])],1)})),0)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-mb-32"},[e("h1",{staticClass:"t-display-1"},[t._v("Featured works")]),t._v(" "),e("p",{staticClass:"u-mt-16 t-18"},[t._v("Selected projects.")])])}],!1,null,"245be226",null);e.default=component.exports}}]);