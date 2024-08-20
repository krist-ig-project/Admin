<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold">TKO Financial Management Portal</h1>
        <h2 class="text-xl mt-2">Exclusive Access for Authorized Members</h2>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <section class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-6 sm:p-10">
          <h3 class="text-xl font-semibold mb-4 text-primary">Welcome to TKO's Exclusive Financial Management Portal</h3>
          <p class="text-lg mb-6">
            As a member of the TKO community, you have been granted exclusive access to this secure portal, designed to provide comprehensive financial management and support. This platform is dedicated to ensuring that all financial processes related to TKO are handled efficiently and confidentially.
          </p>
          <p class="text-lg mb-6">
            <strong>What You Can Do:</strong>
            <ul class="list-disc list-inside pl-5">
              <li>View detailed financial reports and analytics</li>
              <li>Submit and track financial support requests</li>
              <li>Manage and upload sensitive financial documents securely</li>
              <li>Receive personalized financial consultation and support</li>
            </ul>
          </p>
          <p class="text-lg mb-6">
            <strong>Important Guidelines:</strong>
            <ul class="list-disc list-inside pl-5">
              <li>This portal is for authorized members only. Unauthorized access is strictly prohibited.</li>
              <li>All data is protected with state-of-the-art encryption to ensure privacy and security.</li>
              <li>Adhere to all provided security protocols and guidelines to safeguard your information.</li>
            </ul>
          </p>
          <p class="text-lg mb-6">
            For assistance or inquiries regarding your access or any issues encountered, please contact our support team at <a href="mailto:support@tko-financial.com" class="text-accent hover:underline">support@tko-financial.com</a>. Our team is here to provide timely assistance and ensure a smooth experience.
          </p>
          <p class="text-lg mb-6">
            Please note that any attempt to misuse or access the portal without authorization will lead to immediate suspension and potential legal action. We appreciate your cooperation in maintaining the integrity and security of this platform.
          </p>
          <p class="text-lg mb-6">
            We value your role in the TKO community and are committed to supporting you through this portal. Thank you for your trust and dedication.
          </p>
        </div>
      </section>
    </main>

    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2024 TKO Financial Management. All rights reserved. | Designed for exclusive member access.</p>
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
