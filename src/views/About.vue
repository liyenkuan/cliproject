<template>
        <loading :active="isLoading" ></loading>
  <div class="couponBanner d-flex flex-wrap ">
    <div class="coupon_content  align-self-center pt-5">
      <p  style="color: #47ABA7; font-size:32px;font-weight: 900;width:100%;">歡迎領取優惠券</p>
      <p  style="color: #47ABA7; font-size:32px;font-weight: 900;width:100%; ">7/1~8/31全站優惠中</p>
      <p  style="color: #47ABA7; font-size:32px;font-weight: 900;width:100%; ">序號：</p>
      <p  style="color: #47ABA7; font-size:32px;font-weight: 900;width:100%; ">HKDUVUDO</p>
    </div>
  </div>
  <div class="productworks_title">
      <span class="material-icons">
      work_outline
      </span>
        服務項目
        <hr>
  </div>
  <ul class="d-flex justify-content-center w-100 flex-wrap productcardUl" >
      <li class=" productcardLi "  v-for = "(item , key) in products" :key="key">
        <div class="card text-white w-100 ">
        <img :src="item.imageUrl" class="productcard-img" alt="...">
          <div class="card-img-overlay card_body">
            <h5 class="card-title">歡迎預約服務</h5>
            <input type="button" value="more"  class="card_btn" :data-id="item.id" @click="toProductspage(item.id)">
          </div>
          </div>
          <p class="product_name px-3 pt-3">{{item.title}}</p>
          <p  class="product_sub  px-3 ">{{item.category}}</p>
          <div class="d-flex justify-content-between ">
          <p class="product_sub px-3" style="text-decoration:line-through; ">原價：{{item.origin_price}}</p>
          <p class="product_name px-3 ">售價：{{item.price}}</p>
          </div>
      </li>
</ul>
</template>
<script>
const api = 'https://vue3-course-api.hexschool.io/'
// const productsPath = 'api/password/'
export default {
  data () {
    return {
      products: [],
      isLoading: false
    }
  },
  methods: {
    getProducts () {
      this.isLoading = true
      this.axios.get(`${api}api/password/products`)
        .then((response) => {
          this.isLoading = false
          if (response.data.success) {
            console.log(response)
            this.products = response.data.products
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    toProductspage (id) {
      this.$router.push({ name: 'Descriptiont', query: { productsId: `${id}` } })
      // this.$router.push(`/products/${id}`)
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
.productworks_title {
  // padding-bottom: 80px;
  padding: 40px;
  // padding-top: 120px;
  padding-left:72px;
  font-weight: 900;
  font-size: 48px;
  font-family: 'Krona One', sans-serif;
  // text-align: center;
  position: relative;
  // letter-spacing: -4px;
    // padding-bottom: 80px;
  color:#47ABA7;
}
.productcardUl {
  padding-right: 80px;
  padding-left: 80px;
  // background-color: #F7F7F7;
  padding-top:20px;
}
.productcardLi  {
  width: 300px;
  // padding-bottom: 20px;
  height: 416px;
  background-color: white;
  margin-right: 30px;
  margin-bottom:20px;
  line-height:20px;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #DEE2E6;
}
.productcard-img {
  display: block;
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  object-position: center ;
}
.card {
  border-radius:0;
  // box-shadow: 1px 1px 1px 1px #ADADAD;
  // height:300px;
}
.card_body {
  margin: 0 auto;
  text-align:center;
  top:0;
  font-size: 48px;
  font-family: 'Krona One', sans-serif;
  opacity: 0;
  position: absolute;
  box-sizing: border-box;
  background-color: rgba(0,0,0,.3);
  padding-top: 100px
}
.card_btn {
  color :white;
  background-color: transparent;
  border:3px solid white; ;
  font-family: 'Krona One', sans-serif;
  font-size: 24px;
  width:150px;
  padding:10px;
}
.card_body:hover{
  -webkit-transition: 500ms;
  opacity: 1;
}
.product_name {
  font-weight:bold;
  font-size:24px;
  padding-top: 5px;
  color:#47ABA7;
}
.product_sub {
   color:#969c9e;
}
.couponBanner{
  /* display: flex; */
  background-attachment: fixed;
  background-image: url("https://i.imgur.com/ZpI27FU.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 100%;
  height: 500px;
  // margin: auto;
}
.coupon_content {
  // display:flex;
  width: 50%;
  // height:300px;
  background-color:white;
  opacity: 0.6;
  margin: 0 auto;
  text-align:center;
  // align-items: center;
}
@media (max-width: 767px) {
  .productcardUl {
    padding: 0px;
  }
  .productcardLi  {
    width: 300px;;
    margin-right: 0px;
  }
  .productworks_title {
    // padding-top: 120px;
    padding-bottom: 24px;
    padding-left:0px;
    padding-right:0px;
    color:#47ABA7;
    font-weight: 900;
    font-size: 32px;
    font-family: 'Krona One', sans-serif;
    text-align: center;
    position: relative;
    // letter-spacing: -4px;
  }
  .card_body {
    margin: 0 auto;
    text-align:center;
    top:0;
    font-size: 48px;
    font-family: 'Krona One', sans-serif;
    opacity: 1;
    position: absolute;
    box-sizing: border-box;
    background-color: rgba(0,0,0,.3);
    padding-top: 100px
}
.card_btn {
  color :white;
  background-color: transparent;
  border:3px solid white; ;
  font-family: 'Krona One', sans-serif;
  font-size: 24px;
  width:150px;
}
  .card_b ody:hover{
    -webkit-transition: 500ms;
    opacity: 1;
  }
  .coupon_content {
    // display:flex;
    width: 80%;
    // height:300px;
    background-color:white;
    opacity: 0.6;
    margin: 0 auto;
    text-align:center;
    // align-items: center;
  }
 }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
