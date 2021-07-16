<template>
    <loading :active="isLoading" ></loading>
  <div class="Desworks_title">
        <span class="material-icons">
        shop_two
        </span>
        {{product.category}}說明
        <hr>
  </div>
    <p class="h4 title_path" > HOME / 服務項目 / {{product.category}}</p>
  <div class="row w-100 Desconter d-flex flex-wrap justify-content-center ">
        <div class="Des_imgcontent col-sm-6  ">
          <div class="img_shell ">
              <img :src="product.imageUrl" class="card-img Des_img" alt="..." >
          </div>
        </div>
        <div class="Des_textcontent col-sm-6  ">
            <div class="text_shell ">
                <p class="fw-bold">{{product.category}}</p>
                <hr class="py-1" style="color:#47ABA7; opacity: 1;">
                <p class="fw-bolder">{{product.content}}</p>
                <p class="fw-normal">{{product.description}}</p>
                <p class="fw-lighter" style="text-decoration:line-through;">原價：{{product.origin_price}}</p>
                <div class="d-flex align-items-center">
                  <p class="fw-lighter" >特價：</p>
                  <p class="fw-light" style="color:#47ABA7; font-weight: 900; font-size: 48px;">{{product.price}}</p>
                </div>
                <div class="Des-input">
                  <label for="DesNum">購買數量</label>
                  <input type="number"  id="DesNum"   name="套票組數" min="1" v-model="Num" >
                  <button type="button" class="btn btn-lg banner_btn" @click="addcart()" :disabled="this.status.loadingItem === product.id">加入購物車</button>
                </div>
                <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
                  <div class="d-flex">
                    <div class="toast-body">
                    已加入購物車
                  </div>
                    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                  </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import emitter from '@/assets/javascript/emitter'
import Toast from 'bootstrap/js/dist/toast'
const api = 'https://vue3-course-api.hexschool.io/'
const productsPath = 'api/password/product'
let toastEl = ''
let toast = ''
export default {
  data () {
    return {
      isLoading: false,
      product: [],
      Num: 1,
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
    getProduct () {
      const id = this.id
      // console.log(id)
      this.axios.get(`${api}${productsPath}/${id}`)
        .then((res) => {
          if (res.data.success) {
            // console.log(res)
            this.product = res.data.product
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addcart () {
      toast.show()
      this.status.loadingItem = this.id
      const cart = 'api/password/cart'
      const productId = this.id
      const qty = Number(this.Num)
      const url = `${api}${cart}`
      this.axios.post(url, { data: { product_id: productId, qty } })
        .then((res) => {
          // console.log(res)
          this.status.loadingItem = ''
          emitter.emit('update-cart')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  computed: {
    id: function () {
      return this.$route.query.productsId
    }
  },
  mounted () {
    this.getProduct()
    toastEl = this.$refs.toast
    toast = new Toast(toastEl, {
      delay: 3000
    })
  }
}
</script>
<style lang="scss">
.title_path {
  padding-left:80px;
  color:#47ABA7;
}
.Des-input {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.Des-input input{
  text-indent: 0.5rem;
  background-color: #F7F7F7;
  color: #818A91;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #00807E;
  min-height: 38px;
}
.Desworks_title {
  padding: 40px;
  padding-top: 120px;
  padding-left:72px;
  color:#47ABA7;
  font-weight: 900;
  font-size: 48px;
  font-family: 'Krona One', sans-serif;
  position: relative;
}
.Desconter {
  padding-left: 40px;
  padding-bottom: 40px;
  margin: 0 auto;
}
.Des_imgcontent{
    padding-bottom:20px;
}
.Des_img {
  display: block;
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  object-position: center ;
}
.Des_textcontent {
    padding:40px;
    font-size:24px;
}
.img_shell {
    padding:20px;
}
.text_shell {
    // height: 400px;
    line-height: 1.5;
}
@media (max-width: 767px) {
    .Desworks_title {
        padding-top: 100px;
        padding-bottom: 24px;
        padding-left:0px;
        padding-right:0px;
        color:#47ABA7;
        font-weight: 900;
        font-size: 32px;
        font-family: 'Krona One', sans-serif;
        text-align: center;
        position: relative;
    }
    .Desworks_sub {
        display: none;
    }
    .Desconter {
        padding-left: 0px;
        padding-bottom: 0px;
        margin: 0 auto;
     }
    .Des_imgcontent{
        width:100%;
        margin:0px;
    }
    .Des_textcontent {
        width:100%;
        margin:0px;
        padding:24px;
        padding-top:0px;
        font-size:24px;
        line-height:24px;
    }
    .img_shell {
        padding:10px;
    }
    .Des_hr {
        display:none;
    }
    .Des_img {
        display: block;
        width: 100%;
        max-height: 240px;
        object-fit: cover;
        object-position: center ;
      }
    .title_path {
      padding-left:32px;
      color:#47ABA7;
    }
}
</style>
