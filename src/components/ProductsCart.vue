<template>
    <div class="rounded-circle" id="one" >
      <div class="btn-group" >
        <span class="material-icons rounded-circle" data-bs-toggle="dropdown" aria-expanded="false" id="one">
          shopping_cart
        </span>
        <ul class="dropdown-menu dropdown-menu-end">
          <li v-for = "(item , key) in cartData" :key="key"><button class="dropdown-item" type="button">{{item.product.category}}/{{item.product.title}}/{{item.qty}}</button></li>
        </ul>
      </div>
    </div>
</template>
<script>
// @click="getcart()" if (this.cartData === []) {
export default {
  data () {
    return {
      cartData: ''
    }
  },
  methods: {
    getcart () {
      const api = 'https://vue3-course-api.hexschool.io/'
      const cart = 'api/password/cart'
      console.log(this.cartData)
      this.axios.get(`${api}${cart}`)
        .then((res) => {
          console.log(res)
          this.cartData = res.data.data.carts
          console.log(this.cartData)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.getcart()
  }
}
</script>
<style lang="scss">
#one {
  position: fixed;
  top: 40px;
  right: 120px;
  // border:3px solid #000;
  // width: 100px;
  // height: 100px;
  // margin: 20px;
  color: #9CBAC6;
  // background-color:#9CBAC6;
  // margin: 0 auto;
  // padding:34px;
  font-size: 48px;
  z-index:10;
  cursor: pointer;
}
</style>
