/*
1.
function test(person: string){
    let world = `hello ${person}`;
}
let arg = 'word';
test(arg);
*/
/*
//2.interface, 一个接口可以继承多个接口，创造出多个接口的结合接口。
//变量或对象接口
interface Person {
    firstName: string,
    lastName: string,
    //middleName?: string, // ? 表示middleName属性可以省略不写
    //readonly age: number, // readonly 关键字表示只读，不能修改。
}
function test(person: Person){
    return `The name is ${person.firstName} ${person.lastName}`;
}
let user = {firstName: 'Bill', lastName: 'User'};
let result = test(user);
//函数接口
interface Fun{
    (arg1: string, arg2: number): boolean, //意思是：这个函数有两个参数，参数类型分别为string和number，函数的返回值为bool。
}
let myFun1: Fun;
myFun1 = function(str, num){
    console.log(str, num);
    return true;
}
let resu = myFun1('爱你哟', 22);
console.log(resu);
//类接口
interface Class {
    currentTime: Date;
    setTime(d: Date);//这个叫静态部分
    //new (hour: number, minute: number);
}
class Clock implements Class{
    currentTime: Date;
    setTime(d: Date){
        this.currentTime = d;
    }
    constructor(h: number, m: number){
        console.log(h, m);
    }
}
let clock = new Clock(11, 25);
clock.setTime(new Date());
console.log('静态',clock);
interface Cstc {
    new (hour: number, minute: number);//这个叫实例部分，实例不能通过接口的实现来定义。
}
function createClock(cstc: Cstc, h: number, m: number){
    return new cstc(h, m);
}
let cc = createClock(Clock, 11, 36);
console.log('实例', cc);
//接口之间的继承
interface Interfaces extends Person, Class {
    name: string;
}
let interfaces = <Interfaces>{};
interfaces = {firstName: 'Bill', lastName: 'User', currentTime: new Date(), name: 'B U', setTime: (d: Date) => console.log(d)};
setTimeout(()=>{interfaces.setTime(new Date())},2000)
console.log(interfaces);
//接口继承类: 当接口继承一个类类型时，他会继承类的成员但不包括实现。
class Control {
    private state: string;
    setState(state: string){
        this.state = state;
    }
    getState(){
        console.log(this.state);
    }
}
interface SeleControl extends Control { //只有Control的子类才能实现SeleControl这个接口
    select(): void;
}
class TextBox extends Control implements SeleControl{
    select(): void {
        console.log('实现接口的select方法');
    }
}
let textBox = new TextBox();
textBox.setState('爱你哟');
textBox.getState();
textBox.select();
// let myFun2 = function(str, num): Fun{ //这样会找不到 Fun 这个类型
//     console.log(str, num);
//     return true;
// }
*/
/*
//3.class 类 在构造器的参数中，使用public声明参数，相当于创建了一个同名的成员变量
class Student {
    fullName: string;
    constructor(public firstName, public middleName, public lastName){
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
}
interface Person {
    firstName: string,
    lastName: string,
}
function test(person: Person){
    console.log(person);
    return `hello ${person.firstName} ${person.lastName}`;
}
let user = new Student('F', 'M', 'L');
let result = test(user);
document.body.innerHTML = result;
*/
/*
//4.类型断言: 只对编译时有用;在ts中使用JSX语法时，只有as这种断言是被允许的。
let anyValue: any = 'this is a string';
let strLength: number = (<string>anyValue).length;
let someValue: number | string | void = 'this is a string.';
let someLength: number = (someValue as string).length;
console.log(strLength, someLength);
*/
/**
 * this 的指向问题
 */
var Person = /** @class */ (function () {
    function Person(name) {
        if (name === void 0) { name = 'Bill'; }
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.add = function (arg) {
        this.name = arg + this.name;
        return this;
    };
    return Person;
}());
var person = new Person();
console.log(person, person.getName(), person.add('hi,'));
