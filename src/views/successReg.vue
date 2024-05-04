<template>
  <v-row class="register">
    <v-col
      lg="4"
      md="12"
      sm="12"
      xs="12"
      class="register-pic"
      v-if="!isSmAndDown"
    >
      <v-img class="img" src="../assets/reg.svg"></v-img>
    </v-col>
    <v-col lg="4" md="12" sm="12" xs="12" class="register-success">
      <div class="success">
        <img src="../assets/img/success.png" alt="" />
        <div class="success-content">
          <h1>Success!</h1>
          <h2>Now your application is under review</h2>
          <p>We’ll notify you once the review is complete</p>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

// Create a ref to store the window width
const windowWidth = ref(window.innerWidth);

// Update the window width ref when the window is resized
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

// Listen for window resize events
onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
});

// Remove the resize event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

// Compute if the screen is small and below
const isSmAndDown = computed(() => {
  return windowWidth.value <= 600; // Adjust the value as needed
});
</script>

<style>
@import url("../assets/css/register.css");

.register-success {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-success .success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 343px;
  height: 408.5px;
  padding: 16px;
  border-radius: 16px;
}

.success img {
  width: 145px;
  height: 125px;
}

.register-success .success .success-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.success-content h1 {
  width: 138px;
  height: 40px;

  font-size: 32px;
  font-weight: 600;
  line-height: 40.32px;
  letter-spacing: -0.02em;
  text-align: left;
  color: rgba(0, 0, 0, 1);
}

.success-content h2 {
  width: 274px;
  height: 20px;

  font-size: 16px;
  font-weight: 400;
  line-height: 20.16px;
  text-align: left;
  color: rgba(72, 72, 72, 1);
}

.success-content p {
  width: 333px;
  height: 20px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20.16px;
  text-align: center;
  color: rgba(16, 104, 255, 1);
}
</style>
