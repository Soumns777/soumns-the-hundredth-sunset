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
console.log(arr.join(',')); // 1,splcie,3

console.log('⭐', arr);
