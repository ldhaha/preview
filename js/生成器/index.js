/**
 * 生成器：通过构造函数Generator创建的对象,既是迭代器(有next方法)，也是可迭代对象[Symbol.iterator]
 *
 * 生成器函数：function* 函数名(){}
 *
 * 每次调用next方法，就会运行函数里的代码，直到遇到yield关键字，返回yield后面的值，并且暂停函数的运行
 * 生成器函数可以有返回值，返回值出现在第一次done为true时的value属性中
 * 调用生成器的next方法时，可以传递参数，传递的参数会交给yield表达式的返回值第一次调用next方法时，传参没有任何意义
   在生成器函数内部，可以调用其他生成器函数，但是要注意加上*号
   生成器的其他API
   return方法:调用该方法，可以提前结束生成器函数，从而提前让整个迭代过程结束throw方法:调用该方法，可以在生成器中产生一个错误
 */

function* gen() {
	yield 1;
	yield 2;
	yield 3;
} // 生成器函数，只是为了给生成器每次迭代提供数据
const generator = gen(); // 不会运行函数里的代码，只是返回一个生成器对象

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: undefined, done: true}

function* gen2() {
	const a = yield 1;
	yield 2 + a;
	yield 3;
} // 生成器函数，只是为了给生成器每次迭代提供数据
const generator2 = gen2(); // 不会运行函数里的代码，只是返回一个生成器对象
console.log(generator2.next()); // {value: 1, done: false}
console.log(generator2.next(10)); // {value: 12, done: false}    10会赋值给a
console.log(generator2.next()); // {value: 3, done: false}
console.log(generator2.next()); // {value: undefined, done: true}
console.log(generator2.next(100)); // {value: undefined, done: true}

function* gen3() {
	yield 1;
	return 2;
}
const generator3 = gen3();
console.log(generator3.next()); // {value: 1, done: false}
console.log(generator3.next()); // {value: 2, done: true}
console.log(generator3.next()); // {value: undefined, done: true}

function* gen4() {
	yield 1;
	return 2;
}

function* gen5() {
	yield* gen4();
	yield 1;
	yield 2;
}
const generator5 = gen5();
console.log(generator5.next()); // {value: 1, done: false}
console.log(generator5.next()); // {value: 2, done: false}
console.log(generator5.next()); // {value: 1, done: false}
console.log(generator5.next()); // {value: 2, done: false}
console.log(generator5.next()); // {value: undefined, done: true}
