<template>
 <div class="work-flex">
    <div class="form-name" :class="{mopWorkPlace: isSmAndDown}">
      <form>
        <label>Workplace</label>
        <input placeholder="Enter your workplace" type="text" />
      </form>
      <form>
        <label>Workplace City</label>
        <input placeholder="Enter your workplace city" type="text" />
      </form>
    </div>
    <div class="country">
      <label>Specilization</label>
      <v-select
        placeholder="Select specialization"
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
    <div class="form-name Specialization">
      <form>
        <label>Sub-Specialization</label>
        <input placeholder="Enter sub specialization" type="text" />
      </form>
      <div class="Specialization">
        <button><span>Cardiology</span> <i class="ri-close-line"></i></button>
        <button><span>Neurology</span> <i class="ri-close-line"></i></button>
        <button><span>Opthalmology</span> <i class="ri-close-line"></i></button>
      </div>
    </div>
  </div>
  <div>
    <div class="next-back">
      <div class="buttons" :class="{mopNextWidth: isSmAndDown}">
        <button class="back" v-if="!isSmAndDown" @click="handleBack">Back</button>
        <button class="next" :class="{mopNextWidth: isSmAndDown}" @click="handleNext">Next</button>
      </div>
    </div>
  </div>

</template>

<script setup>

import { ref ,onMounted , onUnmounted, computed, defineEmits } from "vue";



const emits = defineEmits(['next', 'back']);

const handleNext = () => {
  // Emit a custom event to notify the parent component that the "Next" button was clicked
  emits('next');
};

const handleBack = () => {
  // Emit a custom event to notify the parent component that the "Next" button was clicked
  emits('back');
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




.v-field__field {
  margin-top: -5px;
  height: 40px;
}

.form-name.Specialization {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.Specialization {
  width: 326px;
  height: 32px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.Specialization button {
  height: 32px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: rgba(243, 243, 243, 1);
  cursor: pointer;
}

.Specialization button span {
  font-size: 12px;
  font-weight: 500;
  line-height: 15.12px;
  text-align: left;
  color: rgba(42, 42, 42, 1);
  cursor: pointer;
}

.Specialization button i {
  color: rgba(191, 191, 191, 1);
  cursor: pointer;
}




.mopWorkPlace{
  flex-direction: column !important;
  height: 160px !important;
}

.mopNextWidth{
  border-radius: 48px !important;
  width: 100% !important;
  Padding: 8px 24px 8px 24px;
  margin-bottom: 33px;
}


.work-flex{
  display: flex;
    flex-direction: column;
    height: 100%;
    gap: 16px;
}
</style>
