import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
import Products from '@/views/Products.vue'
import SingleProduct from '@/views/SingleProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },

    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path:'/about',
      name:'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/product/:id',
      name: 'singleProduct',
      component: SingleProduct
    }
  ]
})

export default router
