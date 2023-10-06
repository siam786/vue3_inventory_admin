<script setup>
import { RouterLink } from 'vue-router'
const navItems = [
  {
    id: 1,
    name: 'Dashboard',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>',
    link: '/'
  },
  {
    id: 2,
    name: 'Products',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z"/></svg>',
    link: '/products'
  },
 
]
</script>

<template>
  <li v-for="navItem in navItems" :key="navItem.id">
    <RouterLink
      :to="navItem.link"
      class="active:text-red-900 text-white hover:text-[#ffffff] font-inter font-semibold active:bg-red-100 py-2 px-6 flex items-center gap-x-1.5 text-md rounded"
    >
      <span v-html="navItem.icon"></span>
      {{ navItem.name }}
    </RouterLink>
  </li>
</template>

<style scoped>
.router-link-active,
.router-link-exact-active {
  background-color: #f8f8f8;
  color: #ec5a06;
}
</style>
