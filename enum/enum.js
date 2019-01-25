/**
 * 枚举（enum）是对js类型的补充
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Pink"] = 2] = "Pink";
    Color[Color["Green"] = 4] = "Green";
})(Color || (Color = {}));
;
var color = Color.Red;
var colorName = Color[4];
var notSure = 4;
notSure = 'aaaa';
console.log(color, colorName);
var Enum1;
(function (Enum1) {
    Enum1[Enum1["A"] = 1] = "A";
    Enum1[Enum1["B"] = 2] = "B";
    Enum1[Enum1["C"] = 2] = "C";
})(Enum1 || (Enum1 = {}));
console.log(Enum1);
/*
对于联合对象返回值 只能访问联合对象的公共成员；
interface A {
    a();
    c();
}
interface B {
    b();
    c();
}
function fun(): A | B {
    //...
    return C;
}
let myFun = fun(); // myFun 只能访问 A 和 B 中公共成员。
myFun.c();//ok
myFun.a();//error
*/
