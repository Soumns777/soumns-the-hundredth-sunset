<template>
  <div class="container">
    detail
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

//.container {
//  width: 100vw;
//  min-height: 100vh;
//
//  .right-btn {
//    @include right-btn();
//    margin-bottom: 30px;
//  }
//}

</style>
