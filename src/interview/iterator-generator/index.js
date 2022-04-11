/**
 * 迭代器 iterator
 */

// Array
const arr = [
  '章若楠',
  '李沁',
  '孙千',
  '严屹南',
  'yoona',
  'iu',
  'lisa',
  'krystal',
];

for (const iterator of arr) {
  console.log(iterator);
}

// Object

const obj = {
  uname: '严屹南',
  age: 18,
  gender: '女',
};

// 函数后面的*表示这是一个 Generator (生成器)
obj[Symbol.iterator] = function* () {
  yield 'uname';
  yield 'age';
  yield 'gender';
};

for (const iterator of obj) {
  console.log(iterator); // uname age gender
  console.log(obj[iterator]); // 严屹南 18 女
}

// console.log([...obj]); // ['uname', 'age', 'gender']
