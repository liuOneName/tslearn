/**
 *泛型：定义的时候不确定类型，在调用的时候在指定 类型；
 */
function fun<T>(args: T): T{
    return args;
}
let str: string = fun<string>('爱你哟');
let num: number = fun<number>(20);
console.log(str, num);

/**
 * 泛型类
 */
class NotSoure<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;//定义了一个add方法的架构：有 x，y 这两个参数，它们类型和返回值的类型为 T；它的实例需要实现这个方法才可以使用这个方法。
}
let notSoure = new NotSoure<number>();
notSoure.zeroValue = 0;
notSoure.add = function(x, y) {
    return x + y;
};
console.log(notSoure.add(10, 12));
let strAdd = new NotSoure<string>();
strAdd.zeroValue = 'zero';
strAdd.add = function(x, y){return x + y;};
console.log(strAdd.add(strAdd.zeroValue, ' one'))

/**
 * 泛型类的泛型约束
 */
interface LengthWise {
    length: number;
}
function printLength<T extends LengthWise>(arg: T): T { //限制传入的参数必须要有 length 属性
    console.log(arg.length);
    return arg;
}
console.log(printLength('爱你哟'));
console.log(printLength({length: 10, value: 2}));

/**
 * 交叉类型：返回的值包含 T U；
 */
/*
function extend<T, U>(arg1: T, arg2: U): T & U {
    //实现
}
*/

/**
 * 类型别名: 给一个类型写一个新名字。使用性不强。
 */
/**
 * test函数 传入 经过别名的 函数或string类型的参数，在其中判断参数的类型；函数返回 string 类型；
 */
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
type Easing = 'A' | 'B' | 'C';
function test(arg: NameOrResolver, ease: Easing): Name{  //ease 的值只能是'A','B','C'这三种；
    if(typeof arg === 'string'){
        return arg;
    } else {
        return arg();
    }
}
