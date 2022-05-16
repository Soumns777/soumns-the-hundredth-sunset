<template>
  <div>CART</div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cart: {
      require: true,
      type: String
    }
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.cart, '💙💛 path-params') // un

    console.log(this.$route.query.cart, '💙💛 name-query')

    console.log(this.$route, '💙💛 $route')
  },
  methods: {}
}
</script>

<style scoped lang="scss"></style>
