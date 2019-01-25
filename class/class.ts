/**
 * class在ts中的三种成员变量类型：
 * 1.默认（public）：可以在实例，子类，子类实例。。中访问；
 * 2.私有的（private）：能继承，但是子类及其实例不能访问；只能在class的内部访问；
 * 3.受保护的（protected）：能继承，子类可以访问，但是不能再其实例中访问(只能看到实例有这个属性，不能访问)；
 * 4.只读（readonly）：只读属性，只能在声明或构造器中初始化；
 * 5.静态（static）：使用时要加上类名；
 */
/**
 * 类 的存取器：通过getters/setters来截取对对象成员变量的访问。
 */

/**
 * private
 */
class Person{
    private age: number;
    readonly type: string = 'pepole';
    constructor(age: number = 19){
        this.age = age;
    }
    getAge(){
        console.log(this.age);
    }
}
let person = new Person(19);
console.log(person, person.type);
class Woman extends Person{
    constructor(age: number = 19){
        super(age);
    }
}
let woman = new Woman(18);
console.log(woman, woman.getAge(), woman.type)

/**
 * protected
 */
class Animal {
    protected name: string;
    readonly type: string = 'animal';
    constructor(name: string = 'Cat'){
        this.name = name;
    }
}
let cat = new Animal();
console.log(cat);

class Dog extends Animal {
    constructor(name: string = 'dog'){
        super(name);
    }
    getName(){
        console.log(`the name is ${this.name}, the type is ${this.type}`)
    }
}
let dog = new Dog();
console.log(dog, dog.getName());

/**
 * 存取器getter/setter
 */
let pw = '爱你';
class Employee {
    private _name: string;
    set name(name: string){
        if(pw && pw == '爱你'){
            this._name = name;
        } else {
            console.log(`Error`);
        }
    }
    get name(): string {
        return this._name;
    }
}
let em = new Employee();
console.log(em.name);
em.name = 'M';
console.log(em.name);

/**
 * 抽象类：提供其他类继承的基类；不同于 接口 ，抽象类一般不会直接被实例化，抽象类可以包含成员的实现细节；抽象方法必须在派生类（extends）中实现；
 */
abstract class Human {
    constructor(public name: string){

    }
    abstract printName(): void; //必须在派生类中实现
    move(m: number): void {
        console.log(`the run ${m}m`);
    }
}
class Man extends Human {
    constructor(name: string){
        super(name);
    }
    printName(): void {
        console.log(this.name)
    }
}
let man = new Man('hero');
console.log(man, man.printName())

/**
 * 类当接口使用
 */
class Point {
    x: number;
    y: number;
}
interface Point3D extends Point {
    z: number;
} 
let point: Point3D = {x: 1, y: 2, z: 3};
console.log(point); 