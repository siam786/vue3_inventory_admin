import { createRouter, createWebHistory } from 'vue-router'

import About from '@/views/About.vue'
import Products from '@/views/Products.vue'
import Orders from '@/views/Orders.vue'
import Customers from '@/views/Customers.vue'
import Dashboard from '@/views/Dashboard.vue'
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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/product/:id',
      name: 'singleProduct',
      component: SingleProduct
    }
  ]
})

export default router
