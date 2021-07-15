import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/en.json'
import 'jquery'
import 'bootstrap'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Loading from 'vue3-loading-overlay'
import * as VueAos from 'vue-aos'
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import ProductsCart from '@/components/ProductsCart.vue'
import SwiperCore, {
  Pagination
} from 'swiper/core'
SwiperCore.use([Pagination])
defineRule('email', email)
defineRule('required', required)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')
const app = createApp(App).use(router)
app.use(VueAxios, axios)
app.use(VueAos)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('Loading', Loading)
app.component('ProductsCart', ProductsCart)

app.mount('#app')
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
