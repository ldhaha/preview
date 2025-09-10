console.log('1');

setTimeout(() => {
	console.log('2');
	Promise.resolve()
		.then(() => {
			console.log('3');
			return new Promise(resolve => {
				console.log('4');
				setTimeout(() => {
					console.log('5');
					resolve('6');
				}, 40);
			});
		})
		.then(res => {
			console.log(res);
			setTimeout(() => {
				console.log('7');
			}, 0);
		});
}, 0);

Promise.reject('8')
	.catch(err => {
		console.log(err);
		return '9';
	})
	.then(async res => {
		console.log(res);
		await Promise.resolve()
			.then(() => {
				console.log('10');
				return new Promise(resolve => {
					setTimeout(() => {
						console.log('11');
						resolve('12');
					}, 30);
				});
			})
			.then(res => {
				console.log(res);
			});
		console.log('13');
	})
	.finally(() => {
		console.log('14');
	});

(async () => {
	console.log('15');
	await new Promise(resolve => {
		console.log('16');
		setTimeout(() => {
			console.log('17');
			resolve();
		}, 20);
	});
	console.log('18');
})();

setTimeout(() => {
	console.log('19');
	Promise.resolve()
		.then(() => {
			console.log('20');
			return Promise.reject('21');
		})
		.catch(err => {
			console.log(err);
			return '22';
		})
		.then(res => {
			console.log(res);
			return new Promise(resolve => {
				console.log('23');
				setTimeout(() => {
					console.log('24');
					resolve('25');
				}, 10);
			});
		})
		.then(res => {
			console.log(res);
		});
}, 10);
