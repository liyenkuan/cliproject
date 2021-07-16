<template>
<div class="w-100" >
<loading :active="isLoading" ></loading>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top navContainer ">
    <div class="container-fluid">
        <div class="col nav_one">
          <a class="navbar-brand" href="#" style="color:#47ABA7;">NaNail</a>
        </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse nav_ul" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item " >
                <router-link to="/" class="nav-link " style="color:#47ABA7"  @click="addBtncss()">Home</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/products" class="nav-link" style="color:white;" @click="addBtncss()" >服務項目</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/backside" class="nav-link" style="color:white;"  @click="addBtncss()" >後台登入</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  </div>
  <router-view/>
    <div class="rounded-circle " id="one" >
      <div class="btn-group position-relative" >
        <span class="material-icons rounded-circle one"  @click="openOrder()">
          shopping_cart
        </span>
        <div class="rounded-circle bg-danger text-white position-absolute text-center"
              style="font-size:8px; width:16px;right: 1px;
                    top: -68px;
                    z-index: 11;">{{cartData.length}}</div>
      </div>
    </div>
   <footer class="footer   py-1 footer_calss" style="  background-color: black;opacity: 0.8;">
    <div class="container pt-3">
      <ul class="row d-flex flex-wrap" style="align-items: center;">
        <li class="footer_li">
          <span style="color:#47ABA7;">追蹤社群 ：</span>
          <a href="#" class="fa fa-facebook rounded-circle"  style="  background: #3B5998; color: white;  margin-right:20px; " ></a>
          <a href="#" class="fa fa-twitter rounded-circle" style="  background: #55ACEE; color: white; margin-right:20px;"></a>
          <a href="#" class="fa fa-instagram rounded-circle" style="  background: #125688; color: white; margin-right:20px;"></a>
          </li>
        <li class="footer_li">
          <span style="color:#47ABA7;" >聯絡資訊 ：0912-345-678</span>
        </li>
        <li class="footer_li">
        <span style="color:#47ABA7; ">＠此為個人練習用作品，無任何商業用途</span>
        </li>
      </ul>
    </div>
  </footer>
  <Pushorder :cart="orderData"
             @push-id="deletCart"
             :total="total"
             @post-coupon="postCouponCode"
             :finalprice="deduct"
             @open-order="toOrder"
  ></Pushorder>
</template>

<style lang="scss">
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
margin: 0;
padding: 0;
border: 0;
outline: 0;
font-weight: inherit;
font-style: inherit;
font-size: 100%;
font-family: inherit;
vertical-align: baseline;
}
/* remember to define focus styles! */
:focus {
outline: 0;
}
body {
line-height: 1;
color: black;
background: white;
}
ol, ul {
list-style: none;
}
/* tables still need 'cellspacing="0"' in the markup */
table {
border-collapse: separate;
border-spacing: 0;
}
caption, th, td {
text-align: left;
font-weight: normal;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: "";
}
blockquote, q {
quotes: "" "";
}
@import "bootstrap";
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
.navContainer{
  background-color: black;
  opacity: 0.8;
  font-weight: 900;
  /* border: 1px solid #000; */
  box-shadow: 0px 5px 6px #00000029;
  z-index:10;
}
.navColor{
  background-color: white;
}
.footer_calss{
  box-shadow: 5px 0px 6px #00000029;
}
.nav_one{
  font-family: 'Krona One', sans-serif;
}
.nav_one a{
  font-size: 40px;
  padding-left:64px;
}

.nav_ul{
  max-width: 480px;
  font-size: 24px;
  font-family: 'Krona One', sans-serif;
}
.nav_ul li{
  border-bottom: 3px solid #ffffff00 ;
  font-weight: 900;
};
.nav_ul li:hover{
  border-bottom: 3px solid #47ABA7; ;
}
.banner_container{
  padding-top: 0px;

}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 32px;  /* Preferred icon size */
  line-height: 0;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
.fa {
  padding: 10px;
  font-size: 30px;
  width: 50px;
  height:50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}
.fa-snapchat-ghost {
  background: #fffc00;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.fa:hover {
    opacity: 0.7;
}
.footer_li {
  width :33%;
}
.one {
  position: fixed;
  top: 40px;
  right: 120px;
  color: #47ABA7;
  font-size: 48px;
  z-index:10;
  cursor: pointer;
}
@media (max-width: 767px) {
  .footer_li {
    width :100%;
  }
  .nav-link {
    margin:0 auto;
    text-align:center;
  }
}
@media (max-width: 375px) {
  .nav_one{
    text-align: start;
  }
  .nav_ul{
    text-align: center;
  }
  .nav_one{
    justify-content: space-between;
  }
 }
</style>
<script>
import Modal from 'bootstrap/js/dist/modal'
import Pushorder from '@/components/Pushorder.vue'
import emitter from '@/assets/javascript/emitter'
let navBtn = ''
let myOrder = ''
const api = 'https://vue3-course-api.hexschool.io/'
const cart = 'api/password/cart'
export default {
  components: {
    Pushorder
  },
  data () {
    return {
      cartData: [],
      orderData: [],
      isLoading: false,
      total: 0,
      deduct: 0
    }
  },
  methods: {
    addBtncss () {
      navBtn.classList.remove('show')
    },
    getcart () {
      this.isLoading = true
      this.axios.get(`${api}${cart}`)
        .then((res) => {
          this.isLoading = false
          // console.log(res)
          this.cartData = res.data.data.carts
          // console.log(this.cartData)
          this.orderData = this.cartData
          this.totalPrice()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deletCart (id) {
      this.isLoading = true
      console.log(id)
      this.axios.delete(`${api}${cart}/${id}`)
        .then((res) => {
          // console.log(res)
          this.getcart()
          this.isLoading = false
          myOrder.hide()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    openOrder () {
      this.orderData = this.cartData
      emitter.emit('update-cartdata')
      myOrder.show()
    },
    totalPrice () {
      let price = 0
      // console.log(this.cartData)
      this.cartData.forEach((item) => {
        price += item.final_total
      })
      this.total = Math.round(price)
      // console.log(this.total)
    },
    postCouponCode (e) {
      // console.log(e)
      const coupon = 'api/password/coupon'
      const code = e
      this.axios.post(`${api}${coupon}`, { data: { code } })
        .then((res) => {
          // console.log(res)
          const finalTotal = Math.round(res.data.data.final_total)
          // console.log(finalTotal)
          const deductSum = this.total - finalTotal
          // console.log(deductSum)
          this.deduct = deductSum
          this.getcart()
          this.totalPrice()
          myOrder.hide()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    toOrder () {
      // this.$router.push({ name: 'Order', params: { cart: this.orderData } })
      this.$router.push('/order')
      myOrder.hide()
    }
  },
  mounted () {
    navBtn = document.querySelector('.nav_ul')
    myOrder = new Modal(document.querySelector('#pushorderModal'))
    this.getcart()
    emitter.on('update-cart', () => {
      this.getcart()
    })
  }
}
</script>
