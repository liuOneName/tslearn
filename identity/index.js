// 泛型
function identity(arg) {
    return arg;
}
identity(1); // 可以写类型，编译器会推断类型
identity("string"); // 也可以指定类型
var fun1 = identity;
var fun2 = identity;
// 泛型类
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// 实现泛型类
var person1 = new Person();
person1.age = 25;
person1.add = function (x, y) { return x + y; };
console.log(person1.add(1, 2));
