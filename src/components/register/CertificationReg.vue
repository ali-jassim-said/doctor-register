<template>
  <certification v-if="showCertification" />
  
  <div class="certification" v-if="!showCertification">
    <div class="form-name">
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

    <div class="form-name">
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
  
  <div
    class="next-back addCss"
    :style="{ height: showCertification ? '50px' : '300px' }"
  >
    <div class="buttons">
      <button class="back">Back</button>
      <router-link :to="{name: 'successReg'}">
      <button
        class="next"
        :class="{ nextBlue: showCertification }"
        style="background: rgba(16, 104, 255, 0.1)"
      >
        Next
      </button>
    </router-link>
    </div>
  </div>
</template>

<script>
import Certification from "../transition/Certification.vue";
export default {
  components: {
    Certification,
  },
  data() {
    return {
      showCertification: false,
    };
  },
  methods: {
    toggleCertification() {
      this.showCertification = !this.showCertification;
    },
  },
};
</script>

<style>
.certification {
  width: 100%;
  height: 288px;
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
  width: 243px;
  height: 48px;
  display: flex;
  gap: 8px;
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


</style>
