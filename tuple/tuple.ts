/**
 * 元组：允许表示一个已知元素个数和类型的数组，各元素的类型可以不必形同。
 */
let arr: [string, number] = ['a', 1];
/**
 * 当访问越界元素时 它的类型 是在之前定义过的其中一种。
 * arr[2] = true;会报错
 */
arr[2] = 'b';

console.log(arr);