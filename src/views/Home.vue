<!-- ParentComponent.vue -->
<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="inputValue">Enter Value:</label>
      <input v-model="inputValue" type="text" id="inputValue" />
      <button type="submit">Submit</button>
    </form>

    <!-- Render ChildComponent only when form is submitted -->
    <Dashboard v-if="formSubmitted" :childProp="inputValue" />
  </div>
</template>

<script>
import Dashboard from "/src/components/Dashboard.vue";

export default {
  data() {
    return {
      inputValue: '',
      formSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic if needed
      this.formSubmitted = true;
    },
  },
  components: {
    Dashboard,
  },
};
</script>
