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
console.log(arr, arr1, '💙💛 深拷贝 JSON.parse(JSON.stringify())');

// ②、cloneDeep  lodash
console.log(arr === cloneDeep(arr), '💙💛 cloneDeep'); // false
