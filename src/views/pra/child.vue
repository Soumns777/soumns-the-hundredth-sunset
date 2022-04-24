<script lang="ts" setup>
import { stringify } from 'querystring';
import { reactive, toRefs, ref, Ref } from 'vue';

// 一、defineProps 接收类型
const props = defineProps({
  countRef: {
    type: String,
    required: false,
  },
  otherRef: {
    type: Number,
    required: false,
  },
});

// console.log(props.countRef, props.otherRef, '🌈 defineProps');

// 二、使用interface控制defineProps 接收类型
// interface IProps {
//   countRef?: string;
//   otherRef?: number;
// }

// const props = defineProps<IProps>();

// const { countRef, otherRef } = toRefs(props);

// console.log(countRef, otherRef, '🌈 defineProps');

// console.log(props.countRef, props.otherRef, '🌈 defineProps');

// const emits = defineEmits(['update:countRef', 'update:otherRef']);

// defineEmits + ts
const emits = defineEmits<{
  (e: 'update:countRef', countRef: string): void;
  (e: 'update:otherRef', otherRef: number): void;
}>();

const change = () => {
  emits('update:countRef', 'change it');
};

const changeOther = () => {
  emits('update:otherRef', 666);
};

const sonExpose: Ref<string> = ref('sonExpose');

defineExpose({
  sonExpose,
});
</script>

<template>
  <div>
    <button class="left-btn" @click="change">change</button>

    <button class="left-btn" @click="changeOther">changeOther</button>

    {{ countRef }} -- {{ otherRef }}
  </div>
</template>

<style scoped lang="scss">
.left-btn {
  @include blue-btn();
  margin-bottom: 20px;
}
</style>
