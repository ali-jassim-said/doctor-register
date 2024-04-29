<template>
  <div class="profile">
    <div class="head">Profile Image</div>
    <div class="content">
      <div class="pic">
        <div class="icon-profile">
          <i class="ri-user-3-line"></i>
        </div>
      </div>
      <div class="input">
        <div class="file">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="ri-add-line"></i>
              </span>
              <span class="file-label"> Upload a Picture </span>
            </span>
          </label>
        </div>

        <p class="message">
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
  <div class="date-country">
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
  <div class="date-country">
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
  <div class="gender-cash">
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
    <div class="buttons">
      <button class="back">Back</button>
      <button class="next">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css";
@import url("../../assets/css/personal-data.css");
</style>
