<script setup lang="ts">
import { onMounted, ref, reactive, onBeforeUpdate } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const props = defineProps({
  list: {
    required: true,
    type: String,
  },
  results: {
    required: true,
    type: String,
  },
});

/**
 * onBeforeRouteUpdate配合setup语法糖
 */
onBeforeRouteUpdate((to, from, next) => {
  console.log(to, from, '🍎  onBeforeUpdate');
  next();
});

console.log(props.list, props.results, '🍎 list');

const inpRef = ref('');
</script>

<script lang="ts">
export default {
  name: 'list',
};
</script>

<template>
  List
  <button
    class="left-btn"
    @click="$router.push({ name: 'home', params: { home: 'home' } })"
  >
    TO HOME
  </button>

  <button
    class="left-btn"
    @click="
      $router.push({
        name: 'list',
        params: { list: 'list', results: '测试数据11' },
      })
    "
  >
    onBeforeRouteUpdate
  </button>

  <input type="text" v-model="inpRef" />
</template>

<style lang="scss" scoped>
.left-btn {
  @include left-btn();
  margin-bottom: 30px;
}
</style>
