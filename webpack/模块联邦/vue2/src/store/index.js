// 简单的共享状态管理
const store = {
	data: {
		message: '来自 vue2 应用的共享数据',
		timestamp: new Date().toLocaleTimeString(),
	},
	updateMessage(newMessage) {
		this.data.message = newMessage;
		this.data.timestamp = new Date().toLocaleTimeString();
		return this.data;
	},
	getData() {
		return this.data;
	},
};

export default store;
