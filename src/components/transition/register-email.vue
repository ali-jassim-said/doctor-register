<template>
  <div class="input-email">
    <h2 class="email-head">Email</h2>
    <input placeholder="AhmedZain@gmail.com" class="type-text" type="text"  v-model="email" @input="validateEmail"  />
    <div v-if="emailError" class="error-message">
      <i class="ri-error-warning-fill"></i> Please enter a valid email address.
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      email: '',
      emailError: false
    };
  },
  methods: {
    validateEmail() {
      // Regular expression to validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Set emailError based on the validity of the email input
      this.emailError = !emailRegex.test(this.email);
    }
  }
};
</script>

<style>

</style>
