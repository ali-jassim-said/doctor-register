<template>
  <div class="national-id">
    <div class="national-head">
      <h2>National ID</h2>
    </div>
    <div class="form-name" :class="{mopDocument: isSmAndDown}">
      <form>
        <label class="national-color">ID No.</label>
        <input
          class="national-placeholder"
          placeholder="199456248547"
          type="text"
        />
      </form>
      <form>
        <label class="national-color">Issuing Entity</label>
        <input
          class="national-placeholder"
          placeholder="Enter your issuing entity"
          type="text"
        />
      </form>
    </div>
    <div class="date-country"  :class="{mopDocument: isSmAndDown}" style="gap: 16px">
      <div class="country">
        <label class="national-color">Issuing Date</label>
        <v-select
          placeholder="Enter yIssuing Date"
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
        <label class="national-color">Expire Date</label>
        <v-select
          placeholder="Enter your ex"
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
    <div class="national-send">
      <nationalPDF v-if="showPDF" />
      <p class="message" v-if="!showPDF">
        <i class="ri-error-warning-line"></i>
        <span>Add Certificatire Image. max size is 16MB</span>
      </p>
      <div class="icon" @click="togglePDF">
        <i class="ri-upload-cloud-fill"></i>
      </div>
    </div>
  </div>
  <div class="national-id">
    <div class="national-head">
      <h2>Residential ID</h2>
    </div>
    <div class="form-name" :class="{mopDocument: isSmAndDown}">
      <form>
        <label class="national-color">Information Office</label>
        <input
          class="national-placeholder"
          placeholder="Enter your information office"
          type="text"
        />
      </form>
      <form>
        <label class="national-color">Household Name</label>
        <input
          class="national-placeholder"
          placeholder="Enter your household name"
          type="text"
        />
      </form>
    </div>
    <div class="national-send">
      <nationalPDF v-if="showPDF" />
      <p class="message" v-if="!showPDF">
        <i class="ri-error-warning-line"></i>
        <span>Add Certificatire Image. max size is 16MB</span>
      </p>
      <div class="icon" @click="togglePDF">
        <i class="ri-upload-cloud-fill"></i>
      </div>
    </div>
  </div>

  <div class="national-id">
    <div class="national-head">
      <h2>Doctor’s Syndicate</h2>
    </div>
    <div class="form-name" :class="{mopDocument: isSmAndDown}">
      <form>
        <label class="national-color">ID No.</label>
        <input
          class="national-placeholder"
          placeholder="Enter yIssuing Date"
          type="text"
        />
      </form>
      <div class="date-country" style="gap: 16px">
        <div class="country">
          <label class="national-color">Issuing Date</label>
          <v-select
            placeholder="Enter your ex"
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
    </div>
    <div class="date-country" style="gap: 16px">
      <div class="country" style="width: 334px" :class="{mopDocHeight: isSmAndDown}">
        <label class="national-color">Expire Date</label>
        <v-select
          placeholder="Enter your ex"
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
    <div class="national-send">
      <nationalPDF v-if="showPDF" />
      <p class="message" v-if="!showPDF">
        <i class="ri-error-warning-line"></i>
        <span>Add Certificatire Image. max size is 16MB</span>
      </p>
      <div class="icon" @click="togglePDF">
        <i class="ri-upload-cloud-fill"></i>
      </div>
    </div>
  </div>

  <div class="national-id">
    <div class="national-head">
      <h2>Proffesion Practice Letter</h2>
    </div>
    <div class="form-name" :class="{mopDocument: isSmAndDown}">
      <form>
        <label class="national-color">ID No.</label>
        <input
          class="national-placeholder"
          placeholder="Enter yIssuing Date"
          type="text"
        />
      </form>
      <div class="date-country" style="gap: 16px">
        <div class="country">
          <label class="national-color">Issuing Date</label>
          <v-select
            placeholder="Enter your ex"
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
    </div>
    <div class="date-country" style="gap: 16px">
      <div class="country" style="width: 334px" :class="{mopDocHeight: isSmAndDown}">
        <label class="national-color">Expire Date</label>
        <v-select
          placeholder="Enter your ex"
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
    <div class="national-send">
      <nationalPDF v-if="showPDF" />
      <p class="message" v-if="!showPDF">
        <i class="ri-error-warning-line"></i>
        <span>Add Certificatire Image. max size is 16MB</span>
      </p>
      <div class="icon" @click="togglePDF">
        <i class="ri-upload-cloud-fill"></i>
      </div>
    </div>
  </div>

  <div class="national-id">
    <div class="national-head">
      <h2>Clinic Certificate (optional)</h2>
    </div>
    <div class="form-name" :class="{mopDocument: isSmAndDown}">
      <form>
        <label class="national-color">ID No.</label>
        <input
          class="national-placeholder"
          placeholder="Enter yIssuing Date"
          type="text"
        />
      </form>
      <div class="date-country" style="gap: 16px">
        <div class="country" >
          <label class="national-color">Issuing Date</label>
          <v-select
            placeholder="Enter your ex"
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
    </div>
    <div class="date-country" style="gap: 16px">
      <div class="country" style="width: 334px" :class="{mopDocHeight: isSmAndDown}">
        <label class="national-color">Expire Date</label>
        <v-select
          placeholder="Enter your ex"
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
    <div class="national-send">
      <nationalPDF v-if="showPDF" />
      <p class="message" v-if="!showPDF">
        <i class="ri-error-warning-line"></i>
        <span>Add Certificatire Image. max size is 16MB</span>
      </p>
      <div class="icon" @click="togglePDF">
        <i class="ri-upload-cloud-fill"></i>
      </div>
    </div>
  </div>

  <div class="next-back">
    <div class="buttons">
      <button class="back" @click="handleBack">Back</button>
      <button class="next" @click="handleNext">Next</button>
    </div>
  </div>
</template>

<script setup>
import nationalPDF from "../transition/nationalPDF.vue";
import { ref ,onMounted , onUnmounted, computed, defineEmits } from "vue";

const showPDF = ref(false);

const togglePDF = () => {
  showPDF.value = !showPDF.value;
};

const emits = defineEmits(["next", "back"]);

const handleNext = () => {
  // Emit a custom event to notify the parent component that the "Next" button was clicked
  emits("next");
};

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
.national-id {
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  border: 1px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(227, 227, 227, 1);
}

.national-head {
  width: 100%;
  height: 20px;
}

.national-head h2 {
  width: 100%;
  height: 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20.16px;
  text-align: left;
  color: rgba(17, 17, 17, 1);
}

.national-color {
  color: rgba(109, 109, 109, 1) !important;
  width: 200px !important;
}

.national-placeholder::placeholder {
  color: rgba(191, 191, 191, 1);
}

.national-send {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.national-send .icon {
  width: 48px;
  height: 48px;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 8px;
  background: rgba(16, 104, 255, 1);
  cursor: pointer;
}

.national-send .icon i {
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
}

.national-send .message {
  display: flex;
  align-items: center;
  gap: 8px;
}

.national-send .message span {
  font-size: 12px;
  font-weight: 500;
  line-height: 15.12px;
  text-align: left;
}

.national-send .message i {
  font-size: 12px;
}





.mopDocument{
  flex-direction: column;
}


.mopDocHeight{
  width: 100% !important;
}

</style>
