(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{340:function(t,e,n){"use strict";n(50),n(15),n(33);e.a=function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach((function(e){t[e]=t.factory(e)})),t.load=function(t){var e=3e5,n=Math.ceil(new Date/e)*e,r=document.createElement("script");r.type="text/javascript",r.async=!0,r.crossorigin="anonymous",r.src="https://js.driftt.com/include/"+n+"/"+t+".js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)}}drift.SNIPPET_VERSION="0.3.1",drift.load("am3ztba424by")}},341:function(t,e,n){"use strict";e.a=function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))}},407:function(t,e,n){var content=n(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("6cf7adda",content,!0,{sourceMap:!1})},447:function(t,e,n){"use strict";n(407)},448:function(t,e,n){var r=n(77)((function(i){return i[1]}));r.push([t.i,".no-article-matched[data-v-74064b9b]{margin:0;text-align:center}",""]),r.locals={},t.exports=r},499:function(t,e,n){"use strict";n.r(e);n(34),n(52);var r=n(62),c=n(8),o=(n(51),n(15),n(27),n(415),n(28),n(157),n(422),n(423),n(424),n(428),n(429),n(430),n(431),n(433),n(435),n(437),n(439),n(440),n(441),n(442),n(443),n(445),n(33),n(30),n(340)),l=n(341),d={name:"BlogIndex",head:function(){return{title:"Blog - Saabbir Hossain"}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles").sortBy("createdAt","desc").fetch();case 3:return c=e.sent,o=[],c.forEach((function(article){o.push.apply(o,Object(r.a)(article.tags))})),l=Object(r.a)(new Set(o)),e.abrupt("return",{articles:c,uniqueArticleTags:l});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{searchQuery:""}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},mounted:function(){window.onload=o.a,Object(l.a)()},watch:{searchQuery:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=5;break}return n.next=3,e.$content("articles").sortBy("createdAt","desc").fetch();case 3:return e.articles=n.sent,n.abrupt("return");case 5:return n.next=7,e.$content("articles").limit(6).search(t).sortBy("createdAt","desc").fetch();case 7:e.articles=n.sent;case 8:case"end":return n.stop()}}),n)})))()}}},f=(n(447),n(32)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"l-main"},[e("div",{staticClass:"c-banner"},[e("div",{staticClass:"l-wrap l-wrap--sm"},[e("h1",{staticClass:"c-page-title u-text-center u-text-uppercase"},[t._v("My writings")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"c-search-input",attrs:{type:"text",placeholder:"Search articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.uniqueArticleTags.length?e("div",{staticClass:"c-tags u-mt-32"},t._l(t.uniqueArticleTags,(function(n,r){return e("nuxt-link",{key:r,staticClass:"c-tag",attrs:{to:"/blog/tag/".concat(n)}},[t._v("\n          "+t._s(n)+"\n        ")])})),1):t._e()])]),t._v(" "),e("div",{staticClass:"l-wrap l-wrap--sm"},[e("div",{staticClass:"u-py-32"},[t.articles.length?e("ul",{staticClass:"c-articles-list"},t._l(t.articles,(function(article){return e("li",{key:article.slug,staticClass:"c-blog-post"},[e("div",[e("NuxtLink",{staticClass:"c-blog-post__link",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}}),t._v(" "),e("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[e("h2",{staticClass:"c-blog-post__title"},[t._v(t._s(article.title))])]),t._v(" "),e("p",{staticClass:"c-blog-post__text"},[t._v(t._s(article.description))])],1),t._v(" "),e("div",{staticClass:"c-blog-post__date"},[t._v("\n            "+t._s(t.formatDate(article.createdAt))+"\n          ")])])})),0):e("p",{staticClass:"no-article-matched"},[t._v("\n        No articles matched to your search query!\n      ")])])])])}),[],!1,null,"74064b9b",null);e.default=component.exports}}]);