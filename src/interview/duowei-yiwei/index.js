/**
 * 多维数组转一维数组
 */

let arr = [1, 2, 3, 4, [5, 6]];
let arr1 = [1, 2, [3, 4], [5, 6, [7, 8, 9, [10, 11]]]];

// concat
console.log([].concat(...arr));
console.log(Array.prototype.concat.apply([], arr));

// flat
let newArr = arr1.flat(Infinity);

console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// reduce + 递归
function Flat(arr = []) {
  return arr.reduce((t, v) => t.concat(Array.isArray(v) ? Flat(v) : v), []);
}

console.log(Flat(arr1), '💙 reduce'); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

/**
 * reduce 拓展
 */

// Array.reduce((t, v, i, a) => {}, initValue);
// initValue 初始值(可选)
// t 累计器完成计算的返回值(必选)
// v 当前元素 (必选)
// i 当前元素的索引 (可选)
// a 当前元素所属的数组对象 (可选)

//  reduce 代替filter

console.log(
  newArr.filter((item) => item > 7),
  '💙 filter'
); // [8, 9, 10, 11]

console.log(
  newArr.reduce((t, v) => (v > 7 ? [...t, v] : t), []),
  '💙 reduce'
); // [8, 9, 10, 11]

// reduce 代替 map
console.log(
  newArr.map((item) => item * 2),
  '💙 map'
); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]

console.log(
  newArr.reduce((t, v) => [...t, v * 2], []),
  '💙 reduce'
); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]

// reduce 数组去重
console.log(
  [1, 2, 1, 2, 3, 4, 3].reduce((t, v) => (t.includes(v) ? t : [...t, v]), [])
); // [1, 2, 3, 4]
