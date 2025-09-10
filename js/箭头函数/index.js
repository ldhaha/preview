/*
回顾:this指向
1.通过对象调用函数，this指向对象.
2.直接调用函数，this指向全局对象
3.如果通过new调用函数，this指向新创建的对象
4.如果通过apply、ca11、bind调用函数，this指向指定的数据
5.如果是DOM事件函数，this指向事件源

箭头函数是一个函数表达式，没有自己的this，arguments，如果使用了，则是外层的，不能通过bind，call，apply调用
箭头函数的this指向是定义时的上下文，不是调用时的上下文
*/

const obj = {
	count: 0,
	say() {
		setTimeout(() => {
			console.log(this.count);
		}, 0);
	},
};

const say = obj.say;
say(); // undefined
