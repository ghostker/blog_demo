(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{337:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(83),r(86);function n(t){return t.startsWith("/")?"".concat("http://localhost:1337").concat(t):t}},338:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(337);function c(t){var e=[];if(t.metaTitle&&e.push({property:"og:title",content:t.metaTitle},{name:"twitter:title",content:t.metaTitle}),t.metaDescription&&e.push({name:"description",content:t.metaDescription},{property:"og:description",content:t.metaDescription},{name:"twitter:description",content:t.metaDescription}),t.shareImage){var r=Object(n.a)(t.shareImage.url);e.push({name:"image",content:r},{property:"og:image",content:r},{name:"twitter:image",content:r})}return t.article&&e.push({property:"og:type",content:"article"}),e.push({name:"twitter:card",content:"summary_large_image"}),e}},476:function(t,e,r){"use strict";r(53);var n=r(337),c={props:{article:{type:Object,default:function(){return{}}}},methods:{getStrapiMedia:n.a}},l=r(52),o={components:{ArticleCard:Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{key:t.article.id,staticClass:"uk-link-reset",attrs:{to:{name:"articles-slug",params:{slug:t.article.slug}}}},[r("div",{staticClass:"uk-card uk-card-muted"},[r("div",{staticClass:"uk-card-media-top"},[r("img",{attrs:{src:t.getStrapiMedia(t.article.image.url),height:"100"}})]),t._v(" "),r("div",{staticClass:"uk-card-body"},[t.article.category?r("p",{staticClass:"uk-text-uppercase",attrs:{id:"category"}},[t._v("\n        "+t._s(t.article.category.name)+"\n      ")]):t._e(),t._v(" "),r("p",{staticClass:"uk-text-large",attrs:{id:"title"}},[t._v(t._s(t.article.title))]),t._v(" "),r("hr",{staticClass:"uk-divider-small"}),t._v(" "),r("div",{staticClass:"uk-grid-small uk-flex-left",attrs:{"data-uk-grid":"true"}},[r("div",[r("img",{staticClass:"avatar",staticStyle:{position:"static","border-radius":"50%","object-fit":"cover"},attrs:{src:t.getStrapiMedia(t.article.author.picture.url),width:"40px",height:"40px",alt:t.article.title}})]),t._v(" "),r("div",{staticClass:"uk-width-expand"},[r("p",{staticClass:"uk-margin-remove-bottom"},[t._v(t._s(t.article.author.name))])])])])])])}),[],!1,null,null,null).exports},props:{articles:{type:Array,default:function(){return[]}}},computed:{leftArticlesCount:function(){return Math.ceil(this.articles.length/5)},leftArticles:function(){return this.articles.slice(0,this.leftArticlesCount)},rightArticles:function(){return this.articles.slice(this.leftArticlesCount,this.articles.length)}}},d=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"uk-child-width-1-2",attrs:{"uk-grid":""}},[e("div",this._l(this.leftArticles,(function(article){return e("ArticleCard",{key:article.id,attrs:{article:article}})})),1),this._v(" "),e("div",[e("div",{staticClass:"uk-child-width-1-2@m uk-grid-match",attrs:{"uk-grid":""}},this._l(this.rightArticles,(function(article){return e("ArticleCard",{key:article.id,attrs:{article:article}})})),1)])])])}),[],!1,null,null,null);e.a=d.exports},487:function(t,e,r){"use strict";r.r(e);r(42),r(43),r(142),r(37),r(84),r(85),r(66),r(44);var n=r(34),c=(r(27),r(2)),l=r(476),o=r(338),d=r(337);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{Articles:l.a},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$strapi,e.next=3,r.find("articles");case 3:return e.t0=e.sent,e.next=6,r.find("homepage");case 6:return e.t1=e.sent,e.next=9,r.find("global");case 9:return e.t2=e.sent,e.abrupt("return",{articles:e.t0,homepage:e.t1,global:e.t2});case 11:case"end":return e.stop()}}),e)})))()},head:function(){var t=this.homepage.seo,e=this.global,r=e.defaultSeo,n=e.favicon,c=e.siteName,l=m(m({},r),t);return{titleTemplate:"%s | ".concat(c),title:l.metaTitle,meta:Object(o.a)(l),link:[{rel:"favicon",href:Object(d.a)(n.url)}]}}},v=r(52),component=Object(v.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"uk-section"},[e("div",{staticClass:"uk-container uk-container-large"},[e("h1",[this._v(this._s(this.homepage.hero.title))]),this._v(" "),e("Articles",{attrs:{articles:this.articles}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);