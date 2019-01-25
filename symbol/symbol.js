/**
 * 自es6起，symbol成了一种新的原生类型。通过symbol构造唯一的值。 symbols 值是唯一不可改变的。
 */
var a = Symbol('key');
var b = Symbol('key');
var c = Symbol();
var a1 = 1;
var b1 = 1;
console.log(a === b, a1 === b1, a, b, c);
