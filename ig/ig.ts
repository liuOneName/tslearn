/**
 * 1.for..in 迭代键。
 * 2.for..of 迭代值。
 */
let obj = {
    age: 19,
    id: 1,
    name: 'Bill',
}
for(let i in obj){
    console.log(i);
}
//为什么for of 报错 没有iterable(迭代的方法);