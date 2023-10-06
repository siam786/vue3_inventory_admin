<script setup>
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'
import { RouterLink } from 'vue-router'
const isLoading = ref(true)
const products = ref([])
onBeforeMount(async () => {
  setTimeout(() => {
    isLoading.value = true
    axios.get('https://dummyjson.com/products?limit=20').then((res) => {
      //console.log(res.data.products)
      products.value = res.data.products
      isLoading.value = false
    }, 2000)
  })
})
</script>

<template>
  <div class="relative overflow-x-auto border rounded">
    <!-- loading start -->
    <table v-if="isLoading" class="flex items-center justify-center">
      <button type="button" class="py-1" disabled>
        <svg class="h-5 mr-3 text-white w-150 animate-spin" viewBox="0 0 24 24"></svg>
        <h3 class="text-lg font-bold text-white">Please wait Data Loading...</h3>
      </button>
    </table>  
    <!-- loading end -->
    <table v-else class="w-full text-sm text-left text-white dark:text-white">
      <thead class="text-xs text-gray-700 uppercase bg-slate-200 dark:bg-cyan-900 dark:text-white">
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
          v-for="product in products"
          :key="product.id"
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
                <button
                  class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
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
