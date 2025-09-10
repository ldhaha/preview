const p1 = new Promise((resolve) => {
  resolve("resolve1");
})
  .then((res) => {
    console.log(res);
    return new Promise((resolve) => {
      resolve(2);
    })
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        new Promise((resolve) => {
          resolve("finally1");
        }).then((res) => {
          console.log(res);
        });
      });
  })
  .finally((res) => {
    console.log("finally", res);
  });

// Promise.resolve()
// 	.then(() => {
// 		console.log('task1');
// 		Promise.resolve()
// 			.then(() => console.log('task3'))
// 			.finally(() => {
// 				console.log('finally1');
// 			});
// 		Promise.resolve()
// 			.then(() => console.log('task4'))
// 			.finally(() => {
// 				console.log('finally2');
// 			});
// 	})
// 	.then(() => {
// 		console.log('task2');
// 	})
// 	.finally(() => {
// 		console.log('finally');
// 	});
// 输出顺序: task1,  task3, task4 task2
