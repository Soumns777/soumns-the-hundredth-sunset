<template>
  <div>
    <button
      :style="{ width: '160px', height: '30px', backgroundColor: '#76EEC6', borderRadius: '30px', border: '0', color: '#ffffff' }"
      @click="
        $router.push({
          path: '/cart',
          params: {
            cart: '测试params'
          }
        })
      "
    >
      Path-params
    </button>

    <button
      :style="{ width: '160px', height: '30px', backgroundColor: '#76EEC6', borderRadius: '30px', border: '0', color: '#ffffff' }"
      @click="
        $router.push({
          name: 'cart',
          query: {
            cart: '测试query'
          }
        })
      "
    >
      Name-Query
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss"></style>
