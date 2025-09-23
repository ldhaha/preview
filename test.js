console.log('start');
new Promise((resolve, reject) => {
	resolve('123');
}).then(() => {
	setTimeout(() => {
		Promise.resolve('456').then(res => {
			console.log(456);
		});
	}, 1000);
});

setTimeout(() => console.log('ld'), 2000);
console.log('script end');
