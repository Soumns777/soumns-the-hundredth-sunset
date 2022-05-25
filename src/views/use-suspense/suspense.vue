<script lang="ts" setup>
import { reactive, ref } from 'vue';
</script>

<template>
  <div class="son-box">Suspense</div>
</template>

<style scoped lang="scss">
.son-box {
  @include son-box();
}
</style>
