<template>
  <v-row class="register2">
    <v-col
      lg="4"
      md="4"
      sm="12"
      xs="12"
      class="register-pic2"
      :class="{ mopPicTow: isMdAndDown }"
      v-if="!isSmAndDown"
    >
      <v-img class="img2" src="../assets/register-pic.png"></v-img>
    </v-col>
    <v-col lg="8" md="8" sm="12" xs="12" class="register-form2">
      <div class="form2">
        <div v-if="isSmAndDown" class="mopHeader">
        <div
          
          :class="{ mopPicTow: isMdAndDown }"
          class="mobTextHead"
        >
          <p v-if="activeSection === 1">Personal Data</p>
          <p v-if="activeSection === 2">Workplace Data</p>
          <p v-if="activeSection === 3">Document</p>
          <p v-if="activeSection === 4">Certification</p>
        </div>

        <div class="form-header2 mobGap">
          <div class="head animat-head" :class="{ active: activeSection === 1 }"></div>
          <div class="head animat-head" :class="{ active: activeSection === 2 }"></div>
          <div class="head animat-head" :class="{ active: activeSection === 3 }"></div>
          <div class="head animat-head" :class="{ active: activeSection === 4 }"></div>
          <span></span>
        </div>
        </div>
        <div
          class="form-header2"
          
          v-if="!isSmAndDown"
        >
          <div class="head " :class="{ active: activeSection === 1 }">
            <div>1</div>
            <p>Personal Data</p>
          </div>
          <div class="head " :class="{ active: activeSection === 2 }">
            <div>2</div>
            <p>Workplace Data</p>
          </div>
          <div class="head " :class="{ active: activeSection === 3 }">
            <div>3</div>
            <p>Document</p>
          </div>
          <div class="head" :class="{ active: activeSection === 4 }">
            <div>4</div>
            <p>Certification</p>
          </div>
          <span></span>
        </div>

        <div class="info2">
          <div class="info2-all">
            <div class="form1">
              <PersonalData v-if="activeSection === 1" @next="handleNext" />
              <workplace-data
                v-if="activeSection === 2"
                @next="handleNext"
                @back="handleBack"
              />
              <document-reg
                v-if="activeSection === 3"
                @next="handleNext"
                @back="handleBack"
              />
              <certification-reg
                v-if="activeSection === 4"
                @next="handleNext"
                @back="handleBack"
              />
            </div>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import PersonalData from "@/components/register/PersonalData.vue";
import WorkplaceData from "@/components/register/WorkplaceData.vue";
import DocumentReg from "@/components/register/DocumentReg.vue";
import certificationReg from "@/components/register/CertificationReg.vue";
import { ref, onMounted, onUnmounted, computed } from "vue";

const activeSection = ref(1);
// eslint-disable-next-line no-unused-vars
const setActiveSection = (sectionNumber) => {
  activeSection.value = sectionNumber;
};

const handleNext = () => {
  // Update the active section number
  activeSection.value += 1; // Increment by 1 or change to whatever logic you need
};

const handleBack = () => {
  // Update the active section number
  activeSection.value -= 1; // Increment by 1 or change to whatever logic you need
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
const isMdAndDown = computed(() => {
  return windowWidth.value <= 960; // Adjust the value as needed
});
</script>

<style>
@import url("../assets/css/personal-data.css");

.mopPicTow {
  position: relative !important;
}

.mobGap {
  gap: 25px;
  padding: 0 !important;
}

.mobTextHead{
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 16px;
}

.mopHeader{
  width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #fff;
    padding: 24px 16px 0px 16px;

}

.mobGap .head{
  padding: 0 !important;
  height: 0!important;
}


.form-header2 .head.animat-head~span{
  position: absolute ;
  bottom: 0;
  left: 0;
  width: 23% !important;
  height: 4px;
  border-radius: 50px !important;
  background-color: rgba(16, 104, 255, 1);
  transition: all .2s ease;
}



.form-header2 .head.animat-head:nth-child(1).active~span {
  left: 0px;
}

.form-header2 .head.animat-head:nth-child(2).active~span {
  left: 25%;
}


.form-header2 .head.animat-head:nth-child(3).active~span {
  left: 51%;
}

.form-header2 .head.animat-head:nth-child(4).active~span {
  left: 77%;
}
</style>
