<script setup lang="ts">
import addRouter from '@/add-pinia/index.vue';
</script>

<template>
  <div class="container">
    <router-view></router-view>
    <!-- <addRouter/>-->
  </div>
</template>

<style lang="scss" scoped>
/* 引入sass变量 */
/* .container {
  background-color: $background-color;

  @include children-page()
} */
</style>
