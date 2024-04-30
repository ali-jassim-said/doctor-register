<template>
  <v-row class="register">
    <v-col lg="6" md="6" sm="12" xs="12" class="register-pic" :class="{mopPic: isSmAndDown}">
      <v-img class="img" src="../assets/reg.svg" :class="{mopPic: isSmAndDown}"></v-img>
      <router-link v-if="isSmAndDown" :to="{ name: 'regMobile' }">
              <button type="button" class="btn cont-mobile">Continue</button>
            </router-link>
    </v-col>
    <v-col lg="6" md="6" sm="12" xs="12" class="register-form"   v-if="!isSmAndDown">
      <div class="form">
        <div class="form-header">
          <h1>Doctor Registration</h1>
          <p>Use your phone or email to register on Kashfia</p>
        </div>
        <div class="get-info">
          <div class="info-head">
            <div
              class="phoneNumber"
              :class="{ active: activeComponent === 'phone' }"
              @click="showPhone"
            >
              <h2 :class="{ active: activeComponent === 'phone' }">
                Phone Number
              </h2>
            </div>
            <div
              class="email"
              :class="{ active: activeComponent === 'email' }"
              @click="showEmail"
            >
              <h2 :class="{ active: activeComponent === 'email' }">Email</h2>
            </div>
          </div>
          <registerPhone v-if="activeComponent === 'phone'" />
          <registerEmail v-if="activeComponent === 'email'" />
          <div class="otp">
            <div class="otp-text">
              <p>OTP Code</p>
              <p>Resend OTP <span>25:20</span></p>
            </div>
            <div>
              <v-otp-input
                :width="448"
                model-value="1234"
                :length="4"
              ></v-otp-input>
            </div>
            <div v-if="otpError" class="error-message">
              <i class="ri-error-warning-fill"></i> Your code is wrong!
            </div>
            <div class="check">
              <div class="check-text">
                <v-checkbox></v-checkbox>
                I agree to the <span class="span">Terms & Privacy</span>
              </div>
            </div>
            <router-link :to="{ name: 'regTow' }">
              <button type="button" class="btn">Login</button>
            </router-link>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import registerPhone from "@/components/transition/register-phone.vue";
import registerEmail from "@/components/transition/register-email.vue";
import { ref, watch } from "vue";

const activeComponent = ref("phone");

const showPhone = () => {
  activeComponent.value = "phone";
};

const showEmail = () => {
  activeComponent.value = "email";
};

const otpValue = ref("");
let otpError = false;

const validateOTP = () => {
  const otpRegex = /^\d{4}$/;
  otpError = !otpRegex.test(otpValue.value);
};

watch(otpValue, validateOTP);


// to mobile

import {  onMounted, onUnmounted, computed } from 'vue';

// Create a ref to store the window width
const windowWidth = ref(window.innerWidth);

// Update the window width ref when the window is resized
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

// Listen for window resize events
onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
});

// Remove the resize event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});

// Compute if the screen is small and below
const isSmAndDown = computed(() => {
  return windowWidth.value <= 600; // Adjust the value as needed
});

</script>

<style>
@import url("../assets/css/register.css");

.cont-mobile{
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.mopPic{
  padding: 0 !important;
  border-radius: 0 !important;
 
}


</style>
