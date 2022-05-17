<template>
  <div>
    home
    <Cart :colors="colors">
      <!-- 在父组件中,不添加name属性的插槽都是默认插槽里的内容-->
      <template #default="{ child }">
        {{ child }}
      </template>

      <!-- 具名插槽  通过使用 #child 获取对应子组件中对应的插槽 -->
      <template #child>
        具名插槽
        <div>--------------</div>
      </template>

      <!-- 作用域插槽 通过将子组件中绑定的数据 -->
      <template #nextChild="{ color, mood }">颜色:{{ color }},心情:{{ mood }} </template>
    </Cart>
  </div>
</template>

<script>
import Cart from '@/views/cart/index.vue'

export default {
  name: 'home',
  components: {
    Cart
  },
  data() {
    return {
      colors: [
        {
          color: 'red',
          mood: 'happy'
        },
        {
          color: 'orange',
          mood: 'boring'
        },
        {
          color: 'blue',
          mood: 'calm'
        }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss"></style>
