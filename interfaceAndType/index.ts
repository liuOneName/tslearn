/*
 * @Author: lc
 * @Date: 2020-09-24 15:26:55
 * @LastEditTime: 2020-09-27 09:56:23
 * @Description:
 */
interface Person {
    age: number
    name: string
    readonly id: number
}

const obj = {
    a: {
        b: {
            c: "c",
        },
    },
}
console.log(obj?.a?.b?.c)
console.log(false ?? "s")

type A = Partial<Person>
type B = Required<A>

const p1: A = {}
const p2: B = {
    // a: 1
}
