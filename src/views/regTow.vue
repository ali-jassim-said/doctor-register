<template>
  <v-row class="register2">
    <v-col lg="4" md="4" sm="12" xs="12"  class="register-pic2"  :class="{mopPicTow: isMdAndDown}"   v-if="!isSmAndDown">
      <v-img class="img2" src="../assets/register-pic.png"></v-img>
    </v-col>
    <v-col lg="8" md="8" sm="12" xs="12"  class="register-form2">
      <div class="form2">
        <div class="form-header2" :class="{mopPicTow: isMdAndDown}">
          <div
            class="head"
            :class="{ active: activeSection === 1 }"
            @click="setActiveSection(1)"
          >
            <div>1</div>
            <p>Personal Data</p>
          </div>
          <div
            class="head"
            :class="{ active: activeSection === 2 }"
            @click="setActiveSection(2)"
          >
            <div>2</div>
            <p>Workplace Data</p>
          </div>
          <div
            class="head"
            :class="{ active: activeSection === 3 }"
            @click="setActiveSection(3)"
          >
            <div>3</div>
            <p>Document</p>
          </div>
          <div
            class="head"
            :class="{ active: activeSection === 4 }"
            @click="setActiveSection(4)"
          >
            <div>4</div>
            <p>Certification</p>
          </div>
          <span></span>
        </div>

        <div class="info2">
          <div class="info2-all">
            <div class="form1">
              <PersonalData v-if="activeSection === 1" />
              <workplace-data v-if="activeSection === 2" />
              <document-reg v-if="activeSection === 3" />
              <certification-reg  v-if="activeSection === 4"/>
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
import DocumentReg from "@/components/register/DocumentReg.vue"
import certificationReg from "@/components/register/CertificationReg.vue"
import { ref ,onMounted , onUnmounted, computed } from "vue";

const activeSection = ref(1);

const setActiveSection = (sectionNumber) => {
  activeSection.value = sectionNumber;
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
const isMdAndDown = computed(() => {
  return windowWidth.value <= 960; // Adjust the value as needed
});
</script>

<style>
@import url("../assets/css/personal-data.css");


.mopPicTow{
  position:  relative !important;
}
</style>
