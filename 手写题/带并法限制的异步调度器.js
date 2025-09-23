class Scheduler {
	constructor(max = 2) {
		this.max = max;
		this.taskList = [];
		this.runCount = 0;
	}

	addTask(promiseFun) {
		return new Promise((resolve, reject) => {
			this.taskList.push({
				promiseFun,
				resolve,
				reject,
			});
			this.runTask();
		});
	}

	runTask() {
		if (this.runCount >= this.max) {
			return;
		}
		this.runCount++;
		const { promiseFun, resolve, reject } = this.taskList.shift();
		promiseFun()
			.then(res => {
				resolve(res);
				this.runCount--;
				this.runTask();
			})
			.catch(err => {
				reject(err);
				this.runCount--;
				this.runTask();
			});
	}
}
