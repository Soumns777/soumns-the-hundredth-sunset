<template>
  <div class="container">

    <button class="right-btn" @click="$router.push({name:'child',params:{ description:'一班很棒!' }})">第一季</button>
    <button class="right-btn" @click="$router.push({name:'otherChild',params:{ description:'二班也挺不错的!' }})">第二季</button>

    <router-view></router-view>
    <router-view name="childs"></router-view>
  </div>

</template>

<script>
export default {
  name: "index",
  props:{
    description:{
      require:true,
      type:String
    }
  },
  mounted() {
    console.log(this.description,'🦄 客观评价')
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
