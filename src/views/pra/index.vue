<script lang="ts" setup>
import { reactive, toRefs, ref, Ref, ReactiveEffect } from 'vue';
import { $ref } from 'vue/macros';
import { IPerson } from '@/types';

let totalRef: Ref<string | number> = ref('77');

let total: IPerson = reactive({
  name: 'yoona',
  age: 19,
});

const { name, age } = toRefs(total);
console.log(name, age, '💫 toRefs使reactive解构出来的数据重新获取响应性');

let count: number = $ref(10);

count++;

console.log(count, '$ref 响应式语法糖');
</script>
<script lang="ts">
export default {
  name: 'pra',
};
</script>

<template>
  <div>
    Pra

    <button class="blue-btn" @click="$router.push({ name: 'home' })">
      TO HOME
    </button>

    {{ totalRef }}
  </div>
</template>

<style scoped lang="scss">
.blue-btn {
  @include blue-btn();
}
</style>
