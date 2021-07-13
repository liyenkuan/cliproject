<template>
<div class="container " style="padding-top:120px;">
<loading :active="isLoading" ></loading>
<h2 style="color:#47ABA7;">商品明細</h2>
<div class="table-responsive ">
 <table class="table table-borderless align-middle " >
            <thead>
              <tr>
                <th  width="240">圖示</th>
                <th  width="240">品項</th>
                <th  width="240">數量</th>
                <th  width="240">價格</th>
              </tr>
            </thead>
            <tbody v-for = "(item , key) in cartData" :key="key" >
              <tr>
                <td><img :src="item.product.imageUrl"  style="width:64px; height:64px;"></td>
                <td>{{item.product.category}}</td>
                <td>{{item.qty}}</td>
                <td >{{item.product.price}}</td>
              </tr>
            </tbody>
            <tbody>
           <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td style="color:#47ABA7; font-weight: 900; font-size: 24px;">總金額 ：{{priceTotal}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <hr class="py-1" style="color:#47ABA7; opacity: 1;">
<!----toast---->
  <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="d-flex">
      <div class="toast-body">
        {{myToast}}
      </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!----toast---->
<Form v-slot="{ errors }" class="py-5" @submit="createOrder">
  <div class="row d-flex justify-content-center">
    <!--姓名-->
    <div class="col-md-6 pb-4">
          <label for="address" class="col align-self-start">姓名</label>
          <Field id="name" name="name" type="name" class="form-control "
            :class="{ 'is-invalid': errors['name'] }"
            placeholder="請輸入姓名" :rules="isName"
            v-model="form.user.name"></Field>
        <error-message name="name" class="invalid-feedback"></error-message>
    </div>
    <!--電話-->
    <div class="col-md-6 pb-4">
        <label for="number" class="col align-self-start">電話</label>
        <Field id="number" name="電話" type="text" class="form-control"
        :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話" :rules="isPassword" v-model="form.user.tel">
                </Field>
        <error-message name="電話" class="invalid-feedback"></error-message>
    </div>
  <!--email-->
    <div class="col-md-12 pb-4">
          <label for="email" class="col align-self-start">email</label>
          <Field id="email" name="email" type="email" class="form-control "
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email" :rules="isEmail"
            v-model="form.user.email"></Field>
        <error-message name="email" class="invalid-feedback"></error-message>
    </div>
    <!--地址-->
    <div class="col-md-3 pb-4">
    <label for="city" class="col align-self-start">門市地址</label>
        <Field id="city" name="縣市" class="form-control" :class="{ 'is-invalid': errors['縣市'] }"
        placeholder="請輸入縣市" rules="required" v-model="city" as="select">
            <option value="">請選擇縣市</option>
            <option value="台北市">台中市</option>
            <option value="高雄市">高雄市</option>
        </Field>
    </div>
    <div class="col-md-3 pb-4">
    <label for="area" class="col align-self-start"></label>
        <Field id="area" name="地區" class="form-control" :class="{ 'is-invalid': errors['地區'] }"
        placeholder="請輸入地區" rules="required" v-model="area" as="select">
            <option value="">請選擇地區</option>
            <option value="北區">北區</option>
            <option value="中區">中區</option>
        </Field>
    </div>
    <div class="col-md-6 pb-4">
    <label for="region" class="col align-self-start"></label>
        <Field id="region" name="地址" class="form-control" type="region" :class="{ 'is-invalid': errors['地址'] }"
        placeholder="請輸入地址" rules="required" v-model="region">
        </Field>
    </div>
    <div class="col-md-3 pt-3 pb-4" >
      <button  class="btn  btn-lg btn-block w-100 banner_btn" type="submit" >建立訂單</button>
    </div>
  </div>
</Form>
</div>
</template>
<script>
import emitter from '@/assets/javascript/emitter'
import Toast from 'bootstrap/js/dist/toast'
const api = 'https://vue3-course-api.hexschool.io/'
const cart = 'api/password/'
let toastEl = ''
let toast = ''
export default {
  data () {
    return {
      isLoading: false,
      cartData: [],
      priceTotal: '',
      area: '',
      city: '',
      region: '',
      myToast: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getcart () {
    //   this.isLoading = true
      this.axios.get(`${api}${cart}cart`)
        .then((res) => {
        //   this.isLoading = false
          console.log(res)
          this.cartData = res.data.data.carts
          this.priceTotal = Math.round(res.data.data.final_total)
          console.log(this.cartData)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    isPassword (value) {
      if (value === '') {
        return '請輸入正確的電話格式'
      } else {
        return true
      }
    },
    isEmail (value) {
      if (value === '') {
        return '請輸入正確的email格式'
      } else {
        return true
      }
    },
    isName (value) {
      if (value === '') {
        return '請輸入正確的姓名格式'
      } else {
        return true
      }
    },
    createOrder () {
      this.isLoading = true
      this.form.user.address = `${this.city}${this.area}${this.region}`
      console.log(this.form.user.address)
      const data = this.form
      console.log(data)
      this.axios.post(`${api}${cart}order`, { data })
        .then((res) => {
          console.log(res)
          emitter.emit('update-cart')
          this.myToast = res.data.message
          toast.show()
          setTimeout(() => { this.$router.push('/') }, 3000)
          // this.$router.push('/')
          this.isLoading = false
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getcart()
    toastEl = this.$refs.toast
    toast = new Toast(toastEl, {
      delay: 3000
    })
  }
}
</script>
