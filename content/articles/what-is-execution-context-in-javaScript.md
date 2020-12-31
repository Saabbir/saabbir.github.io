---
title: What is Execution Context in JavaScript?
description: Learn what is execution context in JavaScript.
img: no-code.png
imgAlt: No Code
---

A wrapper to help manage the code that is running. There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond what you've written in your code.

### Details

When a webpage loads, JavaScript engine creates an execution context named global execution context. That is the parent of all execution context and bottom of the execution stack. All the codes we write in our js file are wrapped inside this context.

There are two types of execution context in JavaScript.

- Global Exection Context
- Function Execution Context

Both works exactly the same way. Global execution context gets created by the JavaScript engine when it loads the page. Function execution context gets created when we invoke a function in JavaScript.

All the execution context has two phases. One is creation phase. Another is execution phase. Creation phase runs first before execution phase.

In creation phase, JavaScript engine looks into it's current execution context and finds out all the variables and functions are declared and stores them in the memory.

Then execution phase happen and execute the code top to bottom line by line and character by character.

That means JavaScript engine first setup the memory location for variables and functions before executing the code. That's called Hoisting.

Functions are stored in the memory entirely in the creation phase. But variables are stored in the memory with the initial value of undefined.

### Further reading

- [Ultimate Guide on Execution Context by Tyler McGinnis](https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/)
- [Article of Dmitry Soshnikov](http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/)
- [Medium Search on Execution Context](https://medium.com/search?q=Execution%20Context)