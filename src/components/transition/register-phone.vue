<template>
  <div class="input-phone">
    <div class="select-box">
      <p>Phone Number</p>
      <div class="selected-option">
        <div>
          <span
            class="iconify"
            :data-icon="'flag:' + selectedCountry.code.toLowerCase() + '-4x3'"
          ></span>
          <strong>+{{ selectedCountry.phone }}</strong>
          <i class="ri-arrow-down-s-line"></i>
        </div>
        <input
          mask="+47 ### ## ###"
          type="tel"
          name="tel"
          placeholder="7711111111"
          v-model="phoneNumber"
        />
      </div>
      <div v-if="phoneNumberError" class="error-message">
        <i class="ri-error-warning-fill"></i>Your Phone Number isnt listed in
        our system!
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

const countries = ref([{ name: "Iraq", code: "IQ", phone: 964 }]);

const selectedCountry = reactive(countries.value[0]); // Initialize selected country

const phoneNumber = ref("");
let phoneNumberError = false;

// Function to validate phone number format
const validatePhoneNumber = () => {
  const phoneNumberRegex = /^\d*$/; // Regex to match only digits
  phoneNumberError = !phoneNumberRegex.test(phoneNumber.value);
};

// Watch for changes in phoneNumber and validate
watch(phoneNumber, validatePhoneNumber);
</script>

