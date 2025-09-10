const test = async () => {
	console.log('123213');
	await new Promise((resolve, reject) => {
		console.log('123');
		resolve('123');
	});
	console.log('456');
};
test();
