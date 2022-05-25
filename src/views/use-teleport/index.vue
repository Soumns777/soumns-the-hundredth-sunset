<script lang="ts" setup>
import { reactive, ref } from 'vue';
import Telep from './teleport.vue';
</script>

<template>
  <div :style="{ width: '300px', height: '200px', backgroundColor: 'skyblue' }">
    use-teleport-father

    <Telep />
  </div>
</template>

<style scoped lang="scss"></style>
