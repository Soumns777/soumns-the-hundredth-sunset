<template>
  <div class="container">
    <button class="right-btn" @click="$router.push({name:'home',params:{ home:'home' }})">List-path-query</button>


    <button class="right-btn" @click="$router.push({name:'list',params:{ list:'list',test:'777',invildList:'888'}})">
      beforeRouteUpdate
    </button>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {}
  },
  props: {
    list: {
      require: true,
      type: String
    },
    invildList: {
      require: true,
      type: String
    },
    test: {
      require: true,
      type: String
    }
  },
  /**
   * 组件守卫 beforeRouteUpdate
   */
  beforeRouteUpdate(to, from, next) {
    console.log(to, from, '💛  组件守卫:beforeRouteUpdate')
    console.log(this, '💛  this实例')
    next()
  },
  mounted() {
    console.log(this.$route.params, '💛 home路由params传过来的参数')
    console.log(this.$route.query, '💛 home路由query传过来的参数')
    console.log(this.list, this.test, this.invildList, '🍬 props语法糖')
  }
}
</script>

<style scoped lang="scss">

.container {
  width: 100vw;
  min-height: 100vh;

  .right-btn {
    @include right-btn();
    margin-bottom: 30px;
  }
}

</style>
