<template>
      <div class="container container_papdding">
        <div class="text-end mt-4">
          <button class="btn btn-primary" @click="openModal()">
            建立新的產品
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">
                分類
              </th>
              <th>產品名稱</th>
              <th width="120">
                原價
              </th>
              <th width="120">
                售價
              </th>
              <th width="100">
                是否啟用
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
          </thead>
          <tbody v-for = "(item , key) in product" :key="key" >
            <tr>
              <td>{{item.category}}</td>
              <td >{{item.title}}</td>
              <td class="text-end">{{item.origin_price}}</td>
              <td class="text-end">{{item.price}}</td>
              <td>
                <span class="text-success">{{item.is_enabled ? '啟用' : '未啟用'}}</span>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm" :data-key="item.id" @click="openEdit(item.id)">
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm" :data-key="item.id" @click="deletProducts(item,item.id)">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!--sale-->
                <div class="text-end mt-4">
          <button class="btn btn-primary" @click="openCouponmodal()">
            建立新的優惠券
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">
                標題
              </th>
              <th>是否啟用</th>
              <th width="120">
                百分率
              </th>
              <th width="120">
                到期日
              </th>
              <th width="100">
                序號
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
          </thead>
          <tbody v-for = "(item , key) in coupon" :key="key">
            <tr>
              <td>{{item.title}}</td>
              <td>{{item.is_enabled}}</td>
              <td>{{item.percent}}</td>
              <td>{{item.due_date}}</td>
              <td>{{item.code}}</td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm" >
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Modal -->
      <Modals @push-product="postModal"></Modals>
       <!-- Modal -->
        <!-- delModal -->
        <Deletemodal :item="delitem"
                   :delete-id="deleteId"
                   @push-id="deletProductsId"
        ></Deletemodal>
       <!-- delModal-->
      <!--editModal-->
      <Editmodal :edit="editProduct"
                  @push-edit="postEdit"
      ></Editmodal>
      <Coupon @push-coupon="postCoupon"></Coupon>
</template>
<style lang="scss">
  .container_papdding{
    padding-top : 120px;
    padding-bottom : 400px;
  }
</style>
<script>
import Modal from 'bootstrap/js/dist/modal'
import Modals from '@/components/Modal.vue'
import Editmodal from '@/components/Editmodal.vue'
import Deletemodal from '@/components/Deletemodal.vue'
import Coupon from '@/components/Coupon.vue'
const api = 'https://vue3-course-api.hexschool.io/'
const productsPath = 'api/password/'
let myModal = ''
let deleteModal = ''
let editModal = ''
let couponModal = ''
export default {
  components: {
    Modals,
    Editmodal,
    Deletemodal,
    Coupon
  },
  data () {
    return {
      product: [],
      username: '',
      password: '',
      addProduct: {
        title: '',
        category: '',
        origin_price: '',
        price: '',
        unit: '',
        description: '',
        content: '',
        is_enabled: '',
        imageUrl: '',
        imagesUrl: [
          '',
          '',
          '',
          '',
          ''
        ]
      },
      delitem: 'test',
      deleteId: 'test',
      editProduct: [],
      coupon: []
    }
  },
  methods: {
    // 取得產品
    getProductas () {
      this.axios.get(`${api}api/password/products`)
        .then((response) => {
          // handle success
          console.log(response)
          this.product = response.data.products
          console.log(this.product)
        })
        .catch((error) => {
          // handle error
          console.log(error)
        })
    },
    getCoupon (page = 1) {
      // console.log(page = 1)
      this.axios(`${api}${productsPath}admin/coupons?page=${page = 1}`)
        .then((res) => {
          console.log(res)
          this.coupon = res.data.coupons
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deletProducts (item, id) {
      this.delitem = item.title
      this.deleteId = id
      deleteModal.show()
      console.log(id)
    },
    deletProductsId () {
      this.axios.delete(`${api}${productsPath}admin/product/${this.deleteId}`)
        .then((res) => {
          console.log(res)
          this.getProductas()
          this.deleteId = ''
          deleteModal.hide()
        })
    },
    openModal () {
      myModal.show()
    },
    openCouponmodal () {
      couponModal.show()
    },
    postModal (e) {
      console.log(e)
      const data = e
      this.axios.post(`${api}${productsPath}admin/product`, { data })
        .then((res) => {
          console.log(res)
          this.getProductas()
          myModal.hide()
        })
    },
    postCoupon (item) {
      console.log(item)
      const data = item
      this.axios.post(`${api}${productsPath}admin/coupon`, { data })
        .then((res) => {
          console.log(res)
          couponModal.hide()
          this.getCoupon()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    openEdit (id) {
      this.product.forEach((item) => {
        if (item.id === id) {
          this.editProduct = item
        }
      })
      editModal.show()
    },
    postEdit (e) {
      const id = e.id
      const data = e
      this.axios.put(`${api}${productsPath}admin/product/${id}`, { data })
        .then((res) => {
          console.log(res)
          this.getProductas()
          editModal.hide()
        })
    },
    verifyToken () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1') //eslint-disable-line
      this.axios.defaults.headers.common['Authorization'] = token //eslint-disable-line
      this.axios.post(`${api}api/user/check`)
        .then((res) => {
          console.log(res)
        })
    }
  },
  mounted () {
    myModal = new Modal(document.getElementById('productModal'))
    deleteModal = new Modal(document.getElementById('delProductModal'))
    editModal = new Modal(document.getElementById('editModal'))
    couponModal = new Modal(document.getElementById('couponModal'))
    this.getProductas()
    this.verifyToken()
    this.getCoupon()
  }
}
</script>
