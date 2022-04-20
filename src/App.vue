<script setup lang="ts">
import { provide, ref, InjectionKey } from 'vue';
import { BgColorKey } from './types';

const colorRef = ref('#ff6100');

const setColor = (color: string): void => {
  colorRef.value = color;
};

provide(BgColorKey, {
  color: colorRef,
  setColor,
});
</script>

<template>
  <div class="container">
    <div class="container-bg"></div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>

    <!-- <router-view></router-view>-->
    <!-- <addRouter/>-->
  </div>
</template>

<style lang="scss" scoped>
/* 引入sass变量 */
/* .container {
  background-color: $background-color;

  @include children-page()
} */

.container-bg {
  width: 200px;
  height: 100px;
  background-color: v-bind(colorRef);
}
</style>
