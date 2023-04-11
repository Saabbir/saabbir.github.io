__NUXT_JSONP__("/blog/javascript-strings", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W){return {data:[{article:{slug:"javascript-strings",description:"Learn how to work with text in JavaScript.",title:"JavaScript Strings",featuredImg:"js-strings.jpg",createdAt:"2021-01-01T00:00:00.000Z",tags:["javascript"],toc:[{id:E,depth:s,text:F},{id:G,depth:s,text:H},{id:I,depth:s,text:J}],body:{type:"root",children:[{type:b,tag:n,props:{className:["l-wrap","l-wrap--sm"]},children:[{type:a,value:e},{type:b,tag:t,props:{id:E},children:[{type:b,tag:o,props:{href:"#what-is-the-difference-between-string-literals-and-string-objects-in-javascript",ariaHidden:u,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:F}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"String literals (denoted by double or single quotes) and strings returned from String calls in a non-constructor context (i.e., without using the new keyword) are primitive strings. JavaScript automatically converts primitives to String objects, so that it's possible to use String object methods for primitive strings. In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup."}]},{type:a,value:e},{type:b,tag:K,props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:o,props:{href:"https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F17256182\u002Fwhat-is-the-difference-between-string-literals-and-string-objects-in-javascript",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Read stackoverflow thread on this"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"Explanation"}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Whenever we try to access a property\u002Fmethod on a primitive string, JavaScript automatically converts the primitive string into a string object. So, "},{type:b,tag:g,props:{},children:[{type:a,value:"'Saabbir'.length"}]},{type:a,value:" converts into new "},{type:b,tag:g,props:{},children:[{type:a,value:"String('Saabbir').length"}]},{type:a,value:" behind the scene. That's why we can access all of those string methods on a primitive string like Saabbir."}]},{type:a,value:e},{type:b,tag:t,props:{id:G},children:[{type:b,tag:o,props:{href:"#what-is-a-string-object",ariaHidden:u,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:H}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Strings created from "},{type:b,tag:g,props:{},children:[{type:a,value:j}]},{type:a,value:" constructor function in a constructor context (i.e, using the "},{type:b,tag:g,props:{},children:[{type:a,value:p}]},{type:a,value:" keyword) are string object."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"Example"}]}]},{type:a,value:e},{type:b,tag:n,props:{className:[L]},children:[{type:b,tag:c,props:{className:[M]},children:[{type:a,value:N}]},{type:b,tag:O,props:{className:[P,Q]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:"\"Saabbir Hossain\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"Key takeaways"}]}]},{type:a,value:e},{type:b,tag:K,props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Without using "},{type:b,tag:g,props:{},children:[{type:a,value:p}]},{type:a,value:" operator, "},{type:b,tag:g,props:{},children:[{type:a,value:j}]},{type:a,value:" function calls always returns string primitive value."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:j}]},{type:a,value:" function takes any types of data as an argument and converts it into it's corresponding primitive string value. So, "},{type:b,tag:g,props:{},children:[{type:a,value:"String(100)"}]},{type:a,value:" will return the primitive string "},{type:b,tag:g,props:{},children:[{type:a,value:U}]},{type:a,value:". In here, the number value "},{type:b,tag:g,props:{},children:[{type:a,value:"100"}]},{type:a,value:" gets converted into its corresponding "},{type:b,tag:g,props:{},children:[{type:a,value:U}]},{type:a,value:" string value."}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:t,props:{id:I},children:[{type:b,tag:o,props:{href:"#string-prototype-chain",ariaHidden:u,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:J}]},{type:a,value:e},{type:b,tag:n,props:{className:["c-prism-container"]},children:[{type:a,value:e},{type:b,tag:n,props:{className:[L]},children:[{type:b,tag:c,props:{className:[M]},children:[{type:a,value:N}]},{type:b,tag:O,props:{className:[P,Q]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:"\"string\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:B}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:D}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:B}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:D}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:B}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:D}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,A,W,"nil"]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e}]}]}]},{type:a,value:e}]},{type:a,value:e}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fjavascript-strings",extension:".md",updatedAt:"2023-04-11T14:24:53.210Z"},prev:{slug:"learn-enough-command-line",title:"Learn Enough Command Line"},next:{slug:"javascript-learning-resources",title:"Curated list of JavaScript learning resources"}}],fetch:{},mutations:void 0}}("text","element","span","token","\n","punctuation","code","p"," ","String",".","property-access","class-name","div","a","new",";","prototype",3,"h3","true",-1,"icon","icon-link","li","strong","keyword","__proto__","operator","===","what-is-the-difference-between-string-literals-and-string-objects-in-javascript","What is the difference between string literals and string objects in JavaScript?","what-is-a-string-object","What is a string object?","string-prototype-chain","String prototype chain","ul","nuxt-content-highlight","filename","js","pre","language-js","line-numbers","(","string",")","\"100\"","Object","null")));