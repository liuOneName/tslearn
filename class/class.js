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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * private
 */
var Person = /** @class */ (function () {
    function Person(age) {
        if (age === void 0) { age = 19; }
        this.type = 'pepole';
        this.age = age;
    }
    Person.prototype.getAge = function () {
        console.log(this.age);
    };
    return Person;
}());
var person = new Person(19);
console.log(person, person.type);
var Woman = /** @class */ (function (_super) {
    __extends(Woman, _super);
    function Woman(age) {
        if (age === void 0) { age = 19; }
        return _super.call(this, age) || this;
    }
    return Woman;
}(Person));
var woman = new Woman(18);
console.log(woman, woman.getAge(), woman.type);
/**
 * protected
 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        if (name === void 0) { name = 'Cat'; }
        this.type = 'animal';
        this.name = name;
    }
    return Animal;
}());
var cat = new Animal();
console.log(cat);
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        if (name === void 0) { name = 'dog'; }
        return _super.call(this, name) || this;
    }
    Dog.prototype.getName = function () {
        console.log("the name is " + this.name + ", the type is " + this.type);
    };
    return Dog;
}(Animal));
var dog = new Dog();
console.log(dog, dog.getName());
/**
 * 存取器getter/setter
 */
var pw = '爱你';
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (pw && pw == '爱你') {
                this._name = name;
            }
            else {
                console.log("Error");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var em = new Employee();
console.log(em.name);
em.name = 'M';
console.log(em.name);
/**
 * 抽象类：提供其他类继承的基类；不同于 接口 ，抽象类一般不会直接被实例化，抽象类可以包含成员的实现细节；抽象方法必须在派生类（extends）中实现；
 */
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.move = function (m) {
        console.log("the run " + m + "m");
    };
    return Human;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name) {
        return _super.call(this, name) || this;
    }
    Man.prototype.printName = function () {
        console.log(this.name);
    };
    return Man;
}(Human));
var man = new Man('hero');
console.log(man, man.printName());
/**
 * 类当接口使用
 */
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point = { x: 1, y: 2, z: 3 };
console.log(point);
