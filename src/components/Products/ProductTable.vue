<script setup>
import axios from 'axios'
import { RouterLink } from 'vue-router'
import { onBeforeMount, reactive, ref } from 'vue'
const products = ref([])
onBeforeMount(async () => {
  axios.get('https://dummyjson.com/products?limit=15').then((res) => {
    //console.log(res.data.products)
    products.value = res.data.products
  })
})
</script>

<template>
  <div class="relative overflow-x-auto border rounded">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-slate-200 dark:bg-cyan-950 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">S/L</th>
          <th scope="col" class="px-6 py-3">Product name</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Stock</th>
          <th scope="col" class="px-6 py-3">Brand</th>
          <th scope="col" class="px-6 py-3">Category</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="px-6 py-4">{{ product.id }}</td>
          <td
            class="flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <span>
              <img class="w-8 h-8 rounded-full" :src="product.thumbnail" alt="" />
            </span>
            {{ product.title }}
          </td>
          <td class="px-6 py-4 text-[#ff7c08] font-semibold">${{ product.price }}</td>
          <td class="px-6 py-4">{{ product.stock }}</td>
          <td class="px-6 py-4">{{ product.brand }}</td>
          <td class="px-6 py-4 capitalize">{{ product.category }}</td>
          <td class="px-6 py-4">
            <button>
              <RouterLink :to="{ name: 'singleProduct', params: { id: product.id } }"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-eye me-2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle></svg
              ></RouterLink>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
