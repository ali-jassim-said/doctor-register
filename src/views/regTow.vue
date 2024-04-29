<template>
  <v-row class="register2">
    <v-col cols="4" class="register-pic2">
      <v-img class="img2" src="../assets/register-pic.png"></v-img>
    </v-col>
    <v-col cols="8" class="register-form2">
      <div class="form2">
        <div class="form-header2">
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
import { ref } from "vue";

const activeSection = ref(1);

const setActiveSection = (sectionNumber) => {
  activeSection.value = sectionNumber;
};
</script>

<style>
@import url("../assets/css/personal-data.css");
</style>
