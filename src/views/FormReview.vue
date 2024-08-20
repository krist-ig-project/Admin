<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-xl rounded-lg p-8 max-w-md mx-4">
      <h1 class="text-3xl font-bold text-green-600 mb-6">Submission Successful!</h1>
      <p class="text-lg mb-4">
        Your request has been successfully submitted. Our team will review it and get back to you shortly.
      </p>
      <p class="text-lg mb-6">
        You will receive further updates through the email address you provided.
      </p>
      <div class="mt-8 text-center">
        <router-link
          to="/"
          class="inline-block px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-primary-dark transition duration-300 ease-in-out"
        >
          Return to Homepage
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessPage'
}
</script>

<style scoped>
.bg-primary {
  background-color: #007bff; /* Primary color */
}
.bg-primary-dark {
  background-color: #0056b3; /* Darker shade of primary color */
}
.text-green-600 {
  color: #38a169; /* Green text color */
}
.bg-gray-100 {
  background-color: #f7fafc; /* Light gray background */
}
.shadow-xl {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
