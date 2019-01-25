/**
 *泛型：定义的时候不确定类型，在调用的时候在指定 类型；
 */
function fun(args) {
    return args;
}
var str = fun('爱你哟');
var num = fun(20);
console.log(str, num);
/**
 * 泛型类
 */
var NotSoure = /** @class */ (function () {
    function NotSoure() {
    }
    return NotSoure;
}());
var notSoure = new NotSoure();
notSoure.zeroValue = 0;
notSoure.add = function (x, y) {
    return x + y;
};
console.log(notSoure.add(10, 12));
var strAdd = new NotSoure();
strAdd.zeroValue = 'zero';
strAdd.add = function (x, y) { return x + y; };
console.log(strAdd.add(strAdd.zeroValue, ' one'));
function printLength(arg) {
    console.log(arg.length);
    return arg;
}
console.log(printLength('爱你哟'));
console.log(printLength({ length: 10, value: 2 }));
