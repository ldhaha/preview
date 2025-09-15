async function async1() {
	console.log('async1 start');
	await async2();
	console.log('async1 end');
}

async function async2() {
	console.log('async2');
}

console.log('script start');

setTimeout(() => {
	console.log('setTimeout');
});

async1();

new Promise(resolve => {
	console.log('promise1');
	resolve();
}).then(function () {
	console.log('promise2');
});
console.log('script end');

// script start   async1 start async2 start a  promise1 script end sync1 end    promise2   setTimeout
