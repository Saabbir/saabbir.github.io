---
title: JavaScript Objects
description: Learn about JavaScript's most important data type Object.
img: js-strings.jpg
imgAlt: JavaScript Strings
---

## What is Object?

A collection of name value pairs. It's that simple.

Every function objects (including constructor functions) in javascript created from `Function` constructor. So, it is the last constructor function in the chain.

**Examples**

`(function(){}).constructor.name === 'Function'` returns true.

`Function.constructor.name === 'Function'` returns true.

`Object.constructor.name === 'Function'` returns true.

`Array.constructor.name === 'Function'` returns true.

`String.constructor.name === 'Function'` returns true.

`Number.constructor.name === 'Function'` returns true.

`Boolean.constructor.name === 'Function'` returns true.

Every function object (created from `Function` constructor) inherited some properties/methods from `Function.prototpe` object. That is unique to function objects only. Like `call`, `apply` methods only available to function objects. These methods are defined directly into the `Function.prototype` object.

**Example**

`Function.prototype.hasOwnProperty('call') === true`

As far as we know, the instance objects has access to its constructor functions prototype object properties. But for two exceptions. One for `Function.prototype` object and second for `Object.prototype` object. Because all functions objects prototype chain ends with `Function.prototype` object and its prototype chain ends with `Object.prototype` object. Though the `Function.prototype` object is not created by Object constructor function, but still it has access ot `Object.prototype` object which is the last object in the prototype chain. Its prototype chain ends up with `null`.

**Example**

`Function.prototype.constructor.name === 'Function' returns true.`

`Function.prototype.__proto__ === Function.prototype returns false.`

`Function.prototype.__proto__ === Object.prototype returns true.`