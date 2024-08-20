<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-primary text-white py-6">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold">TKO Artist Management & The Toby Keith Foundation</h1>
        <h2 class="text-xl mt-2">Financial Support Request Form</h2>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <form class="bg-white shadow-lg rounded-lg overflow-hidden" @submit.prevent="handleSubmit">
        <div class="p-6 sm:p-10">
          <section class="mb-8">
            <h3 class="text-xl font-semibold mb-4 text-primary">Submission Instructions</h3>
            <p class="text-secondary">
              Please fill out this form completely and email it back to us at [Your Email Address]. If you need any
              assistance with filling out this form, do not hesitate to contact us.
            </p>
          </section>

          <section class="mb-8">
            <h3 class="text-xl font-semibold mb-4 text-primary">Personal Information</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium mb-2" for="photo">Attach Photo:</label>
                <input
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  id="photo"
                  type="file"
                  accept="image/*"
                  @change="handleFileUpload"
                />
                <p class="text-xs text-secondary mt-1">Please attach a recent photo of yourself.</p>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2" for="fullName">Full Name:</label>
                <input
                  v-model="form.fullName"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  id="fullName"
                  type="text"
                  placeholder="Please write your full legal name"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2" for="dob">Date of Birth:</label>
                <input
                  v-model="form.dob"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  id="dob"
                  type="text"
                  placeholder="DD/MM/YYYY"
                  maxlength="10"
                  @input="formatDate"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2" for="phone">Phone Number:</label>
                <input
                  v-model="form.phone"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  id="phone"
                  type="tel"
                  placeholder="Include country code if outside the USA"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2" for="email">Email Address:</label>
                <input
                  v-model="form.email"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  id="email"
                  type="email"
                />
              </div>
            </div>
            <div class="mt-6">
              <label class="block text-sm font-medium mb-2" for="address">Address:</label>
              <input
                v-model="form.streetAddress"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent mb-2"
                id="streetAddress"
                type="text"
                placeholder="Street Address"
              />
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  v-model="form.city"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  id="city"
                  type="text"
                  placeholder="City"
                />
                <input
                  v-model="form.state"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  id="state"
                  type="text"
                  placeholder="State/Province"
                />
                <input
                  v-model="form.postalCode"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  id="postalCode"
                  type="text"
                  placeholder="Postal Code"
                />
              </div>
              <input
                v-model="form.country"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-2"
                id="country"
                type="text"
                placeholder="Country"
              />
            </div>
          </section>

          <section class="mb-8">
            <h3 class="text-xl font-semibold mb-4 text-primary">Fan Information</h3>
            <div>
              <label class="block text-sm font-medium mb-2" for="fanSerialNumber">Fan Serial Number:</label>
              <input
                v-model="form.fanSerialNumber"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                id="fanSerialNumber"
                type="text"
              />
              <p class="text-xs text-secondary mt-1">This number is located on the back of your Toby Keith fan card</p>
            </div>
          </section>

          <section class="mb-8">
            <h3 class="text-xl font-semibold mb-4 text-primary">Financial Support Details</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium mb-2" for="amountRequested">Amount Requested:</label>
                <input
                  v-model="form.amountRequested"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  id="amountRequested"
                  type="number"
                  step="0.01"
                />
                <p class="text-xs text-secondary mt-1">Only USD($) and Euro(€) supported</p>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2" for="reason">Reason for Request:</label>
                <textarea
                  v-model="form.reason"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  id="reason"
                  rows="4"
                  placeholder="Please briefly describe the financial situation for which you are seeking support"
                ></textarea>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h3 class="text-xl font-semibold mb-4 text-primary">Payment Method</h3>
            <div>
              <label class="block text-sm font-medium mb-2" for="paymentMethod">Preferred Payment Method:</label>
              <select
                v-model="form.paymentMethod"
                id="paymentMethod"
                name="paymentMethod"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select a payment method</option>
                <option value="bankTransfer">Bank Transfer</option>
                <option value="paypal">PayPal</option>
                <option value="check">Check</option>
              </select>
            </div>
            <div v-if="form.paymentMethod" id="paymentDetails" class="mt-4">
              <div v-if="form.paymentMethod === 'bankTransfer'" id="bankTransferDetails" class="space-y-4">
                <input
                  v-model="form.bankName"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  type="text"
                  placeholder="Bank Name"
                />
                <input
                  v-model="form.accountName"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  type="text"
                  placeholder="Account Name"
                />
                <input
                  v-model="form.accountNumber"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  type="text"
                  placeholder="Account Number"
                />
                <input
                  v-model="form.swiftCode"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  type="text"
                  placeholder="SWIFT/BIC Code"
                />
              </div>
              <div v-if="form.paymentMethod === 'paypal'" id="paypalDetails" class="space-y-4">
                <input
                  v-model="form.paypalEmail"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  type="email"
                  placeholder="PayPal Email Address"
                />
              </div>
              <div v-if="form.paymentMethod === 'check'" id="checkDetails" class="space-y-4">
                <input
                  v-model="form.checkPayableTo"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  type="text"
                  placeholder="Check Payable To"
                />
                <input
                  v-model="form.checkAddress"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  type="text"
                  placeholder="Mailing Address"
                />
              </div>
            </div>
          </section>
        </div>

        <div class="bg-gray-100 px-6 py-4 sm:px-10 sm:py-6 flex justify-end">
          <button
            class="bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-secondary transition duration-300"
            type="submit"
          >
            Submit Request
          </button>
        </div>
      </form>
    </main>

    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2024 TKO Artist Management & The Toby Keith Foundation. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullName: '',
        dob: '',
        phone: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        fanSerialNumber: '',
        amountRequested: '',
        reason: '',
        paymentMethod: '',
        bankName: '',
        accountName: '',
        accountNumber: '',
        swiftCode: '',
        paypalEmail: '',
        checkPayableTo: '',
        checkAddress: ''
      },
      photo: null
    };
  },
  methods: {
    handleFileUpload(event) {
      this.photo = event.target.files[0];
    },
    formatDate() {
      const dob = this.form.dob.replace(/[^0-9]/g, '');
      if (dob.length === 2 || dob.length === 4) {
        this.form.dob = `${dob.slice(0, 2)}/${dob.slice(2, 4)}${dob.length > 4 ? '/' + dob.slice(4) : ''}`;
      } else {
        this.form.dob = dob;
      }
    },
    handleSubmit() {
      // Handle the form submission logic here, such as sending data to the server
      alert('Form submitted!');
    }
  }
};
</script>

<style scoped>
.bg-primary {
  background-color: #1a202c;
}
.text-primary {
  color: #1a202c;
}
.bg-secondary {
  background-color: #2d3748;
}
.text-secondary {
  color: #4a5568;
}
.focus\:ring-accent {
  --tw-ring-color: #2b6cb0;
}
</style>
