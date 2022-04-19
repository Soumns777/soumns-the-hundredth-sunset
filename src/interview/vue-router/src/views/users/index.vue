<template>
  <div class="container">

    <button class="right-btn" @click="$router.push({name:'child',params:{ description:'一班很棒!' }})">第一季</button>
    <button class="right-btn" @click="$router.push({name:'otherChild',params:{ description:'二班也挺不错的!' }})">第二季</button>
    <button class="right-btn" @click="$router.push({name:'home'})">前往首页</button>

    <router-view></router-view>
    <router-view name="childs"></router-view>
  </div>

</template>

<script>
export default {
  name: "index",
  props: {
    description: {
      require: true,
      type: String
    }
  },
  /**
   * 组件守卫
   */
  beforeRouteEnter(to, from, next) {
    console.log(to, from, '🦄  组件守卫:beforeRouteEnter')
    console.log(this, '🦄  this实例') // undefined
    next(vm => {
      console.log(vm, '🦄  可以在next回调中使用this实例')
    })
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from, '🦄  组件守卫:beforeRouteLeave')
    console.log(this, '🦄  this实例') // 可以访问到this实例

    // if (isSave) {
    //   next(false) // 判断当前是否保存,可以阻止页面跳转
    // } else {
    //   next()
    // }

    next()
  },
  mounted() {
    // console.log(this.description, '🦄 客观评价')
  }
}
</script>

<style scoped lang="scss">
.container {
  .right-btn {
    @include right-btn();
    margin-bottom: 30px;
  }
}
</style>
