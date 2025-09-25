class EventEmitter {
	constructor() {
		this.events = {};
	}

	on(eventName, fn) {
		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}
		this.events[eventName].push(fn);
	}

	emit(eventName, ...args) {
		if (this.events[eventName]) {
			this.events[eventName].forEach(fn => fn(...args));
		}
	}
	off(eventName, fn) {
		if (this.events[eventName]) {
			this.events[eventName] = this.events[eventName].filter(item => item !== fn);
		}
	}
}
