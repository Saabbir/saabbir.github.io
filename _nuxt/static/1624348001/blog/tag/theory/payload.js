__NUXT_JSONP__("/blog/tag/theory", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O){return {data:[{articles:[{slug:"how-javascript-works-under-the-hood",description:"Learn how JavaScript works under the hood.",title:"How JavaScript Works Under The Hood?",featuredImg:"how-js-works.gif",createdAt:u,tags:[v,s],toc:[{id:w,depth:p,text:x},{id:y,depth:p,text:z},{id:A,depth:p,text:B},{id:C,depth:p,text:D},{id:E,depth:p,text:F},{id:G,depth:p,text:H}],body:{type:I,children:[{type:b,tag:q,props:{id:w},children:[{type:b,tag:e,props:{href:"#what-is-global",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Code that aren't inside a function is global."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Whenever we're opening a tab in the browser, the JavaScript engine of the browser creates a global execution context for us. That execution context gives us a global object named 'window' and a special variable named 'this' automatically. We can use it in our JavaScript program when we working on the browser."}]},{type:a,value:c},{type:b,tag:q,props:{id:y},children:[{type:b,tag:e,props:{href:"#what-is-syntax-parsers",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A program that reads your code and determines what it does and if its grammar is valid. Your code isn't magic. Someone else wrote a program to translate your code into machine readable code."}]},{type:a,value:c},{type:b,tag:q,props:{id:A},children:[{type:b,tag:e,props:{href:"#what-is-lexical-environment",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Where something sits physically in the code you write. A lexical environment exists is programming languages in which where you write something is important."}]},{type:a,value:c},{type:b,tag:q,props:{id:C},children:[{type:b,tag:e,props:{href:"#what-is-a-identifier-in-javascript",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A sequence of characters in the code that identifies a "},{type:b,tag:t,props:{},children:[{type:a,value:"variable"}]},{type:a,value:", "},{type:b,tag:t,props:{},children:[{type:a,value:"function"}]},{type:a,value:", or "},{type:b,tag:t,props:{},children:[{type:a,value:"property"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So in a nutshell, when you refer to any data\u002Fvalue (string, number, boolean, array, object, function, undefined, null) by using any sequence of characters, that is a identifier."}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FGlossary\u002FIdentifier",rel:[g,h,i],target:j},children:[{type:a,value:"Read MDN article on this"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The followings are all identifier."}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Variable created using let, const, var"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Function created using function definition"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Function parameters\u002Farguments"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Object property keys"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{id:E},children:[{type:b,tag:e,props:{href:"#what-is-execution-context-in-javascript",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A wrapper to help manage the code that is running. There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond what you've written in your code."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"Details"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When a webpage loads, JavaScript engine creates an execution context named global execution context. That is the parent of all execution context and bottom of the execution stack. All the codes we write in our js file are wrapped inside this context."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are two types of execution context in JavaScript."}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Global Exection Context"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Function Execution Context"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Both works exactly the same way. Global execution context gets created by the JavaScript engine when it loads the page. Function execution context gets created when we invoke a function in JavaScript."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All the execution context has two phases. One is creation phase. Another is execution phase. Creation phase runs first before execution phase."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In creation phase, JavaScript engine looks into it's current execution context and finds out all the variables and functions are declared and stores them in the memory."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Then execution phase happen and execute the code top to bottom line by line and character by character."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That means JavaScript engine first setup the memory location for variables and functions before executing the code. That's called Hoisting."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Functions are stored in the memory entirely in the creation phase. But variables are stored in the memory with the initial value of undefined."}]},{type:a,value:c},{type:b,tag:q,props:{id:G},children:[{type:b,tag:e,props:{href:"#see-also",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Ftylermcginnis.com\u002Fultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"Ultimate Guide on Execution Context by Tyler McGinnis"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fdmitrysoshnikov.com\u002Fecmascript\u002Fchapter-1-execution-contexts\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"Article of Dmitry Soshnikov"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fmedium.com\u002Fsearch?q=Execution%20Context",rel:[g,h,i],target:j},children:[{type:a,value:"Medium Search on Execution Context"}]}]},{type:a,value:c}]}]},dir:J,path:"\u002Farticles\u002Fhow-javascript-works-under-the-hood",extension:K,updatedAt:"2021-01-09T05:14:33.039Z"},{slug:"asynchronous-javaScript",description:"Learn about non-blocking JavaScript.",title:"Asynchronous JavaScript",featuredImg:"async.webp",createdAt:u,tags:[s,"async-js",v],toc:[{id:L,depth:2,text:M},{id:N,depth:p,text:O}],body:{type:I,children:[{type:b,tag:"h2",props:{id:L},children:[{type:b,tag:e,props:{href:"#what-we-mean-by-asynchronous",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Asynchronous is the opposite of synchronous, which means happening at the same time. Think of “synchronous” as “in synch” and asynchronous as “out of synch.” If we're chatting on the phone, our communication is “synchronous.” We respond to each other immediately and when we hang up, the conversation's over. Email is asynchronous because we respond whenever it's convenient. In some cases this means never, which can be mighty convenient."}]},{type:a,value:c},{type:b,tag:q,props:{id:N},children:[{type:b,tag:e,props:{href:"#further-reading",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FGlossary\u002Fasynchronous",rel:[g,h,i],target:j},children:[{type:a,value:"Asynchronous on MDN Glossary"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FLearn\u002FJavaScript\u002FAsynchronous",rel:[g,h,i],target:j},children:[{type:a,value:"Asynchronous JavaScript on MDN"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fblog.bitsrc.io\u002Funderstanding-asynchronous-javascript-the-event-loop-74cd408419ff",rel:[g,h,i],target:j},children:[{type:a,value:"Asynchronous JavaScript on Medium"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Feloquentjavascript.net\u002F11_async.html",rel:[g,h,i],target:j},children:[{type:a,value:"Asynchronous Programming on Eloquent JavaScript Book"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.hongkiat.com\u002Fblog\u002Fsynchronous-asynchronous-javascript\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"Understanding Synchronous and Asynchronous JavaScript – Part 1"}]}]},{type:a,value:c}]}]},dir:J,path:"\u002Farticles\u002Fasynchronous-javaScript",extension:K,updatedAt:"2021-01-09T02:07:54.227Z"}],tag:s}],fetch:[],mutations:void 0}}("text","element","\n","p","a","li","nofollow","noopener","noreferrer","_blank","true",-1,"span","icon","icon-link",3,"h3","ul","theory","code","2020-12-31T18:00:00.000Z","javascript","what-is-global","What is global?","what-is-syntax-parsers","What is syntax parsers?","what-is-lexical-environment","What is lexical environment?","what-is-a-identifier-in-javascript","What is a identifier in JavaScript?","what-is-execution-context-in-javascript","What is Execution Context in JavaScript?","see-also","See also","root","\u002Farticles",".md","what-we-mean-by-asynchronous","What we mean by asynchronous?","further-reading","Further reading")));