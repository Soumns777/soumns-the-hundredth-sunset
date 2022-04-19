<template>
  <div class="container">

    Home
    <button class="left-btn"
            @click="$router.push({name:'list',params:{ list:'list',test:'test',invildList:'invildList'}})">
      Name-params
    </button>

    <button class="left-btn"
            @click="$router.push({path:'/list/list/test',query:{ invildList:'invildList'}})">Path-Query
    </button>

    <button class="left-btn"
            @click="$router.push({path:'/profile',query:{ tab:'profile'}})">Props-Func-Query
    </button>

    <button class="left-btn"
            @click="$router.push({name:'detail',params:{ tab:'detail'}})">Props-Func-Name
    </button>


  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {}
  },
  props: {
    home: {
      type: String,
      require: true
    },
    newsletterPopup: {
      type: Boolean,
      require: true
    },
    userName: {
      type: String,
      require: true
    }
  },
  mounted() {
    // console.log(this.$route.query, '💚 list 路由query传过来的参数')
    console.log(this.home, '💚 list 路由params传过来的参数') // home
    console.log(this.newsletterPopup, this.userName, '💚 list 路由params传过来的参数') // true  iu
  }
}
</script>

<style scoped lang="scss">

.container {
  width: 100vw;
  min-height: 100vh;

  .left-btn {
    @include left-btn();
    margin-bottom: 30px;
  }
}

</style>
