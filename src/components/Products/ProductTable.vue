<script setup>
import axios from 'axios'
import { RouterLink } from 'vue-router'
import { onBeforeMount, reactive, ref } from 'vue'
const products = ref([])
onBeforeMount(async () => {
  axios.get('https://dummyjson.com/products?limit=20').then((res) => {
    //console.log(res.data.products)
    products.value = res.data.products
  })
})
</script>

<template>
  <div class="relative overflow-x-auto bg-red-900 border rounded">
    <table class="w-full text-sm text-left text-white dark:text-white">
      <thead
        class="text-xs text-gray-700 uppercase bg-slate-200 dark:bg-cyan-900 dark:text-white"
      >
        <tr>
          <th scope="col" class="px-6 py-3">S/L</th>
          <th scope="col" class="px-6 py-3">Title</th>
          <th scope="col" class="px-6 py-3">Unit Price</th>
          <th scope="col" class="px-6 py-3">Number of item</th>
          <th scope="col" class="px-6 py-3">Brand</th>
          <th scope="col" class="px-6 py-3">Category</th>
          <th scope="col" class="px-6 py-3">View Details</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products" :key="product.id"
          class="bg-white border-b dark:bg-cyan-900 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="px-6 py-4">{{ product.id }}</td>
          <td
            class="flex items-center gap-3 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
          >
            <!-- <span>
              <img class="w-8 h-8 rounded-full" :src="product.thumbnail" alt="" />
            </span> -->
            {{ product.title }}
          </td>
          <td class="px-6 py-4 text-[#e74944] font-semibold">${{ product.price }}</td>
          <td class="px-6 py-4 text-white">{{ product.stock }}</td>
          <td class="px-6 py-4 text-white">{{ product.brand }}</td>
          <td class="px-6 py-4 text-white capitalize">{{ product.category }}</td>
          <td class="px-6 py-4 text-white">
            <button>
              <RouterLink :to="{ name: 'singleProduct', params: { id: product.id } }">
                <button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                  View Details
</button>
              </RouterLink>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
