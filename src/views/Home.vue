<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold">TKO Financial Management Portal</h1>
        <h2 class="text-xl mt-2">Exclusive Access Only</h2>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <section class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-6 sm:p-10">
          <h3 class="text-xl font-semibold mb-4 text-primary">Welcome to the TKO Financial Management Portal</h3>
          <p class="text-lg mb-6">
            This portal is designed exclusively for authorized individuals who have been granted access to manage and review financial information related to TKO. As a secure and private platform, it offers an array of tools and resources tailored to meet your financial management needs.
          </p>
          <p class="text-lg mb-6">
            <strong>Features:</strong>
            <ul class="list-disc list-inside pl-5">
              <li>Access to comprehensive financial reports and analytics</li>
              <li>Submission and tracking of financial support requests</li>
              <li>Secure document upload and management</li>
              <li>Personalized support and consultation services</li>
            </ul>
          </p>
          <p class="text-lg mb-6">
            <strong>Important Notes:</strong>
            <ul class="list-disc list-inside pl-5">
              <li>Only authorized users with valid credentials can access this portal.</li>
              <li>All financial data is encrypted and securely stored to protect confidentiality.</li>
              <li>Please ensure that you follow all security protocols and guidelines provided.</li>
            </ul>
          </p>
          <p class="text-lg mb-6">
            If you encounter any issues or have questions regarding your access or usage of the portal, please reach out to our support team at <a href="mailto:support@tko-financial.com" class="text-accent hover:underline">support@tko-financial.com</a>. We are committed to providing timely assistance and ensuring that your experience is seamless and efficient.
          </p>
          <p class="text-lg mb-6">
            Unauthorized access or misuse of the portal will result in immediate suspension of access and could lead to legal consequences. We appreciate your understanding and adherence to our privacy and security measures.
          </p>
          <p class="text-lg mb-6">
            Thank you for being a valued member of our financial management community. We look forward to supporting you and ensuring the success of your financial endeavors.
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
