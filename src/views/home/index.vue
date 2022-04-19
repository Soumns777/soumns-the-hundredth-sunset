<script setup lang='ts'>

import {onMounted, reactive, ref} from "vue";
import {onBeforeRouteLeave, useRoute, useRouter} from "vue-router";


const props = defineProps({
  home: {
    required: false,
    type: String
  }
})

console.log(props.home, '🍊 home')

interface Reactive {
  name: string,
  age: number
}

const router = useRouter()
const route = useRoute()

// console.log(route, '🍊 route')
// console.log(router, '🍊 router')

const inpRef = ref(null)


const change = () => {
  console.log(inpRef.value, '🍊 inpRef')
}


onMounted(() => {

  const people: Reactive = reactive({
    name: 'iu',
    age: 17
  })

})

/**
 * onBeforeRouteLeave配合setup语法糖
 */
onBeforeRouteLeave((to, from, next) => {
  console.log(to, from, '🍊 onBeforeRouteLeave')

  next()
})

</script>

<template>
  Home
  <button class="left-btn" @click="$router.push({name:'list',params:{list:'list',results:'测试数据'}})">TO LIST</button>

  <input type="text" v-model="inpRef" @input="change">
</template>


<style lang="scss" scoped>
.left-btn {
  @include left-btn()
}

</style>
