<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md mx-4 text-center">
      <h1 class="text-3xl font-bold text-red-600 mb-6">Access Denied</h1>
      <p class="text-lg mb-4">
        You do not have permission to access this page. Please ensure you have the correct permissions or contact the support team for assistance.
      </p>
      <p class="text-lg mb-6">
        If you believe this is an error or if you have any questions, please reach out to us at <a href="mailto:tko.financialteam@gmail.com" class="text-primary font-semibold">tko.financialteam@gmail.com</a>.
      </p>
      <router-link
        to="/"
        class="inline-block px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-primary-dark transition duration-300 ease-in-out"
      >
        Return to Homepage
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccessDeniedPage'
}
</script>

<style scoped>
.bg-primary {
  background-color: #007bff; /* Primary color */
}
.bg-primary-dark {
  background-color: #0056b3; /* Darker shade of primary color */
}
.text-red-600 {
  color: #e53e3e; /* Red text color */
}
.text-primary {
  color: #007bff; /* Primary color */
}
.bg-gray-100 {
  background-color: #f7fafc; /* Light gray background */
}
.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
