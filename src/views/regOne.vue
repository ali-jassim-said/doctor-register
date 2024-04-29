<template>
  <v-row class="register">
    <v-col class="register-pic">
      <v-img class="img" src="../assets/reg.svg"></v-img>
    </v-col>
    <v-col class="register-form">
      <div class="form">
        <div class="form-header">
          <h1>Doctor Registration</h1>
          <p>Use your phone or email to register on Kashfia</p>
        </div>
        <div class="get-info">
          <div class="info-head">
            <div class="phoneNumber" :class="{ active: activeComponent === 'phone' }"  @click="showPhone">
              <h2 :class="{ active: activeComponent === 'phone' }">Phone Number</h2>
            </div>
            <div class="email" :class="{ active: activeComponent === 'email' }"  @click="showEmail">
              <h2 :class="{ active: activeComponent === 'email' }">Email</h2>
            </div>
          </div>
          <registerPhone v-if="activeComponent === 'phone'"/>
          <registerEmail v-if="activeComponent === 'email'"/>
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
           <router-link :to="{ name: 'regTow'}"> <button type="button" class="btn">Login</button> </router-link>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import registerPhone from "@/components/transition/register-phone.vue"
import registerEmail from "@/components/transition/register-email.vue"
import { ref, watch } from "vue";

const activeComponent = ref('phone'); 


const showPhone = () => {
  activeComponent.value = 'phone';
};


const showEmail = () => {
  activeComponent.value = 'email';
};

const otpValue = ref("");
let otpError = false;


const validateOTP = () => {
  const otpRegex = /^\d{4}$/; 
  otpError = !otpRegex.test(otpValue.value);
};


watch(otpValue, validateOTP);
</script>

<style>
@import url("../assets/css/register.css");
</style>


