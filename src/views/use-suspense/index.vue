<script lang="ts" setup>
import { reactive, ref } from 'vue';
// import Susp from './suspense.vue'; // 静态加载
const Susp = defineAsyncComponent(() => import('./suspense.vue')); // 异步加载
</script>

<template>
  <div class="father-box">
    use-suspense

    <!-- Suspense 是一个内置组件,用来在组件树中编排异步依赖.它可以在等待组件树下的多个嵌套异步依赖解析完成时,呈现加载状态。  -->
    <!-- 简单来说,即当数据请求组件在加载而无法渲染时暂时用加载状态来代替,直到数据加载完成渲染数据 -->
    <Suspense>
      <!-- 默认插槽 展示的是想要展示的模块 -->
      <template #default>
        <Susp></Susp>
      </template>

      <!-- fallback插槽 展示的是当数据请求未完成时的加载状态模块  -->
      <template #fallback> <div>数据正在加载中</div> </template>
    </Suspense>
  </div>
</template>

<style scoped lang="scss">
.father-box {
  @include father-box();
}
</style>
