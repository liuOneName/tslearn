/**
 * 枚举（enum）是对js类型的补充
 */
enum Color { Red = 1, Pink = 2, Green = 4 };
let color: Color = Color.Red;
let colorName: string = Color[4];
let notSure: any = 4;
notSure = 'aaaa';
console.log(color, colorName);

enum Enum1 {
    A = 1,
    B,
    C = 2,
}
/**
 * 外部枚举
 */
declare enum Enum2 {
    A = 1,
    B,
    C = 2,
}
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
