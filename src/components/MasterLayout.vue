<script setup>
import Topbar from '@/components/Navbar/Topbar.vue'
import Sidebar from '@/components/Navbar/Sidebar.vue'
</script>

<template>
  <nav class="py-3 mx-auto border-b bg-cyan-900">
    <Topbar />
  </nav>
  <div class="grid grid-cols-8">
    <Sidebar />
    <main class="min-h-screen col-span-7 p-6 bg-red-50">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped></style>
