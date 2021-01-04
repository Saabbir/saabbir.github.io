---
title: How JavaScript Works Under The Hood?
description: Learn how JavaScript works under the hood?.
featuredImg: how-js-works.gif
createdAt: 01/01/2021
tags:
  - javascript
  - theory
---

### What is global?

Code that aren't inside a function is global.

Whenever we're opening a tab in the browser, the JavaScript engine of the browser creates a global execution context for us. That execution context gives us a global object named 'window' and a special variable named 'this' automatically. We can use it in our JavaScript program when we working on the browser.

### What is syntax parsers?

A program that reads your code and determines what it does and if its grammar is valid. Your code isn't magic. Someone else wrote a program to translate your code into machine readable code.

### What is lexical environment?

Where something sits physically in the code you write. A lexical environment exists is programming languages in which where you write something is important.

### What is a identifier in JavaScript?

A sequence of characters in the code that identifies a `variable`, `function`, or `property`.

So in a nutshell, when you refer to any data/value (string, number, boolean, array, object, function, undefined, null) by using any sequence of characters, that is a identifier.

- [Read MDN article on this](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)

The followings are all identifier.

- Variable created using let, const, var
- Function created using function definition
- Function parameters/arguments
- Object property keys