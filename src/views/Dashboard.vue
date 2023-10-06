<script setup></script>

<template>
  <section class="container mx-auto">
    <div class="grid grid-cols-12 gap-6">
      <div class="flex col-span-3 gap-3 px-6 py-4 bg-white rounded shadow">
        <div
          class="w-16 h-16 rounded-full flex items-center justify-center text-[#4eb529] bg-[#4eb52926]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-shopping-bag"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <div class="ps-2">
          <h3 class="text-3xl font-bold font-inter">33</h3>
          <p class="text-gray-600 text-[14px] font-semibold font-inter">Total Orders</p>
        </div>
      </div>
      <div class="flex col-span-3 gap-3 px-6 py-4 bg-white rounded shadow">
        <div
          class="w-16 h-16 rounded-full flex items-center justify-center text-[#fcac00] bg-[#fcac0026]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-clock"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
        <div class="ps-2">
          <h3 class="text-3xl font-bold font-inter">16</h3>
          <p class="text-gray-600 text-[14px] font-semibold font-inter">Order Pending</p>
        </div>
      </div>
      <div class="flex col-span-3 gap-3 px-6 py-4 bg-white rounded shadow">
        <div
          class="w-16 h-16 rounded-full flex items-center justify-center text-[#0d5abf] bg-[#0d5abf26]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-refresh-cw"
          >
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
        </div>
        <div class="ps-2">
          <h3 class="text-3xl font-bold font-inter">1</h3>
          <p class="text-gray-600 text-[14px] font-semibold font-inter">Order Processing</p>
        </div>
      </div>
      <div class="flex col-span-3 gap-3 px-6 py-4 bg-white rounded shadow">
        <div
          class="w-16 h-16 rounded-full flex items-center justify-center text-[#20b250] bg-[#FFF]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-check-circle"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <div class="ps-2">
          <h3 class="text-3xl font-bold font-inter">33</h3>
          <p class="text-gray-600 text-[14px] font-semibold font-inter">Total Orders</p>
        </div>
      </div>
    </div>
  </section>
</template>
