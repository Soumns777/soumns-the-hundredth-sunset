/**
 * 深拷贝和浅拷贝
 */

import { cloneDeep } from 'lodash';

// 浅拷贝
let person = {
  name: 'iu',
  age: 17,
};

function shallowClone(obj) {
  let newobJ = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newobJ[key] = obj[key];
    }
  }

  return newobJ;
}

let newPerson = shallowClone(person);

person.gender = '女';
console.log(newPerson, '💙💛 浅拷贝'); // {name:'iu',age:17}

// 浅拷贝其他应用

// Object.assign
console.log(Object.assign({}, person));
// 扩展运算符
console.log({ ...person });

// 深拷贝

// ①、JSON.parse(JSON.stringify(arr)) 不能对 undefined、symbol、函数进行拷贝
let arr = {
  gender: '男',
  change: () => {},
};

let arr1 = JSON.parse(JSON.stringify(arr));

arr['age'] = 99;
console.log(arr1, '💙💛 深拷贝 JSON.parse(JSON.stringify())');

// ②、cloneDeep  lodash
let arr2 = cloneDeep(arr);

arr['name'] = 'iu';
console.log(arr2, '💙💛 cloneDeep'); // {change:()={},gender:'男' }

// ③、手动递归循环 深拷贝
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== 'object') return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
