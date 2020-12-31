---
title: Asynchronous JavaScript
description: Learn about non-blocking JavaScript
img: js-strings.jpg
imgAlt: JavaScript Strings
---

## What we mean by asynchronous?

Asynchronous simply means more than one at a time.

**Details**

When we're talking about running JavaScript, the JavaScript engine itself, we understand it doesn't exist by itself inside for example in internet browser. JavaScript engine isn't the only engine in the browser.

There are other engines and running pieces of code that are happening outside the JavaScript engine that runs JavaScript when you loaded in to the browser.

All the engines running asynchronously inside the browser but what's happening inside the JavaScript engine it's synchronous.

Suppose when we click on something in the browser that is an event. The click event. The browser is going to place that click event on the event queue.

Question: When is JavaScript engine going to look at that queue and proceed? Answer: After all the current execution context is complete. Because the JavaScript engine won't look at the event queue untill the execution stack is empty.

Any events that happened outside of the JavaScript engine get placed into that queue and if execution stack is empty if JavaScript isn't working on anything else currently it will process those events and process those events in the order they happened.

Asynchronous callbacks are possible in JavaScript but the asynchronous part is really what happening outside the JavaScript engine. Events in JavaScript happen asynchronously.

### Further reading

- [Understanding Synchronous and Asynchronous JavaScript – Part 1](https://www.hongkiat.com/blog/synchronous-asynchronous-javascript/)