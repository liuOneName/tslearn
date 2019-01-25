/**
 * 装饰器：装饰器求值后必须为一个函数，这个函数会在运行时调用，被装饰的声明信息作为参数传入。
 */
/**
 * 当多个装饰器在同一个声明上使用时：
 * 1.从上至下对装饰器表达式求值。
 * 2.求值的结果会被当做参数，由上向下传递。
 */