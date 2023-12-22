<!-- ChildComponent.vue -->
<template>
  <div>
    <p>Value from Parent Component: {{ childProp }}</p>
  </div>
</template>

<script>
export default {
  props: {
    childProp: {
      type: String,
      required: true,
    },
  },
  watch: {
    childProp: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.fetchSubcollectionData();
        }
      },
    },
  },
  methods: {
    async fetchSubcollectionData() {
      try {
        console.log('called fetchSubcollectionData');

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>
