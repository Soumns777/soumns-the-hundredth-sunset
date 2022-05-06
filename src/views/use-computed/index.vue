<script lang="ts" setup>
import {
  reactive,
  toRef,
  ref,
  Ref,
  computed,
  ReactiveEffect,
  onMounted,
  onUnmounted,
  watch,
  watchEffect,
  watchPostEffect,
} from 'vue';

import { $ref, $, $$, $toRef, $computed } from 'vue/macros';

import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from '@ant-design/icons-vue';

import { AlarmClock } from '@element-plus/icons-vue';

// ref语法糖
let person = reactive({
  name: 'iu',
  age: 16,
});

// $toRef
let age = $toRef(person, 'age');
age++;
console.log(age, '🍊 $toRef'); // 17

// $computed
const ageRise = $computed(() => {
  return age * 2;
});

console.log(ageRise, '🍊 $computed'); // 34

// computed 依赖于监听的依赖的变化,而且会缓存上一次的结果,而方法则是每次触发都会重新计算结果
interface IStar {
  vue2: number;
  vue3: number;
  [key: string]: any; // 遍历对象添加string属性
}
const stars: IStar = reactive({
  vue2: 7999,
  vue3: 1999,
  //   vue4Beta:10000
});

interface IStarCom {
  project: Ref<string>;
  star: Ref<number>;
}
let starHigh = $computed<IStarCom>(() => {
  let star = $ref(0);
  let project = $ref('');
  for (const key in stars) {
    if (stars[key] > star) {
      star = stars[key];
      project = key;
    }
  }

  return $$({
    project,
    star,
  });
});

// 这里因为computed返回的是一个ref对象,所以需要从.value提取出project和star属性
const { project, star } = starHigh;
console.log(project, star, '🍉 computed'); // Ref Ref

//  function 页面每次刷新都会重新计算,消耗性能
function starHigh1() {
  let star1 = $ref(0);
  let project1 = $ref('');
  for (const key in stars) {
    if (stars[key] > star1) {
      star1 = stars[key];
      project1 = key;
    }
  }

  return $$({
    project1,
    star1,
  });
}

let { project1, star1 } = starHigh1();
console.log(project1, star1, '🍉 function'); // Ref Ref

// function遍历对象
function compare<T extends IStar>(project: T) {
  for (const key in project) {
    console.log(project[key], '🍉 ts中遍历对象');
  }
}

compare(stars);

// computed getter setter 可写计算属性
let firstName = $ref('Stephen');
let lastName = $ref('Curry');
let fullName = $computed({
  get() {
    return firstName + '-' + lastName;
  },
  // fullName更改时会触发计算属性的setter,从而将最新的值赋值给firstName和lastName
  set(newVal: string) {
    [firstName, lastName] = newVal.split(' ');
  },
});

setTimeout(() => {
  fullName = 'Lebron James';
}, 1000);

// watch
let ageVal = $ref('');
let completeDesc = $ref('');
let iu = reactive({
  age: 19,
});

const stopWatchAgeVal = watch(
  // () => iu.age,
  () => ageVal,
  (newVal, oldVal) => {
    if (newVal.length % 2 == 0 && newVal.length != 0) {
      completeDesc = ' iu今年' + newVal + '岁了';
    } else {
      completeDesc = 'Error!';
    }
  },
  { immediate: true }
);

// 清除定时器
// setTimeout(() => {
//   stopWatchAgeVal();
// }, 3000);

const exaRef = ref('');
let example = reactive({
  age: 17,
});
let example1 = $ref(11);
let example2 = $ref(22);

// 监听一个ref
watch(
  exaRef,
  (newValue, oldValue) => {
    console.log(newValue, oldValue, '🍓 watch ref'); // exaRef
  },
  {
    immediate: true,
  }
);

// 监听函数返回值,即getter函数
watch(
  () => example1 + example2,
  (newValue, oldValue) => {
    console.log(newValue, oldValue, '🍓 watch getter function '); // 333 33
  },
  {
    immediate: true,
  }
);

// 监听一个响应式对象
watch(
  example,
  // 响应式对象的新值改变,旧的值也会跟着改变
  (newValue, oldValue) => {
    console.log(newValue, oldValue, '🍓 watch reactive'); // Proxy{age:23}  Proxy{age:23}
  },
  {
    immediate: true,
  }
);

// 监听一个响应式对象的属性时需要用getter函数,不能直接进行监听
watch(
  () => example.age,
  (newValue, oldValue) => {
    console.log(newValue, oldValue, '🍓 watch reactive property'); // 23 17
  },
  {
    immediate: true,
  }
);

// 监听一个由以上属性构成的数组
watch(
  [exaRef, () => example1 + example2, example, () => example.age],
  (newValue, oldValue) => {
    console.log(newValue, oldValue, '🍓 watch all property'); // ['exaRef',333,Proxy{age:23},23]
  },
  {
    immediate: true,
  }
);

setTimeout(() => {
  example.age = 23;
  example1 = 111;
  example2 = 222;
  exaRef.value = 'exaRef';
}, 1000);
</script>

<template>
  <div>{{ project }}⭐{{ star }}</div>
  <div>{{ project1 }}⭐{{ star1 }}</div>

  <a-input v-model:value="ageVal" />
  <a-input v-model:value="iu.age" />

  <div>{{ completeDesc }}</div>
  <div>
    {{ fullName }}
  </div>
</template>

<style scoped lang="scss"></style>
