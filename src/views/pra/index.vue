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

// FIXME: reactive
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

const native = reactive({
  website: 'golden state',
});

const website = toRef(native, 'website');

function func(prop: Ref<string>): void {
  prop.value += '  fly';
  console.log(prop.value, '🍉');
}

func(website);
console.log(native.website, '🍉'); // golden state

// reactive 深层响应性
let proxyDeep: any = reactive({});
const golden = {};
proxyDeep.golden = golden;

console.log(
  proxyDeep.golden,
  golden,
  proxyDeep.golden === golden,
  '💙 深层响应'
); // proxy{}  {}  false

// reactive 重置代理
let classmate = reactive({
  name: 'yoona',
});
classmate = reactive({
  name: 'iu',
});

console.log(classmate, '🍊 reactive重置代理');

// FIXME: ref

const numRef: Ref<number> = ref(7);
console.log(numRef.value);

//  $ref 语法糖
let count: number = $ref(10);
count++;
console.log(count, '🍊 $ref 响应式语法糖');

// 对象解构出ref不会失去响应性
const animal: {
  name: Ref<string>;
  age: Ref<number>;
} = {
  name: ref('taidi'),
  age: ref(7),
};

let { name, age } = animal;

name.value = 'keji';
age.value = 8;

type Name = typeof name; // Ref<string> 没有失去响应性
type Age = typeof age; // Ref<number> 没有失去响应性
console.log(animal.name, animal.age, '🍊 ref 解构'); // proxy{}  proxy{}

function changeNmae(name: Ref<string>) {
  name.value = 'xueqiaoquan';
  console.log(animal.name, '🍊  ref作为函数参数'); // proxy{} 没有失去响应性
}

changeNmae(animal.name);

const countRef: Ref<string> = ref('pra-child');
const otherRef: Ref<number> = ref(999);
const others = '111';
const fatherRef = ref<InstanceType<typeof praChild> | null>(null);
onMounted(() => {
  console.log(fatherRef.value?.sonExpose, '🍊 defineExpose');
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
    <input type="number" v-model="others" />
    <praChild
      v-model:countRef="countRef"
      v-model:otherRef="otherRef"
      v-model:others="others"
      ref="fatherRef"
    />
  </div>
</template>

<style scoped lang="scss">
.blue-btn {
  @include blue-btn();
}
</style>
