(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6],{286:function(t,e,n){t.exports=n.p+"img/0811639.png"},288:function(t,e,n){t.exports=n.p+"img/fff6afa.webp"},289:function(t,e,n){t.exports=n.p+"img/48e4bd3.gif"},290:function(t,e,n){t.exports=n.p+"img/a4ab983.jpg"},291:function(t,e,n){t.exports=n.p+"img/7ce95c4.png"},321:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},routeName:{type:String,default:function(){return"blog-slug"}},type:{type:String,default:function(){return"Post"}}}},c=n(25),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-pagination"},[t.prev?n("div",{staticClass:"c-pagination__prev"},[n("div",{staticClass:"c-pagination__link-label"},[t._v("Previous "+t._s(t.type))]),t._v(" "),n("NuxtLink",{staticClass:"c-button c-button--lg",attrs:{to:{name:t.routeName,params:{slug:t.prev.slug}}}},[t._v("\n      « "+t._s(t.prev.title)+"\n    ")])],1):t._e(),t._v(" "),t.next?n("div",{staticClass:"c-pagination__next"},[n("div",{staticClass:"c-pagination__link-label"},[t._v("Next "+t._s(t.type))]),t._v(" "),n("NuxtLink",{staticClass:"c-button c-button--lg",attrs:{to:{name:t.routeName,params:{slug:t.next.slug}}}},[t._v("\n      "+t._s(t.next.title)+" »\n    ")])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},347:function(t,e,n){var map={"./async.webp":288,"./default.png":286,"./how-js-works.gif":289,"./js-strings.jpg":290,"./no-code.png":291};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=347},379:function(t,e,n){"use strict";n.r(e);var r=n(20),c=n(6),l=(n(41),n(27),n(43),{name:"BlogPost",head:function(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,article,l,o,_,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.params,e.next=3,n("articles",c.slug).fetch();case 3:return article=e.sent,e.next=6,n("articles").only(["title","slug"]).sortBy("createdAt","desc").surround(c.slug).fetch();case 6:return l=e.sent,o=Object(r.a)(l,2),_=o[0],d=o[1],e.abrupt("return",{article:article,prev:_,next:d});case 11:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},computed:{articleImg:function(){return this.article.featuredImg?n(347)("./".concat(this.article.featuredImg)):n(286)}}}),o=n(25),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"l-main"},[n("div",{staticClass:"c-breadcrumb"},[n("div",{staticClass:"l-container"},[n("nav",{staticClass:"c-breadcrumb__nav"},[n("nuxt-link",{staticClass:"c-breadcrumb__link",attrs:{to:"/"}},[t._v("🏠 home")]),t._v(" "),n("nuxt-link",{staticClass:"c-breadcrumb__link",attrs:{to:"/blog"}},[t._v("blog")]),t._v(" "),n("nuxt-link",{staticClass:"c-breadcrumb__link c-breadcrumb__link--disabled",attrs:{to:{name:"blog-slug",params:{slug:t.article.slug}}}},[t._v(t._s(t.article.slug))])],1)])]),t._v(" "),n("div",{staticClass:"c-blog-post-banner",style:{backgroundImage:"url("+t.articleImg+")"}},[n("div",{staticClass:"l-container"},[n("p",{staticClass:"c-blog-post-banner__date"},[t._v(t._s(t.formatDate(t.article.createdAt)))]),t._v(" "),n("h1",{staticClass:"c-page-title u-text-center u-text-uppercase u-mt-20 u-mb-40"},[t._v(t._s(t.article.title))]),t._v(" "),t.article.tags?n("div",{staticClass:"c-tags"},t._l(t.article.tags,(function(e,r){return n("nuxt-link",{key:r,staticClass:"c-tag",attrs:{to:"/blog/tag/"+e}},[t._v("\n          "+t._s(e)+"\n        ")])})),1):t._e()])]),t._v(" "),n("div",{staticClass:"l-container"},[n("div",{staticClass:"l-article"},[n("aside",{staticClass:"l-article__aside"},[n("nav",{staticClass:"c-article-nav"},[n("div",{staticClass:"c-article-nav__title"},[t._v("Table of contents")]),t._v(" "),n("ul",{staticClass:"c-article-nav__menu c-custom-ul"},t._l(t.article.toc,(function(link){return n("li",{key:link.id},[n("NuxtLink",{class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth},attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])]),t._v(" "),n("article",{staticClass:"c-article"},[n("div",{staticClass:"c-article__body"},[n("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),n("div",{staticClass:"c-article__footer u-mt-64"},[n("p",{staticClass:"c-article__updatedat u-text-right"},[t._v("Last updated: "+t._s(t.formatDate(t.article.updatedAt)))])])])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"u-my-48"},[n("Pagination",{attrs:{prev:t.prev,next:t.next}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"u-my-48"},[e("hr")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Pagination:n(321).default})}}]);