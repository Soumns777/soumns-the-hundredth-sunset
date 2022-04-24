<script lang="ts" setup>
import {
  reactive,
  toRefs,
  toRef,
  ref,
  Ref,
  ReactiveEffect,
  onMounted,
} from 'vue';
import praChild from '@/views/pra/child.vue';
import { $ref, $ } from 'vue/macros';
import { IPerson } from '@/types';

interface IHomeWork {
  results: Array<number>;
  math: string;
  english: number;
}

const homeWork: IHomeWork = reactive({
  results: [99, 77, 66],
  math: ref('99'),
  english: ref(77),
});

setTimeout(() => {
  homeWork.results.push(55); // 可以监听到里层数据的响应式变化
}, 1000);

// toRefs 解构reactive保持响应式
let { math, english } = toRefs(homeWork);
math.value += '真的很棒';
console.log(homeWork.math); // 99真的很棒

// let english = toRef(homeWork, 'english');
// english.value += 9;
// console.log(homeWork.english); // 86

// 响应式对象和代理不完全相等
const person = {};
const personProxy = reactive(person);
console.log(person === personProxy); // false

// 对同一个对象使用代理返回的数据是一致的
console.log(reactive(person) === personProxy); // true

// 对已经是一个对象的代理使用代理返回的数据也是一致的
console.log(reactive(personProxy) === personProxy); // true
let count: number = $ref(10);

count++;

// console.log(count, '$ref 响应式语法糖');

const countRef: Ref<string> = ref('pra-child');

const otherRef: Ref<number> = ref(999);

const fatherRef = ref<InstanceType<typeof praChild> | null>(null);

onMounted(() => {
  // console.log(fatherRef.value?.sonExpose, '🍊 defineExpose');
});
</script>

<script lang="ts">
export default {
  name: 'pra',
};
</script>

<template>
  <div>
    Pra

    {{ math }} -- {{ english }}

    <ul>
      <li v-for="(item, idx) in homeWork.results" :key="idx">{{ item }}</li>
    </ul>

    <button class="blue-btn" @click="$router.push({ name: 'home' })">
      TO HOME
    </button>

    <input type="text" v-model="countRef" />
    <input type="number" v-model="otherRef" />

    <praChild
      v-model:countRef="countRef"
      v-model:otherRef="otherRef"
      ref="fatherRef"
    />
  </div>
</template>

<style scoped lang="scss">
.blue-btn {
  @include blue-btn();
}
</style>
