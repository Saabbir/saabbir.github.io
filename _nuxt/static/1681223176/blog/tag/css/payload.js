__NUXT_JSONP__("/blog/tag/css", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){return {data:[{articles:[{slug:"safari-inline-block-fix-for-columns-layout",title:"Safari inline-block fix for CSS columns layout",createdAt:"2023-04-11T00:00:00.000Z",tags:[n,"safari","issue","fix"],toc:[{id:o,depth:p,text:q},{id:r,depth:p,text:s},{id:t,depth:2,text:u}],body:{type:"root",children:[{type:b,tag:e,props:{className:[f,v]},children:[{type:a,value:c},{type:b,tag:w,props:{id:o},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#the-problem",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Using css columns property gives us different results for Chrome and Safari. Check below gif file."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,"l-wrap--md"]},children:[{type:a,value:c},{type:a,value:c},{type:b,tag:"markdown-image",props:{src:"article-images\u002Fsafari-inline-block-issue.gif",alt:"Safari inline-block issue",className:["u-my-32"]},children:[{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,v]},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Look closely to the above gif file and you'll see the border positions differently if we toggle "},{type:b,tag:m,props:{},children:[{type:a,value:x}]},{type:a,value:" rule. In this case, border-bottom for last child of the left column goes above the first child of the right column. This issue only occurs in Safari browser."}]},{type:a,value:c},{type:b,tag:w,props:{id:r},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#the-finding",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Border bottom works incorrectly in Safari while using CSS columns for layout."}]},{type:a,value:c},{type:b,tag:"h2",props:{id:t},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#the-fix",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Use "},{type:b,tag:m,props:{},children:[{type:a,value:x}]},{type:a,value:" along with the "},{type:b,tag:m,props:{},children:[{type:a,value:"border-bottom"}]},{type:a,value:" rule."}]},{type:a,value:c}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fsafari-inline-block-fix-for-columns-layout",extension:".md",updatedAt:"2023-04-11T14:24:53.210Z"}],tag:n}],fetch:{},mutations:void 0}}("text","element","\n","p","div","l-wrap","a","true",-1,"span","icon","icon-link","code","css","the-problem",3,"The problem","the-finding","The finding","the-fix","The fix","l-wrap--sm","h3","display: inline-block")));