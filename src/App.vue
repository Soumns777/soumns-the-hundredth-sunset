<script setup lang="ts"></script>

<template>
  <div class="container">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
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
