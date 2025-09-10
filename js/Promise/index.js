// new Promise((resolve, reject) => {
// 	console.log('123');
// })
// 	.then(res => {
// 		console.log(res);
// 	})
// 	.then(res => {
// 		console.log(res);
// 	});
// // 全部挂起，没有打印

// const p1 = new Promise((resolve, reject) => {
// 	resolve('2');
// });
// // 没有处理resolve,第二个就仍然是fulfilled 2
// const p2 = p1.catch(res => {
// 	console.log(res);
// 	return 3;
// });
// const p3 = p2.then(res => {
// 	console.log(res);
// 	return 5;
// });

// // p3 是fulfilled 5 p4么有处理所以仍然是fulfilled 5
// const p4 = p3.catch(err => {
// 	console.log(err);
// 	return 4;
// });
// const p5 = p4.then(res => {
// 	console.log(res);
// });
// setTimeout(() => {
// 	console.log(p1, p2, p3, p4, p5);
// });

// const p6 = new Promise((resolve, reject) => {
// 	resolve('123');
// })
// 	.catch(res => {
// 		console.log(res);
// 	})
// 	.then(res => {
// 		console.log(res);
// 		throw 3;
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});
// setTimeout(() => {
// 	console.log();
// }, 2000);

// new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('456');
// 	}, 2000);
// })
// 	.then(res => {
// 		console.log(res);
// 		return 7;
// 	})
// 	.finally(res => {
// 		console.log(res, 'finally');
// 	});

//    start
//    async1 start
//    promise1
//    script end
//    async2
//    async1 end
//    promise2
// settimeoutå

async function async1() {
	console.log('async1 start');
	await async2();
	console.log('async1 end');
}
async function async2() {
	console.log('async2');
}
console.log('script start');

async1();

console.log('script end');
