<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-primary text-white py-6">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold">TKO Financial Management Portal</h1>
        <h2 class="text-xl mt-2">Exclusive Access Only</h2>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <section class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-6 sm:p-10">
          <h3 class="text-xl font-semibold mb-4 text-primary">Welcome to TKO Financial Management Portal</h3>
          <p class="text-lg mb-6">
            This portal is designed exclusively for authorized individuals who have been granted access to manage and review financial information related to TKO. Our goal is to provide a secure, efficient, and transparent platform for financial management and support.
          </p>
          <p class="text-lg mb-6">
            As a member of this private network, you have the privilege of accessing sensitive financial resources, including request forms, financial reports, and personalized support options. We prioritize the confidentiality and security of all financial data, ensuring that it is only accessible to those with authorized permissions.
          </p>
          <p class="text-lg mb-6">
            If you require assistance or have any questions regarding your access, please contact our support team at <a href="mailto:support@tko-financial.com" class="text-accent hover:underline">support@tko-financial.com</a>. We are here to help and ensure that you have a seamless experience on our platform.
          </p>
          <p class="text-lg mb-6">
            Please note that any unauthorized access or attempts to bypass security measures will result in immediate suspension of access and potential legal action.
          </p>
          <p class="text-lg mb-6">
            Thank you for your cooperation and commitment to maintaining the integrity of our financial management system.
          </p>
        </div>
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
  background-color: #004b49; /* Primary color */
}
.bg-primary-dark {
  background-color: #003737; /* Darker shade of primary color */
}
.text-accent {
  color: #008c95; /* Accent color */
}
.hover\:underline:hover {
  text-decoration: underline;
}
</style>
