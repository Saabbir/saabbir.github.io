(window.webpackJsonp=window.webpackJsonp||[]).push([[21,8],{340:function(t,e,r){"use strict";r(50),r(15),r(33);e.a=function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(e),t.push(r),t}},t.methods.forEach((function(e){t[e]=t.factory(e)})),t.load=function(t){var e=3e5,r=Math.ceil(new Date/e)*e,n=document.createElement("script");n.type="text/javascript",n.async=!0,n.crossorigin="anonymous",n.src="https://js.driftt.com/include/"+r+"/"+t+".js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}drift.SNIPPET_VERSION="0.3.1",drift.load("am3ztba424by")}},341:function(t,e,r){"use strict";e.a=function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))}},359:function(t,e,r){t.exports=r.p+"img/bc97eaa.jpg"},360:function(t,e,r){t.exports=r.p+"img/0f86914.jpg"},361:function(t,e,r){t.exports=r.p+"img/747801b.jpg"},362:function(t,e,r){t.exports=r.p+"img/9e486a1.jpg"},363:function(t,e,r){t.exports=r.p+"img/8b43852.jpg"},364:function(t,e,r){t.exports=r.p+"img/428b6f3.jpg"},365:function(t,e,r){t.exports=r.p+"img/afbf6ee.jpg"},366:function(t,e,r){t.exports=r.p+"img/fdf9525.jpg"},400:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},routeName:{type:String,default:function(){return"blog-slug"}},type:{type:String,default:function(){return"Post"}}}},o=r(32),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-pagination"},[t.prev?e("div",{staticClass:"c-pagination__prev"},[e("div",{staticClass:"c-pagination__link-label"},[t._v("Previous "+t._s(t.type))]),t._v(" "),e("NuxtLink",{staticClass:"c-button c-button--lg",attrs:{to:{name:t.routeName,params:{slug:t.prev.slug}}}},[t._v("\n      « "+t._s(t.prev.title)+"\n    ")])],1):t._e(),t._v(" "),t.next?e("div",{staticClass:"c-pagination__next"},[e("div",{staticClass:"c-pagination__link-label"},[t._v("Next "+t._s(t.type))]),t._v(" "),e("NuxtLink",{staticClass:"c-button c-button--lg",attrs:{to:{name:t.routeName,params:{slug:t.next.slug}}}},[t._v("\n      "+t._s(t.next.title)+" »\n    ")])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},472:function(t,e,r){var map={"./aperfectspace/cover.jpg":473,"./bat-uk-homepage-product-carousel/cover.jpg":474,"./builder/cover.jpg":475,"./cesppa-prototype/cover.jpg":476,"./cesppa-redesign-v2/cover.jpg":477,"./jump-work/cover.jpg":478,"./personx/cover.jpg":479,"./pragmaticworks-redesign/cover.jpg":480};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=472},473:function(t,e,r){t.exports=r.p+"img/df06b30.webp"},474:function(t,e,r){t.exports=r.p+"img/d8aead8.webp"},475:function(t,e,r){t.exports=r.p+"img/d480c35.webp"},476:function(t,e,r){t.exports=r.p+"img/a2639bf.webp"},477:function(t,e,r){t.exports=r.p+"img/edb2524.webp"},478:function(t,e,r){t.exports=r.p+"img/bf83870.webp"},479:function(t,e,r){t.exports=r.p+"img/dcc2445.webp"},480:function(t,e,r){t.exports=r.p+"img/bb60466.webp"},481:function(t,e,r){var map={"./aperfectspace/cover.jpg":359,"./bat-uk-homepage-product-carousel/cover.jpg":360,"./builder/cover.jpg":361,"./cesppa-prototype/cover.jpg":362,"./cesppa-redesign-v2/cover.jpg":363,"./jump-work/cover.jpg":364,"./personx/cover.jpg":365,"./pragmaticworks-redesign/cover.jpg":366};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=481},508:function(t,e,r){"use strict";r.r(e);r(34),r(52);var n=r(21),o=r(8),c=(r(51),r(340)),l=r(341),d={name:"SingleWork",head:function(){return{title:this.work.title+" - Case Study"}},mounted:function(){window.onload=c.a,Object(l.a)()},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,d,v,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,e.next=3,r("work",o.slug).fetch();case 3:return c=e.sent,e.next=6,r("work").only(["title","slug"]).sortBy("createdAt","asc").surround(o.slug).fetch();case 6:return l=e.sent,d=Object(n.a)(l,2),v=d[0],f=d[1],e.abrupt("return",{work:c,prev:v,next:f});case 11:case"end":return e.stop()}}),e)})))()}},v=r(32),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"l-main l-main--work-slug"},[e("div",{staticClass:"u-py-32"},[e("div",{staticClass:"l-wrap"},[e("div",{staticClass:"c-portfolio"},[e("div",{staticClass:"c-portfolio__header"},[e("h1",{staticClass:"t-display-1"},[t._v(t._s(t.work.title))]),t._v(" "),t.work.highlight?e("h3",{staticClass:"u-mt-16 u-text-gray"},[t._v("\n            "+t._s(t.work.highlight)+"\n          ")]):t._e(),t._v(" "),e("div",{staticClass:"c-copy"},[t.work.description?e("p",{staticClass:"u-mt-32 t-18"},[t._v("\n              "+t._s(t.work.description)+"\n            ")]):t._e()])]),t._v(" "),e("div",{staticClass:"c-portfolio__stats"},[t.work.type?e("dl",[e("dt",[t._v("Type")]),t._v(" "),e("dd",[t._v(t._s(t.work.type))])]):t._e(),t._v(" "),t.work.tools?e("dl",[e("dt",[t._v("Tools used:")]),t._v(" "),t._l(t.work.tools,(function(r){return e("dd",{key:r},[t._v(t._s(r))])}))],2):t._e(),t._v(" "),t.work.url?e("dl",[e("dt",[t._v("Live")]),t._v(" "),e("dd",[e("a",{staticClass:"c-button",attrs:{href:t.work.url,target:"_blank"}},[t._v("View Live")])])]):t._e()])])]),t._v(" "),t.work.imgFolderName?e("div",{staticClass:"l-wrap l-wrap--1200 l-wrap--1600"},[e("div",{staticClass:"c-portfolio__cover-image"},[e("picture",[e("source",{attrs:{srcset:r(472)("./".concat(t.work.imgFolderName,"/cover.jpg")),type:"image/webp"}}),t._v(" "),e("img",{attrs:{src:r(481)("./".concat(t.work.imgFolderName,"/cover.jpg")),alt:"".concat(t.work.title,"-cover"),width:"1600",height:"1200"}})])])]):t._e(),t._v(" "),e("div",{staticClass:"nuxt-content-wrapper"},[e("nuxt-content",{attrs:{document:t.work}})],1),t._v(" "),t.work.pagination?e("div",{staticClass:"u-my-32"},[e("hr")]):t._e(),t._v(" "),t.work.pagination?e("div",{},[e("div",{staticClass:"l-wrap"},[e("Pagination",{attrs:{routeName:"work-slug",prev:t.prev,next:t.next,type:"Work"}})],1)]):t._e()])])}),[],!1,null,"9438df62",null);e.default=component.exports;installComponents(component,{Pagination:r(400).default})}}]);