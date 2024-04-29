<template>
  <div class="national-id">
    <div class="national-head">
      <h2>National ID</h2>
    </div>
    <div class="form-name">
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
    <div class="date-country" style="gap: 16px">
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
        <nationalPDF v-if="showPDF"/>
        <p class="message" v-if="!showPDF">
          <i class="ri-error-warning-line"></i>
          <span>Add  Certificatire Image. max size is 16MB</span>
        </p>
        <div class="icon" @click="togglePDF">
            <i class="ri-upload-cloud-fill"></i>
        </div>
    </div>
  </div>
  <div class="national-id" style="height: 198px;">
    <div class="national-head">
      <h2>Residential ID</h2>
    </div>
    <div class="form-name">
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
        <nationalPDF v-if="showPDF"/>
        <p class="message" v-if="!showPDF">
          <i class="ri-error-warning-line"></i>
          <span>Add  Certificatire Image. max size is 16MB</span>
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
    <div class="form-name">
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
      <div class="country" style="width: 334px;">
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
        <nationalPDF v-if="showPDF"/>
        <p class="message" v-if="!showPDF">
          <i class="ri-error-warning-line"></i>
          <span>Add  Certificatire Image. max size is 16MB</span>
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
    <div class="form-name">
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
      <div class="country" style="width: 334px;">
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
        <nationalPDF v-if="showPDF"/>
        <p class="message" v-if="!showPDF">
          <i class="ri-error-warning-line"></i>
          <span>Add  Certificatire Image. max size is 16MB</span>
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
    <div class="form-name">
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
      <div class="country" style="width: 334px;">
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
        <nationalPDF v-if="showPDF"/>
        <p class="message" v-if="!showPDF">
          <i class="ri-error-warning-line"></i>
          <span>Add  Certificatire Image. max size is 16MB</span>
        </p>
        <div class="icon" @click="togglePDF">
            <i class="ri-upload-cloud-fill"></i>
        </div>
    </div>
  </div>



  <div class="next-back">
    <div class="buttons">
      <button class="back">Back</button>
      <button class="next">Next</button>
    </div>
  </div>
</template>

<script>
import nationalPDF from '../transition/nationalPDF.vue';
export default {
  components: { nationalPDF },
  data() {
    return {
      showPDF: false,
    };
  },
  methods: {
    togglePDF() {
      this.showPDF = !this.showPDF;
    }
  }
}
</script>

<style>
.national-id {
  width: 100%;
  height: 288px;
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

.national-send{
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

.national-send .icon i{
color: rgba(255, 255, 255, 1);
font-size: 20px;
}

.national-send .message{
    display: flex;
    align-items: center;
    gap: 8px;
}

.national-send .message span{
font-size: 12px;
font-weight: 500;
line-height: 15.12px;
text-align: left;

}

.national-send .message i{
font-size: 12px;
}



</style>
