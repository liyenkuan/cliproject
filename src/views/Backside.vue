<template>
<!----toast---->
<div class="container container-p h-100">
<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
  <div class="d-flex">
    <div class="toast-body">
    {{myToast}}
   </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!----toast---->
<div class="py-5 px-5 border w-75 m-auto">
<Form v-slot="{ errors }" >
  <div class="row justify-content-md-center ">
    <div class="col-md-6 ">
          <label for="address" class="col align-self-start">email</label>
          <Field id="email" name="email" type="email" class="form-control "
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email" :rules="isEmail"
            v-model="user.email"></Field>
        <error-message name="email" class="invalid-feedback"></error-message>
    </div>
  </div>
  <div class="row justify-content-md-center pt-3">
    <div class="col-md-6 ">
      <label for="address" class="form-label">密碼</label>
      <Field id="address" name="密碼" type="text" class="form-control"
      :class="{ 'is-invalid': errors['密碼'] }"
            placeholder="請輸入電話" :rules="isPassword" v-model="user.password">
            </Field>
    <error-message name="密碼" class="invalid-feedback"></error-message>
    </div>
  </div>
  <div class="row justify-content-md-center">
    <div class="col-md-3 pt-3" >
      <button type="button" class="btn btn-secondary btn-lg btn-block w-100 " @click="onSubmit">登入</button>
    </div>
  </div>
</Form>
</div>
</div>
</template>
<script>
// import $ from 'jquery'
// @ is an alias to /src
import Toast from 'bootstrap/js/dist/toast'
let toastEl = ''
let toast = ''
const api = 'https://vue3-course-api.hexschool.io/'
const signinPath = 'admin/signin'
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      myToast: ''
    }
  },
  methods: {
    onSubmit () {
      // myModal.show()
      if (this.user.email !== '' || this.user.password !== '') {
        console.log(this.user)
        const url = `${api}${signinPath}`
        console.log(url)
        const user = {
          username: this.user.email,
          password: this.user.password
        }
        console.log(user)
        this.axios.post(url, user)
          .then((res) => {
            console.log(res)
            if (res.data.message === '登入成功') {
              const token = res.data.token
              console.log(token)
              const expired = res.data.expired
              console.log(expired)
              document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
              this.myToast = '登入成功'
              toast.show()
              setTimeout(() => { this.toEdit() }, 3000)
              // this.$router.push('/backside/Editproduct')
            } else {
              this.myToast = '登入失敗'
              toast.show()
            }
          })
          .catch((error) => {
            console.log(error)
            // this.myToast = '登入失敗'
            // toast.show()
          })
      } else {
        alert('error')
      }
    },
    isPassword (value) {
      if (value === '') {
        return '請輸入正確的密碼格式'
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
    toEdit () {
      this.$router.push('/backside/Editproduct')
    },
    verify () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1') //eslint-disable-line
      this.axios.defaults.headers.common['Authorization'] = token //eslint-disable-line
      this.axios.post(`${api}api/user/check`)
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            this.$router.push('/backside/Editproduct')
          }
        })
    }
  },
  mounted () {
    toastEl = this.$refs.toast
    toast = new Toast(toastEl, {
      delay: 3000
    })
    this.verify()
  }
}
</script>
<style lang="scss">
  .container-p{
    padding-top : 120px;
    padding-bottom : 400px;
  }
</style>
