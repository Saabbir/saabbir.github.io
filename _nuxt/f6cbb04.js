(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{278:function(t,e,n){"use strict";n(40),n(26);e.a=function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach((function(e){t[e]=t.factory(e)})),t.load=function(t){var e=3e5,n=Math.ceil(new Date/e)*e,r=document.createElement("script");r.type="text/javascript",r.async=!0,r.crossorigin="anonymous",r.src="https://js.driftt.com/include/"+n+"/"+t+".js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)}}drift.SNIPPET_VERSION="0.3.1",drift.load("am3ztba424by")}},279:function(t,e,n){"use strict";e.a=function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))}},330:function(t,e,n){var content=n(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("59047d92",content,!0,{sourceMap:!1})},336:function(t,e,n){"use strict";n(330)},337:function(t,e,n){var r=n(48)(!1);r.push([t.i,".no-article-matched[data-v-62a14db1]{margin:0;text-align:center}",""]),t.exports=r},377:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(50),n(130),n(41),n(278)),o=n(279),l={name:"BlogIndex",head:function(){return{title:"Blog - Saabbir Hossain",meta:[{hid:"description",name:"description",content:"Saabbir Hossain is a professional front-end developer based in Barisal, Bangladesh."}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles").sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{searchQuery:""}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},mounted:function(){window.onload=c.a,Object(o.a)()},watch:{searchQuery:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=5;break}return n.next=3,e.$content("articles").sortBy("createdAt","desc").fetch();case 3:return e.articles=n.sent,n.abrupt("return");case 5:return n.next=7,e.$content("articles").limit(6).search(t).sortBy("createdAt","desc").fetch();case 7:e.articles=n.sent;case 8:case"end":return n.stop()}}),n)})))()}}},d=(n(336),n(25)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"l-main"},[n("div",{staticClass:"c-banner"},[n("div",{staticClass:"l-container l-container--sm"},[n("h1",{staticClass:"c-page-title u-text-center u-text-uppercase"},[t._v("My writings")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"c-search-input",attrs:{type:"text",placeholder:"Search articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"l-container l-container--sm"},[n("div",{staticClass:"u-py-32"},[t.articles.length?n("ul",{staticClass:"c-articles-list"},t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"c-blog-post"},[n("div",[n("NuxtLink",{staticClass:"c-blog-post__link",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}}),t._v(" "),n("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("h2",{staticClass:"c-blog-post__title"},[t._v(t._s(article.title))])]),t._v(" "),n("p",{staticClass:"c-blog-post__text"},[t._v(t._s(article.description))])],1),t._v(" "),n("div",{staticClass:"c-blog-post__date"},[t._v("\n            "+t._s(t.formatDate(article.createdAt))+"\n          ")])])})),0):n("p",{staticClass:"no-article-matched"},[t._v("No articles matched to your search query!")])])])])}),[],!1,null,"62a14db1",null);e.default=component.exports}}]);