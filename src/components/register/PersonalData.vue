<template>
  <div class="profile">
    <div class="head">Profile Image</div>
    <div class="content">
      <div class="pic" v-if="!isSmAndDown">
        <div
          class="icon-profile"
          ref="profileIcon"
          :class="{ imgUp: !!imageUrl }"
        >
          <i class="ri-user-3-line" v-show="!imageUrl"></i>
          <img
            v-show="!!imageUrl"
            :src="imageUrl"
            alt="Profile Image"
            style="width: 80px; height: 80px; border-radius: 50%"
          />
        </div>
      </div>
      <div class="input" :class="{mobPadding: isSmAndDown}">
        <div class="file">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              name="resume"
              @change="handleFileChange"
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="ri-add-line"></i>
              </span>
              <span class="file-label"> Upload a Picture </span>
            </span>
          </label>
        </div>

        <p class="message" v-if="!isSmAndDown">
          <i class="ri-error-warning-line"></i>
          <span>Add profile Image. max size is 2MB</span>
        </p>
      </div>
    </div>
  </div>
  <div class="form-name">
    <form>
      <label>Full Name</label>
      <input placeholder="Name" type="text" />
    </form>
  </div>
  <div class="form-biography">
    <label>Biography</label>
    <textarea placeholder="Auahgelap"></textarea>
  </div>
  <div class="date-country" :class="{mobCountry: isSmAndDown}">
    <div class="date">
      <label>Date of Birth</label>
      <Datepicker v-model="date" />
    </div>
    <div class="country">
      <label>Country</label>
      <v-select
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
      ></v-select>
    </div>
  </div>
  <div class="date-country" :class="{mobCountry: isSmAndDown}">
    <div class="country">
      <label>City</label>
      <v-select
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
      ></v-select>
    </div>
    <div class="country">
      <label>District</label>
      <v-select
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
      ></v-select>
    </div>
  </div>
  <div class="gender-cash" :class="{mobCountry: isSmAndDown}">
    <div class="gender">
      <label> Gender </label>

      <form class="all-gender">
        <div class="male">
          <input type="radio" id="option1" name="options" value="option1" />
          <label for="option1">Male</label>
        </div>
        <div class="female" for="option2">
          <input type="radio" id="option2" name="options" value="option2" />
          <label for="option2">Female</label>
        </div>
      </form>
    </div>
    <div class="cash">
      <label>Zain Cash Account Number</label>
      <input type="tel" />
    </div>
  </div>
  <div class="next-back">
    <div class="buttons" :class="{mopNextWidth: isSmAndDown}">
      <router-link :to="{ name: 'regOne'}"><button class="back" v-if="!isSmAndDown">Back</button></router-link>
      <button class="next" :class="{mopNextWidth: isSmAndDown}" @click="handleNext">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref ,onMounted , onUnmounted, computed, defineEmits  } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();
const imageUrl = ref(""); // Image URL

function handleFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    imageUrl.value = ""; // Reset image URL when no file is selected
  }
}


const emits = defineEmits(['next']);

const handleNext = () => {
  // Emit a custom event to notify the parent component that the "Next" button was clicked
  emits('next');
};







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
@import "https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css";
@import url("../../assets/css/personal-data.css");

.imgUp {
  width: 80px !important;
  height: 80px !important;
  border-radius: 50% !important;
  padding: 0 !important;
}


.mobPadding{
  padding: 0 !important;
}


.mobCountry{
  flex-direction: column !important;
  height: 100% !important;
}
</style>
