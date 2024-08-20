<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md mx-4">
      <h1 class="text-2xl font-bold text-green-600 mb-4">Submission Successful!</h1>
      <p class="text-lg mb-4">
        Your request has been submitted successfully. We will get back to you shortly after reviewing your submission.
      </p>
      <p class="text-lg">
        You will receive further updates through the email you provided.
      </p>
      <div class="mt-6 text-center">
        <router-link
          to="/"
          class="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        >
          Go to Homepage
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
  background-color: #3490dc; /* Primary color */
}
.bg-primary-dark {
  background-color: #2779bd; /* Darker shade of primary color */
}
</style>
