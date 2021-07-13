<template>
<div id="couponModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="couponModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl">
    <div class="modal-content border-0">
     <div class="modal-header bg-dark text-white">
       <h5 id="couponModalLabel" class="modal-title">
         <span>新增優惠券</span>
       </h5>
       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div class="modal-body">
         <div class="col-sm-8">
           <div class="form-group">
             <label for="Ctitle">標題</label>
             <input id="Ctitle" type="text" class="form-control" placeholder="請輸入標題" v-model="addCoupon.title">
           </div>
           <div class="row">
             <div class="form-group col-md-6">
               <label for="Ccategory">百分率</label>
               <input id="Ccategory" type="Number" class="form-control" v-model="addCoupon.percent"
                      placeholder="請輸入折扣">
             </div>
             <div class="form-group col-md-6">
               <label for="price">到期日</label>
               <input id="Cunit" type="number" class="form-control" placeholder="請輸入到期日" v-model="addCoupon.due_date">
             </div>
           </div>
           <div class="row">
             <div class="form-group col-md-6">
               <label for="origin_price">序號</label>
               <input id="origin_price" type="text" min="0" class="form-control" placeholder="請輸入序號" v-model="addCoupon.code">
             </div>
           </div>
           <hr>
           <div class="form-group">
             <div class="form-check">
               <input id="is_enabled" class="form-check-input" type="checkbox" v-model="addCoupon.is_enabled"
                     :true-value="1" :false-value="0">
               <label class="form-check-label" for="is_enabled">是否啟用</label>
             </div>
           </div>
         </div>
       </div>
            <div class="modal-footer">
       <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
         取消
       </button>
       <button type="button" class="btn btn-primary" @click="emitCoupon()">
         確認
       </button>
     </div>
     </div>
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      text: '我也成功',
      addCoupon: {
        title: '',
        is_enabled: '',
        percent: 1,
        due_date: 1555459200,
        code: ''
      }
    }
  },
  methods: {
    emitCoupon () {
      this.addCoupon.percent = Number(this.addCoupon.percent)
      this.addCoupon.due_date = Number(this.addCoupon.due_date)
      console.log(this.addCoupon.percent, this.addCoupon.due_date)
      this.$emit('pushCoupon', this.addCoupon)
      this.addCoupon = {
        title: '',
        is_enabled: '',
        percent: '',
        due_date: '',
        code: ''
      }
    }
  }
}
</script>
