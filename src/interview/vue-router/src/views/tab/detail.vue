<template>
  <div class="container">
    detail


    <!-- router-link中的 :to 类似于 $router.push()   -->
    <router-link class="right-btn" :to="{name:'home',params:{userName:'kystal'}}">home</router-link>
  </div>
</template>

<script>
export default {
  name: "detail",
  props: {
    tab: {
      require: true,
      type: [String, Object, Array]
    }
  },
  mounted() {
    console.log(this.tab, '🍊  props func params') // detail
  }
}
</script>
<style scoped lang="scss">

.container {
  width: 100vw;
  min-height: 100vh;

  @include children-page();

  .right-btn {
    @include right-btn();
    margin-bottom: 30px;
  }
}

</style>
