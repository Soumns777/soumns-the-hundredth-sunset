/**
 * let、var、const
 */

// TODO 一、var
// ①、var具有变量提升,可以在var声明变量前获取
// ②、var是全局作用域下的,声明的属性属于window下
// ③、var可以进行重复声明
console.log(a, '💙💛');
var a = 10;
var a = 11;
console.log(window.a, 'var 全局作用域'); // 11

// TODO 二、let
// ①、let具有块级作用域
for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log(i, 'let 块级作用域💙💛');
  }, i * 1000); // 每隔 i s打印
}
// ②、let不能在变量声明前进行声明,否则会出现暂时性死区

// console.log(b); // let-var-const.js?t=1653288745820:22 Uncaught ReferenceError: Cannot access 'b' before initialization
let b = 99;

// ③、let不允许重复声明变量
// let b = 100; // Uncaught SyntaxError: Identifier 'b' has already been declared

// TODO 三、const

// ①、const具有块级作用域,和let类似

// ②、const没有变量提升,不能在变量声明前进行使用,会出现暂时性死区
// console.log(c);
const c = 99;

// ③、const不能进行重复声明变量

// ④、const一般用于定义固定的常量,不能进行再次修改,但是如果是引用数据类型的数据也是可以进行重新赋值的
// c = 100;

const person = {
  name: 'iu',
};

// 引用数据类型可以进行添加属性
person.age = 17;

console.log(person, 'const 引用数据类型可以进行添加属性');

// 但是不能进行重新赋值
// person = {
//   age: 17,
// };
// Uncaught TypeError: Assignment to constant variable.
