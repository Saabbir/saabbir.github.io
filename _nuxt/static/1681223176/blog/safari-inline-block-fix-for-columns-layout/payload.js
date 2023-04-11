__NUXT_JSONP__("/blog/safari-inline-block-fix-for-columns-layout", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return {data:[{article:{slug:"safari-inline-block-fix-for-columns-layout",title:"Safari inline-block fix for CSS columns layout",createdAt:"2023-04-11T00:00:00.000Z",tags:["css","safari","issue","fix"],toc:[{id:n,depth:o,text:p},{id:q,depth:o,text:r},{id:s,depth:2,text:t}],body:{type:"root",children:[{type:b,tag:e,props:{className:[f,u]},children:[{type:a,value:c},{type:b,tag:v,props:{id:n},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#the-problem",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Using css columns property gives us different results for Chrome and Safari. Check below gif file."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,"l-wrap--md"]},children:[{type:a,value:c},{type:a,value:c},{type:b,tag:"markdown-image",props:{src:"article-images\u002Fsafari-inline-block-issue.gif",alt:"Safari inline-block issue",className:["u-my-32"]},children:[{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,u]},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Look closely to the above gif file and you'll see the border positions differently if we toggle "},{type:b,tag:m,props:{},children:[{type:a,value:w}]},{type:a,value:" rule. In this case, border-bottom for last child of the left column goes above the first child of the right column. This issue only occurs in Safari browser."}]},{type:a,value:c},{type:b,tag:v,props:{id:q},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#the-finding",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Border bottom works incorrectly in Safari while using CSS columns for layout."}]},{type:a,value:c},{type:b,tag:"h2",props:{id:s},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#the-fix",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Use "},{type:b,tag:m,props:{},children:[{type:a,value:w}]},{type:a,value:" along with the "},{type:b,tag:m,props:{},children:[{type:a,value:"border-bottom"}]},{type:a,value:" rule."}]},{type:a,value:c}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fsafari-inline-block-fix-for-columns-layout",extension:".md",updatedAt:"2023-04-11T14:24:53.210Z"},prev:null,next:{slug:"learn-enough-command-line",title:"Learn Enough Command Line"}}],fetch:{},mutations:void 0}}("text","element","\n","p","div","l-wrap","a","true",-1,"span","icon","icon-link","code","the-problem",3,"The problem","the-finding","The finding","the-fix","The fix","l-wrap--sm","h3","display: inline-block")));