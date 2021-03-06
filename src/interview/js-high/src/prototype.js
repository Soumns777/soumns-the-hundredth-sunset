/**
 * prototype
 */

// 构造函数
function Person(name) {
  this.name = name;
  this.age = 18;
  this.sayName = function () {
    console.log(this.name);
  };
}
// 第二步 创建实例
var person = new Person('person');

// new操作符的过程
// ①、创建一个实例对象
// ②、将构造函数中的属性复制到这个实例对象中(将构造函数的原型链和新创建的实例对象链接起来)
// ③、将构造函数的this指向这个实例对象
// ④、返回这个新创建的实例对象

// TODO 每个对象总有个 __proto__ 指向它的构造函数的原型对象
console.log(Object.prototype.toString.call(person.__proto__), '💙💛'); // [object Object]
console.log(person.__proto__ === Person.prototype); // true

// TODO 每个原型对象都有一个 constructor 指向他的构造函数
console.log(
  Object.prototype.toString.call(Person.__proto__.constructor),
  '💙💛'
); // [object Function]
console.log(Person.prototype.constructor === Person); // true

// TODO Person对象也是由Function构造函数而来
console.log(Object.prototype.toString.call(Person.__proto__), '💙💛'); // [object Function]
console.log(Person.__proto__ === Function.prototype); // true

// TODO 原型对象本身也是一个普通的对象,而所有的对象的构造函数都是Object
console.log(Object.prototype.toString.call(Person.prototype.__proto__)); // [object Object]
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Person.prototype.__proto__.constructor === Object); // true
console.log(person.__proto__.__proto__ === Object.prototype); // true

// TODO 所有的构造器都是函数对象,函数对象都是 Function 构造出来的
console.log(Object.prototype.toString.call(Object.__proto__)); // [object Function]
console.log(Object.__proto__ == Function.prototype, '💙💛'); // true
console.log(Object.__proto__.constructor === Function); // true

// TODO Object的原型对象上也有 __proto__ 指向 null,null是原型链的顶端
console.log(Object.prototype.toString.call(Object.prototype.__proto__)); // [object Null]
console.log(Object.prototype.__proto__, '💙💛'); // null

// FIXME: 原型链总结
// ①、所有的对象都有__proto__ 指向它的构造函数的原型对象
// ②、所有的原型对象都有 constructor 指向它的构造函数
// ③、所有的构造函数都是函数对象,都有 __proto__ 指向 Function的 prototype
// ④、所有的原型对象都是一个普通的对象,都有一个 __proto__ 指向 Object的  prototype
// ⑤、Object的__proto__会指向null
