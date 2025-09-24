/**
 * 已知function Foo(){this.a=1;}Foo.prototype.b=2; constf= new Foo();，请分析f.a、f.b、f. proto .a、f. proto .b、Foo.a、Foo.prototype.a的值分别是什
么，为什么?
 */

function Foo() {
	this.a = 1;
}
Foo.prototype.b = 2;
const f = new Foo();
console.log(f.a); // 1
console.log(f.b); // 2
console.log(f.__proto__.a); // undefined
console.log(f.__proto__.b); // 2
console.log(Foo.a); // undefined
console.log(Foo.prototype.a); // undefined
