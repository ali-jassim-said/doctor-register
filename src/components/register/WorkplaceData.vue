<template>
 
    <div class="form-name">
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
 
  <v-row style="height: 295px; display: flex; align-items: end; margin-top: 50px;">
    <div class="next-back">
      <div class="buttons">
        <button class="back">Back</button>
        <button class="next">Next</button>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {};
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
</style>
