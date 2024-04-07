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
    <td class="px-6 py-4">{{ user.userId }}</td>
    <td class="px-6 py-4">{{ user.userEmail }}</td>
    <td class="px-6 py-4">{{ user.timeCreated }}</td>
    <td class="px-6 py-4">
        <router-link :to="{ path: '/', query: { id: user.userId } }">Info</router-link>
    </td>
</tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore';
import { db } from '/src/firebase/index.js';
import { onMounted, ref } from 'vue'; // Assuming you're using Vue 3

export default {
  setup() {
    const users = ref([]);

    onMounted(async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'usersDetails'));
        querySnapshot.forEach(doc => {
          users.value.push({
            id: doc.id,
            userId: doc.data().userId,
            userEmail: doc.data().userEmail,
            timeCreated: formatTimestamp(doc.data().timeCreated),
          });
        });
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    });

    // Function to format Firestore timestamp
    function formatTimestamp(timestamp) {
      const date = timestamp.toDate(); // Convert Firestore Timestamp to JavaScript Date
      return formatDate(date);
    }

    // Function to format JavaScript Date object
    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    return { users };
  },
};
</script>
