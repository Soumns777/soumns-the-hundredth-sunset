<script lang="ts" setup>
import { reactive, toRefs, ref, Ref, ReactiveEffect, onMounted } from 'vue';
import praChild from '@/views/pra/child.vue';
import { $ref } from 'vue/macros';
import { IPerson } from '@/types';

let total: IPerson = reactive({
  name: 'yoona',
  age: 19,
});

const { name, age } = toRefs(total);
console.log(name, age, '💫 toRefs使reactive解构出来的数据重新获取响应性');

let count: number = $ref(10);

count++;

console.log(count, '$ref 响应式语法糖');

const countRef: Ref<string> = ref('pra-child');

const otherRef: Ref<number> = ref(999);

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
