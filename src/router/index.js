import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Backside from '../views/Backside.vue'
import Editproduct from '../views/Editproduct.vue'
import Description from '../views/Description.vue'
import Order from '../views/Order.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Nail art'
    }
  },
  {
    path: '/products',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/backside',
    name: 'Backside',
    component: Backside
  },
  {
    path: '/backside/Editproduct',
    name: 'Editproduct',
    component: Editproduct
  },
  {
    path: '/products/Descriptiont',
    name: 'Descriptiont',
    component: Description
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
