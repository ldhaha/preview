/** 
console.log('start');
async function foo() {
	await Promise.resolve(1).then(res => {
		console.log(res);
	});
}
foo();
console.log('script');

start script 1

*/

/** 
console.log('start');

async function bar() {
	const n = await Promise.resolve(1);
	return n;
}

async function foo() {
	const res = await bar();
	console.log(res);
}

foo();
console.log('end');

start end 1
*/

// promise1 undefined end promise1 resolve promsie2 promise3 promise4 pending after1

// 宏任务 set 1000

var a;
var b = new Promise((resolve, reject) => {
	console.log('promise1');
	setTimeout(() => {
		resolve('promise1 resolve');
	}, 1000);
})
	.then(() => {
		console.log('promise2');
	})
	.then(() => {
		console.log('promise3');
	})
	.then(() => {
		console.log('promise4');
	});

a = new Promise(async (resolve, reject) => {
	console.log(a);
	/**
	 * b.then(() => {})
	 */
	await b;
	console.log(a);
	console.log('after1');
	await a;
	resolve(true);
	console.log('after2');
});

console.log('end');
