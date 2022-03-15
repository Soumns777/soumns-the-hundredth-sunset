<script lang="ts" setup>
import { reactive } from 'vue';
import { useStore } from '@/store/index';
import { storeToRefs } from 'pinia';

const store = useStore();

// const {name} = {...useStore()} // 直接解构会失去响应性
const { user, firstName, nextName } = storeToRefs(store); // 使用pinia的storeToRefs可以保持数据响应式

console.log('🎈 pinia响应式state', user);
console.log('🎈 pinia响应式getters', firstName, nextName);

store.changeName({ name: 'lisa', age: 18 }); // actions
store.changeNameNow({ name: 'yoona', age: 22 });

console.log(
  '🎈 pinia-persistedstate-plugin',
  JSON.parse(window.localStorage.getItem('pinia') as string)
);
</script>

<template>
  <div></div>
</template>

<style scoped lang="scss"></style>
