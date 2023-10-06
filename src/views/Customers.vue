<script setup>
import axios from 'axios'
import { onBeforeMount, reactive, ref } from 'vue'
const users = ref([])
onBeforeMount(async () => {
  axios.get('https://dummyjson.com/users?limit=15').then((res) => {
    //console.log(res.data.products)
    users.value = res.data.users
  })
})
</script>

<template>
  <div class="relative overflow-x-auto border rounded">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-slate-200 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">S/L</th>
          <th scope="col" class="px-6 py-3">Avatar</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Gender</th>
          <th scope="col" class="px-6 py-3">Date of Birth</th>
          <th scope="col" class="px-6 py-3">Blood Group</th>
          <th scope="col" class="px-6 py-3">User Name</th>
          <th scope="col" class="px-6 py-3">Password</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users" :key="user.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="px-6 py-4">{{ user.id }}</td>
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <img class="w-8 h-8 border-2 rounded-full" :src="user.image" alt="" />
          </td>
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ user.firstName + ' ' + user.lastName }}
          </td>
          <td class="px-6 py-4 capitalize">{{ user.gender }}</td>
          <td class="px-6 py-4">{{ user.birthDate }}</td>
          <td class="px-6 py-4">{{ user.bloodGroup }}</td>
          <td class="px-6 py-4">{{ user.username }}</td>
          <td class="px-6 py-4 capitalize">{{ user.password }}</td>
          <td class="px-6 py-4">
            <button>
              <svg
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
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
