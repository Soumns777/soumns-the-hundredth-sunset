<template>
  <div>
    <!--  默认插槽  不需要添加name属性 -->
    <slot :child="child"> 默认插槽 </slot>

    <!-- 具名插槽  当加了name属性的插槽,可以在父组件对应的template中放入内容 -->
    <slot name="child">具名插槽</slot>

    <!-- 作用域插槽 -->
    <div v-for="(color, idx) in colors" :key="idx">
      <slot name="nextChild" v-bind="color"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  props: {
    colors: {
      type: [Object, Array],
      require: true
    }
  },
  data() {
    return {
      isShow: true,
      child: '儿子'
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss"></style>
