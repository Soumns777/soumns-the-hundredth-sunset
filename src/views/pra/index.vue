<script lang="ts" setup>
import {
  reactive,
  toRefs,
  toRef,
  ref,
  Ref,
  ReactiveEffect,
  onMounted,
  onUnmounted,
} from 'vue';
import praChild from '@/views/pra/child.vue';
import { $ref, $, $$, $toRef, $computed } from 'vue/macros';
import { IPerson } from '@/types';
import { useMouse } from '@/utils/useMouse';

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

// changeNmae(animal.name);

// ref解包
const jiebaoRef: Ref<string> = ref('解包');

// 深层响应式对象里的ref会自动解包,导致ref类型是解包后的string
const jiebaoRef1: {
  steal: string;
} = reactive({
  steal: ref('深层解包'),
});

// 不是深层响应式对象不会发生解包
const jiebaoRef2: {
  steal: Ref<string>;
} = {
  steal: ref('深层解包'),
};

const { steal } = jiebaoRef2;

// ref 重新赋值会替换之前的ref对象
const reviewRef = ref('review');

const reviewRef1 = ref('review1');

let otherReview = reviewRef;
otherReview = reviewRef1;

reviewRef.value = 'review change';

console.log(otherReview, '🍊 ref重新赋值'); // proxy{} review1 不会失去响应性,可以被替换

//  $ref 语法糖
let count: number = $ref(10);
count++;
console.log(count, '🍊 $ref 响应式语法糖');
// $$ 恢复 $ref 的类型,作为函数的参数
const yoona = $ref('yoona');
changeNmae($$(yoona));

// 使用 $ref + $$ 作为函数的返回值(利用$ref语法糖创建ref对象,并用$$避免响应式语法糖的类型问题)
const { x, y } = $(useMouse());
console.log('x:', x, 'y:', y);

// 可以使用 $$将$ref创建的响应式对象重新转为Ref类型
function useLocation() {
  let lat = $ref(0);
  let lon = $ref(0);

  return new Promise((resolve, reject) => {
    resolve(
      $$({
        lat,
        lon,
      })
    );
  });
}
useLocation().then((res) => {
  console.log(res, '🍊 location');
});

// 当返回
function useEverything() {
  return ref({
    a: 1,
    b: 2,
  });
}

let everything = useEverything();

console.log(everything, '🍊 everything');

// 组件传值
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

    {{ jiebaoRef }} -- {{ jiebaoRef1.steal }} -- {{ jiebaoRef2.steal }} --{{
      steal
    }}

    x:{{ x }},y:{{ y }}

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
