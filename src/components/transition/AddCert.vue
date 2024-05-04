<template>
  <div class="addCert">
    <div class="close-cert">
      <i class="ri-close-circle-fill"></i>
    </div>
    <div class="certification">
      <div class="form-name" :class="{mopAddCert: isSmAndDown}">
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

      <div class="form-name" :class="{mopAddCert: isSmAndDown}">
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
            <button class="sub" @click="toggleCertification">
              Submit Certificate
            </button>
            <div class="icon" @click="togglePDF">
              <i class="ri-upload-cloud-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref ,onMounted , onUnmounted, computed } from "vue";


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
.addCert {
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  border: 1px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid var(--Secondary-10, rgba(234, 234, 234, 1));
  margin-bottom: 60px;
}

.close-cert {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}

.close-cert i {
  color: rgba(191, 191, 191, 1);
}

.mopAddCert{
  flex-direction: column;
}
</style>
