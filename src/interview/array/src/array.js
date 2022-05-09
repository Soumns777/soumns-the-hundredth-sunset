/**
 * 数组
 */

// 一、增删改查

let arr = [1, 2, 3];

// 增 push、unshift 改变原数组
arr.push(4);

arr.unshift(0);

// console.log(arr.push(4)).unshift(0);  // arr.push(4) 返回的是4,不支持链式结构

// 删 pop、shift 改变原数组

arr.pop(); // pop 删除数组最后一个元素,且arr.pop()返回这个元素的值

arr.shift(); // shift 删除数组第一个元素,且arr.shift()返回这个元素的值

// 改 splice splice 通过对数组的修改,第一个参数为索引,第二个书参数为是否删除数组元素(若为0,则表示不删除元素,此时如果第三个元素有值,则表示在当前索引新增该元素),第三个参数为新增值
// arr.splice(1, 1)返回包裹被删除元素的数组,如果是新增则返回空数组
arr.splice(1, 1);
arr.splice(1, 0, 'splcie');

// concat 不改变原数组,返回合并后的数组
// console.log(arr.concat(JSON.parse(JSON.stringify(arr)))); // [ 1, 'splcie', 3, 1, 'splcie', 3 ]

// slice 不改变原数组,返回修改后的数组 第一个参数为开始索引,第二个参数为结束索引,若没有第二个参数,则默认提取开始索引到数组末尾的所有元素组成的数组
// 若索引为负数,则表示索引从数组末尾开始
// console.log(arr.slice(1, 3)); // [ 'splcie', 3 ]

//  join 不改变原数组,将数组转换成字符串
// console.log(arr.join(',')); // 1,splcie,3

// console.log('⭐', arr);

// TODO forEach、map、filter、findIndex、find、slice、splice
let array = [
  {
    name: 'iu',
    age: 18,
  },
  {
    name: 'yoona',
    age: 19,
  },
  {
    name: 'lisa',
    age: 18,
  },
];

//  forEach 返回值:un
console.log(
  array.forEach((item) => {
    item.sex = '女';
  }),
  '🍏 map'
); // un

// map 返回值:一个由原数组每个元素执行回调函数的结果组成的数组,
console.log(
  array.map((item) => {
    return {
      sex: item.sex,
    };
    // item.sex = '男'; // 如果map没有return的话会依次返回一个由undefined构成的数组 [un,un,un]
  }),
  '🍏 map'
); // [{ sex: '女' }, { sex: '女' }, { sex: '女' }];

// filter  返回值:返回一个由新的、符合条件的元素构成的数组,如果没有符合条件的则返回一个空数组
console.log(
  array.filter((item) => {
    return item.age == 18;
  }),
  '🍏 filter'
);

// some 判断是否有一个元素满足条件，会返回一个布尔值
console.log(
  array.some((item) => {
    return item.age == 19;
  }),
  '🍏 some'
); // true

// every 判断是否所有元素都满足条件，会返回一个布尔值
console.log(
  array.every((item) => {
    return item.age == 19;
  }),
  '🍏 every'
); // false

// find 返回值:返回第一个符合条件的元素,如果没有的话返回undefined

console.log(
  array.find((item) => {
    return item.age == 18;
  }),
  '🍏 find'
);

// findIndex 返回值:返回一个第一个符合条件的元素的索引,如果没有符合的话则返回undefined
console.log(
  array.findIndex((item) => {
    return item.age == 18;
  }),
  '🍏 findIndex'
);

// slice(开始索引,结束索引) 返回值:返回一个切割完成的数组 此方法不会改变原数组
console.log(array.slice(1, 2), '🍏 slice');

// splice(开始索引,切割项数<可选>,新增项<可选>) 返回值:返回一个切割完成的数组 此方法会改变原数组
// console.log(array.splice(1, 2), '🍏 splice');

console.log(array.splice(1, 2, '888'), '🍏 splice');
console.log(array);
