// 泛型
function identity<T>(arg: T): T {
    return arg
}
identity(1) // 可以写类型，编译器会推断类型
identity<string>("string") // 也可以指定类型
interface GenericIdentityFn {
    <T>(arg: T): T
}
let fun1: GenericIdentityFn = identity

interface GenFn<T> {
    <T>(arg: T): T
}
let fun2: GenFn<number> = identity

// 泛型类
class Person<T> {
    // 只是声明了一些属性的类型
    age: T
    add: (x: T, y: T) => T
}
// 实现泛型类
let person1 = new Person<number>()
person1.age = 25
person1.add = (x, y) => x + y
console.log(person1.add(1, 2))
