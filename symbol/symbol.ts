/**
 * 自es6起，symbol成了一种新的原生类型。通过symbol构造唯一的值。 symbols 值是唯一不可改变的。
 */
let a: symbol = Symbol('key');
let b: symbol = Symbol('key');
let c: symbol = Symbol();
let a1: number = 1;
let b1: number = 1; 
console.log(a === b, a1 === b1, a, b, c);

/**
 * 在对象和类中的使用
 */
let sym: symbol = Symbol();
let obj = {
    [sym]: 'value', //调用的时候 obj.sym 为 undefined, obj[sym] 为 value；
};
class C {
    [sym](){
        return 'C';
    }
}
let c = new C();
//c.sym(); //error
c[sym](); // C