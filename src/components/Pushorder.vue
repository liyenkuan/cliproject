<template>
<div class="modal fade" id="pushorderModal" ref="pushorderModal"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="pushorderModal" style="color:#47ABA7; font-size:32px;">購物車列表</h5>
      </div>
      <div class="modal-body ">
      <div id="modal_contect" ref="modal_contect" >
      <div class="py-5" v-show="!isdisplay" style="color:#47ABA7; font-weight: 900; font-size: 32px; text-align:center;">目前沒有購物車紀錄喔～</div>
      <div v-show="isdisplay" >
        <table class="table text-center " >
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">圖示</th>
                <th scope="col">品項</th>
                <th scope="col">數量</th>
                <th scope="col">價格</th>
                <th scope="col">刪除</th>
              </tr>
            </thead>
            <tbody v-for = "(item , key) in cartProduct" :key="key" >
              <tr>
                <th scope="row">{{key+1}}</th>
                <td><img :src="item.product.imageUrl"  style="width:48px; height:48px;"></td>
                <td>{{item.product.category}}</td>
                <td>{{item.qty}}</td>
                <td>{{item.product.price}}</td>
                <td :data-id="item.id" class="m-auto text-center" >
                <a href="###" class="d-block m-auto text-center" style="color: black;display: flex;">
                  <span class="material-icons " style="font-size:24px;" :data-id="item.id" @click="deletCart(item.id)">
                    delete
                  </span>
                </a>
                </td>
              </tr>
            </tbody>
            <tbody>
           <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td v-if="isdiscount" style="color: #E8213F; font-weight: 900; ">扣除:-{{deduct}}</td>
                <td v-else ></td>
                <td style="color:#47ABA7; font-weight: 900; ">總金額 ：{{priceTotal}}</td>
                </tr>
            </tbody>
        </table>
        <hr>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">優惠券</span>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="couponCode"
            placeholder="請輸入優惠碼">
             <button type="button" class="btn btn-dark btn-lg " style="width: 80px;" @click="postCoupon()">套用</button>
            </div>
         </div>
      </div>
     </div>
      <div class="modal-footer" v-show="isdisplay">
          <div class="mx-auto" style="width: 300px;">
             <button type="button" class="btn  btn-lg btn-block banner_btn " style="width: 300px;" @click="openOrder()">前往購買</button>
          </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import emitter from '@/assets/javascript/emitter'
// let content = ''
export default {
  props: ['cart', 'total', 'finalprice'],
  data () {
    return {
      couponCode: '',
      isdisplay: true,
      isdiscount: true
    }
  },
  methods: {
    deletCart (id) {
      this.$emit('pushId', id)
      // this.isData()
    },
    postCoupon () {
      if (this.couponCode !== '') {
        console.log(this.couponCode)
        this.$emit('postCoupon', this.couponCode)
        this.couponCode = ''
      } else {
        console.log('錯誤')
      }
    },
    openOrder () {
      this.$emit('openOrder')
    },
    isData () {
      console.log(this.cartProduct.length)
      if (this.cartProduct.length === 0) {
        // content.classList.add('content_none')
        this.isdisplay = false
      } else if (this.cartProduct.length > 0) {
        // content.classList.remove('content_none')
        this.isdisplay = true
      }
      console.log(this.deduct)
      if (this.deduct === 0) {
        this.isdiscount = false
      } else if (this.deduct > 0) {
        this.isdiscount = true
      }
    }
  },
  computed: {
    cartProduct: function () {
      return this.cart
    },
    priceTotal: function () {
      return this.total
    },
    deduct: function () {
      return this.finalprice
    }
  },
  mounted () {
    // content = this.$refs.modal_contect
    // this.isData()
    emitter.on('update-cartdata', () => {
      this.isData()
    })
  }
}
</script>
<style lang="scss">
.content_none {
  display:none;
}
</style>
