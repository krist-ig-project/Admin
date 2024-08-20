<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-primary text-white py-6">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold">TKO Financial Management</h1>
        <h2 class="text-xl mt-2">Exclusive Access Portal</h2>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <section class="bg-white shadow-lg rounded-lg overflow-hidden p-6 sm:p-10">
        <h3 class="text-xl font-semibold mb-4 text-primary">Welcome to TKO Financial Management</h3>
        <p class="text-lg mb-4">
          This portal is dedicated to providing exclusive financial management services for authorized individuals within the TKO network.
          As part of our commitment to maintaining the highest standards of confidentiality and security, access to this site is restricted to those who have been granted permission.
        </p>
        <p class="text-lg mb-4">
          Here, you can manage your financial requests, view detailed reports, and stay informed about the latest updates related to your financial support.
          Please ensure you keep your login credentials confidential and report any suspicious activity immediately.
        </p>
        <p class="text-lg">
          If you have any questions or need assistance, please contact our support team at <a href="mailto:support@tko-financial.com" class="text-primary">support@tko-financial.com</a>.
        </p>
      </section>

      <section class="mt-8">
        <h3 class="text-xl font-semibold mb-4 text-primary">Recent Updates</h3>
        <ul class="list-disc list-inside pl-5">
          <li>Our new financial report for Q2 2024 is now available. Please log in to view the details.</li>
          <li>We are enhancing our security measures to ensure the protection of your sensitive information.</li>
          <li>Scheduled maintenance is planned for next week. Expect brief outages during this period.</li>
        </ul>
      </section>
    </main>

    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2024 TKO Financial Management. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.bg-primary {
  background-color: #3490dc; /* Primary color */
}
.text-primary {
  color: #3490dc; /* Primary color text */
}
</style>
