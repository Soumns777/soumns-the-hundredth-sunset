<script setup lang="ts">
import { inject, onMounted, reactive, ref, Ref } from 'vue';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
import { BgColor, BgColorKey } from '@/types';
const props = defineProps({
  home: {
    required: false,
    type: String,
  },
});

console.log(props.home, '🍊 home');

interface Reactive {
  name: string;
  age: number;
}

const router = useRouter();
const route = useRoute();

// console.log(route.params, '🍊 route')
// console.log(router, '🍊 router')

const inpRef = ref(null);

const change = () => {
  console.log(inpRef.value, '🍊 inpRef');
};

onMounted(() => {
  const people: Reactive = reactive({
    name: 'iu',
    age: 17,
  });
});

/**
 * onBeforeRouteLeave配合setup语法糖
 */
onBeforeRouteLeave((to, from, next) => {
  console.log(to, from, '🍊 onBeforeRouteLeave');

  next();
});

/**
 * @desc provide、inject 类型
 */

// 提供默认值解决undefined
// const { color, setColor } = inject(BgColorKey, {
//   color: ref(''),
//   setColor: function () {},
// });

// 使用 as 类型解决undefined
const { color, setColor } = inject(BgColorKey) as BgColor;
console.log(color, '💚 provide inject');

console.log(color, '🍊 provide、inject');
</script>

<template>
  Home
  <button
    class="left-btn"
    @click="
      $router.push({
        name: 'list',
        params: { list: 'list', results: '测试数据' },
      })
    "
  >
    TO LIST
  </button>
  <button class="left-btn" @click="setColor('pink')">Change Color</button>

  <input type="text" v-model="inpRef" @input="change" />
</template>

<style lang="scss" scoped>
.left-btn {
  @include left-btn();
  margin-bottom: 30px;
}
</style>
