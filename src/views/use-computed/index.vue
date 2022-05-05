<script lang="ts" setup>
import { type } from 'os';
import {
  reactive,
  toRef,
  ref,
  Ref,
  computed,
  ReactiveEffect,
  onMounted,
  onUnmounted,
} from 'vue';

import { $ref, $, $$, $toRef, $computed } from 'vue/macros';

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
console.log(project, star); // Ref Ref

function starHigh1() {
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
}

// function遍历对象
function compare<T extends IStar>(project: T) {
  for (const key in project) {
    console.log(project[key], '🍉 ts中遍历对象');
  }
}

compare(stars);
</script>

<template>
  <div>{{ project }}⭐{{ star }}</div>
  <div>{{ starHigh1().project.value }}⭐{{ starHigh1().star.value }}</div>
</template>

<style scoped lang="scss"></style>
