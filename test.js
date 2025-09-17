function Person(name) {
	this.name = name;
}
Person.prototype.sayName = function () {
	console.log(this.name);
};

function Child(name, age) {
	Person.call(this, name);
	this.age = age;
}

Child.prototype = Object.create(Person.prototype);
Child.prototype.constructor = Child;
const child = new Child('张三', 18);
console.log(child.name);
console.log(child.age);
child.sayName();
export { Person };
