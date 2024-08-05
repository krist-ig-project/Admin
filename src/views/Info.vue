<template>
  <div>
    <div class="p-1 dark:bg-gray-800 min-h-screen border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="relative max-h-screen overflow-x-auto overflow-y-scroll shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-6">#</th>
              <th scope="col" class="px-6 py-6">User ID</th>
              <th scope="col" class="px-6 py-6">User Email</th>
              <th scope="col" class="px-6 py-6">Time Created</th>
              <th scope="col" class="px-6 py-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="user.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4">{{ index + 1 }}</td>
              <td class="px-6 py-4">{{ user.user_id }}</td>
              <td class="px-6 py-4">{{ user.email }}</td>
              <td class="px-6 py-4">{{ user.time_created }}</td>
              <td class="px-6 py-4">
                <router-link :to="{ path: '/', query: { id: user.user_id } }">Info</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import userData from './user-data.json';

export default {
  data() {
    return {
      users: userData
    };
  }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
