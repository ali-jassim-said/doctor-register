<template>
  
  <div class="all-certification">
    <certification v-if="showCertification" />
    <div class="certification" v-if="!showCertification">
      
      <div class="form-name" :class="{ mopCert: isSmAndDown }">
        <form>
          <label class="national-color">Certification Title</label>
          <input
            class="national-placeholder"
            placeholder="Enter yIssuing Date"
            type="text"
          />
        </form>
        <form>
          <label class="national-color">Institution</label>
          <input
            class="national-placeholder"
            placeholder="Enter your ex"
            type="text"
          />
        </form>
      </div>

      <div class="form-name" :class="{ mopCert: isSmAndDown }">
        <form>
          <label class="national-color">Graduation Years</label>
          <div class="cert">
            <input
              class="national-placeholder input1"
              placeholder="Start"
              type="text"
            />
            -

            <input
              class="national-placeholder input1"
              placeholder="Ends"
              type="text"
            />
          </div>
        </form>

        <form>
          <label class="national-color">Institution Country</label>
          <input
            class="national-placeholder"
            placeholder="Enter Institution Country"
            type="text"
          />
        </form>
      </div>

      <div class="national-send cert-column">
        <h2>Files</h2>
        <div class="cert-row">
          <nationalPDF v-if="showPDF" />
          <p class="message" v-if="!showPDF">
            <i class="ri-error-warning-line"></i>
            <span>Add Certificatire Image. max size is 16MB</span>
          </p>
          <div class="up-but">
            <button
              class="sub"
              @click="toggleCertification"
              v-if="!isSmAndDown"
            >
              Submit Certificate
            </button>
            <div class="icon" @click="togglePDF">
              <i class="ri-upload-cloud-fill"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        class="up-but"
        :class="{ mobSubmit: isSmAndDown }"
        v-if="isSmAndDown"
      >
        <button class="sub" @click="toggleCertification">
          Submit Certificate
        </button>
      </div>
    </div>

    <div class="next-back addCss">
      <div class="buttons" :class="{ mobNext: isSmAndDown }">
        <button class="back" @click="handleBack" v-if="!isSmAndDown">
          Back
        </button>
        <router-link :to="{ name: 'successReg' }">
          <button
            class="next"
            :class="{ nextBlue: showCertification, mobNext: isSmAndDown }"
            style="background: rgba(16, 104, 255, 0.1)"
          >
            Next
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import Certification from "../transition/CertificationVue.vue";

import { ref, onMounted, onUnmounted, computed, defineEmits } from "vue";

const showCertification = ref(false);

const toggleCertification = () => {
  showCertification.value = !showCertification.value;
};

const emits = defineEmits(["back"]);

const handleBack = () => {
  // Emit a custom event to notify the parent component that the "Next" button was clicked
  emits("back");
};

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
.all-certification {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.certification {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border: 1px;
  background: rgba(255, 255, 255, 1);
}

.cert {
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  opacity: 0px;
}

.cert .input1 {
  width: 100%;
  height: 48px;
  padding: 8px 12px 8px 12px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  border-radius: 8px;
  border: 1px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(234, 234, 234, 1);
}

.cert-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 12px;
  height: 100%;
  gap: 8px;
}

.cert-row {
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
}

.national-send h2 {
  width: 100%;
  height: 18px;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.64px;
  text-align: left;
  color: rgba(42, 42, 42, 1);
}

.up-but {
  height: 48px;
  display: flex;
  gap: 8px;
}

.mobSubmit {
  margin-top: 32px;
}

.mobSubmit .sub {
  width: 100% !important;
  border-radius: 48px !important;
}

.up-but .sub {
  width: 187px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 8px;
  border: 1px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(16, 104, 255, 1);
  color: rgba(16, 104, 255, 1);
}

.nextBlue {
  background: rgba(16, 104, 255, 1) !important;
}

.addCss {
  align-items: end;
  padding: 0;
}

.mopCert {
  flex-direction: column;
}

.mobNext {
  width: 100% !important;
  border-radius: 48px !important ;
  justify-content: center;
  margin-bottom: 33px;
}

.mobNext a {
  width: 100%;
}
</style>
