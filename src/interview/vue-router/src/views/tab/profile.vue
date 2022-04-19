<template>
  <div class="container">
    profile
  </div>
</template>

<script>
export default {
  name: "profile",
  props: {
    profile: {
      require: true,
      type: [String, Object, Array]
    }
  },
  mounted() {
    console.log(this.profile, '🍊  props func query')
  }
}
</script>
<style scoped lang="scss">

.container {
  width: 100vw;
  min-height: 100vh;


  @include children-page()
}

</style>
