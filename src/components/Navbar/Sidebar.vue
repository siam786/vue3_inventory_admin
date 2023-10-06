<script setup>
import NavItem from '@/components/Navbar/NavItem.vue'
</script>

<template>
  <aside class="col-span-1 border-r bg-cyan-950">
    <div class="flex flex-col justify-center">
      <div class="py-3 mx-1 my-4 bg-red-100 rounded">
        <div class="flex items-center justify-center">
          <div>
            <img
              class="rounded-full w-9 h-9"
              src="https://lh3.googleusercontent.com/a/ACg8ocJ2qs9Yq1foyDbz6ZnWDd1seU1izkeOWpUEM8II1XPedVH1=s96-c-rg-br100"
            />
          </div>
          <div class="ps-1.5 font-inter">
            <h5 class="font-semibold text-md">Shohrab Hossain</h5>
            <h6 class="text-xs">Admin</h6>
          </div>
        </div>
      </div>
      <div class="w-full">
        <ul class="flex flex-col px-1">
          <NavItem />
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped></style>
