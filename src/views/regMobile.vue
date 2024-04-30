<template>
  <v-row class="register">
    <v-col lg="6" md="6" sm="12" xs="12" class="register-form justify">
      <div class="form mob">
        <div class="form-header">
          <h1>Doctor Registration</h1>
          <p>Use your phone or email to register on Kashfia</p>
        </div>
        <div class="get-info mob">
          <div class="info-head mob">
            <div
              class="phoneNumber mob"
              :class="{ active: activeComponent === 'phone' }"
              @click="showPhone"
            >
              <h2 :class="{ active: activeComponent === 'phone' }">
                Phone Number
              </h2>
            </div>
            <div
              class="email mob"
              :class="{ active: activeComponent === 'email' }"
              @click="showEmail"
            >
              <h2 :class="{ active: activeComponent === 'email' }">Email</h2>
            </div>
          </div>
          <registerPhone class="mob" v-if="activeComponent === 'phone'" />
          <registerEmail class="mob" v-if="activeComponent === 'email'" />
          <div class="otp mob">
            <div class="otp-text mob">
              <p>OTP Code</p>
              <p>Resend OTP <span>25:20</span></p>
            </div>
            <div>
              <v-otp-input
                :width="448"
                model-value="1234"
                :length="4"
                class="mob"
              ></v-otp-input>
            </div>
            <div v-if="otpError" class="error-message mob">
              <i class="ri-error-warning-fill"></i> Your code is wrong!
            </div>
            <div class="check mob">
              <div class="check-text mob">
                <v-checkbox></v-checkbox>
                I agree to the <span class="span ">Terms & Privacy</span>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <router-link :to="{ name: 'regTow' }">
          <button type="button" class="btn mob">Login</button>
        </router-link>
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
</script>

<style>
@import url("../assets/css/register.css");

.justify {
  justify-content: space-around !important;
  align-items: center !important;
  flex-direction: column;
}

.mob{
    width: 343px !important;
    gap: 32px;
}


</style>
