(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{330:function(t,e,n){"use strict";n(46),n(12),n(29);e.a=function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach((function(e){t[e]=t.factory(e)})),t.load=function(t){var e=3e5,n=Math.ceil(new Date/e)*e,r=document.createElement("script");r.type="text/javascript",r.async=!0,r.crossorigin="anonymous",r.src="https://js.driftt.com/include/"+n+"/"+t+".js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)}}drift.SNIPPET_VERSION="0.3.1",drift.load("am3ztba424by")}},331:function(t,e,n){"use strict";e.a=function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))}},385:function(t,e,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("418e76fc",content,!0,{sourceMap:!1})},400:function(t,e,n){"use strict";n(385)},401:function(t,e,n){var r=n(73)(!1);r.push([t.i,".no-article-matched[data-v-76b64223]{margin:0;text-align:center}",""]),t.exports=r},436:function(t,e,n){"use strict";n.r(e);n(30),n(48);var r=n(9),c=(n(31),n(152),n(47),n(330)),o=n(331),l={name:"SnippetsIndex",head:function(){return{title:"Snippets - Saabbir Hossain"}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("snippets").sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{snippets:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{searchQuery:""}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},mounted:function(){window.onload=c.a,Object(o.a)()},watch:{searchQuery:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=5;break}return n.next=3,e.$content("snippets").sortBy("createdAt","desc").fetch();case 3:return e.snippets=n.sent,n.abrupt("return");case 5:return n.next=7,e.$content("snippets").limit(6).search(t).sortBy("createdAt","desc").fetch();case 7:e.snippets=n.sent;case 8:case"end":return n.stop()}}),n)})))()}}},d=l,f=(n(400),n(28)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"l-main"},[e("div",{staticClass:"c-banner"},[e("div",{staticClass:"l-wrap l-wrap--sm"},[e("h1",{staticClass:"c-page-title u-text-center u-text-uppercase"},[t._v("My snippets")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"c-search-input",attrs:{type:"text",placeholder:"Search snippets"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"l-wrap l-wrap--sm"},[e("div",{staticClass:"u-py-32"},[t.snippets.length?e("ul",{staticClass:"c-articles-list"},t._l(t.snippets,(function(n){return e("li",{key:n.slug,staticClass:"c-blog-post"},[e("div",[e("NuxtLink",{staticClass:"c-blog-post__link",attrs:{to:{name:"snippets-slug",params:{slug:n.slug}}}}),t._v(" "),e("NuxtLink",{attrs:{to:{name:"snippets-slug",params:{slug:n.slug}}}},[e("h2",{staticClass:"c-blog-post__title"},[t._v(t._s(n.title))])]),t._v(" "),e("p",{staticClass:"c-blog-post__text"},[t._v(t._s(n.description))])],1),t._v(" "),e("div",{staticClass:"c-blog-post__date"},[t._v("\n            "+t._s(t.formatDate(n.createdAt))+"\n          ")])])})),0):e("p",{staticClass:"no-article-matched"},[t._v("No snippets matched to your search query!")])])])])}),[],!1,null,"76b64223",null);e.default=component.exports}}]);