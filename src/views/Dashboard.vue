<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="container mx-auto">
    <div class="grid py-8 space-x-14 place-items-center">
      <h1 class="text-4xl text-center text">Welcome to Inventory Management System</h1>
      <h3 class="py-2 text-lg text-blue-900">Simple Inventory Management System</h3>
    
              <RouterLink to="/products">
                <button
                  class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Click Products
                </button>
              </RouterLink>
           
    </div>
  </section>
</template>
