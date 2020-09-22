// 非空断言
const notNullAssertion = (a: number | null) => {
    const b: number = a!
}
notNullAssertion(1)
