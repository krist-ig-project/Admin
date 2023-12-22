<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="inputField">Enter Data:</label>
      <input v-model="formData" type="text" id="inputField" />
      <button type="submit">Submit</button>
    </form>
    
    <Dashboard :childData="formData" :childDataSubmitted="formSubmitted" />
  </div>
</template>

<script>
import Dashboard from "/src/components/Dashboard.vue";

export default {
  data() {
    return {
      formData: "",
      formSubmitted: false,
    };
  },
  components: {
    Dashboard
  },
  methods: {
    async submitForm() {
      // Perform form submission logic
      // For example, you might want to save the form data to a database

      // Update the formSubmitted flag to notify child component
      this.formSubmitted = true;

      // If you want to notify the child component of the form submission,
      // you can pass the data through the childDataSubmitted prop
      // this.$emit('formSubmitted', this.formData);

      // Now you can fetch the subcollection data in the child component
    }
  }
};
</script>
