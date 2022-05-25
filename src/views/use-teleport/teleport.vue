<script lang="ts" setup>
import { reactive, ref } from 'vue';
</script>

<template>
  <!-- Teleport 是一个内置组件,可以将Teleport中包裹的部分传送到该组件dom层次之外的dom节点中,不影响其他结构的正常展示 -->
  <Teleport to="body">
    <div
      :style="{
        width: '200px',
        height: '100px',
        backgroundColor: 'springgreen',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }"
    >
      use-teleport-son
    </div>
  </Teleport>
</template>

<style scoped lang="scss"></style>
