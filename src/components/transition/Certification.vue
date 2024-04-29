<template>
 
  <div class="sent-cert">
    <div class="sent-head">
      <h2>Certified Patient Care Technician (CPCT)</h2>
      <i class="ri-more-2-fill"></i>
    </div>
    <div class="sent-content">
      <div class="cont">
        <i class="ri-graduation-cap-fill"></i>
        <h1>University of Basrah</h1>
      </div>
      <div class="cont">
        <i class="ri-map-pin-fill"></i>
        <h2>Iraq, Baghdad</h2>
      </div>
      <div class="cont">
        <i class="ri-time-fill"></i>
        <h2>2020 - 2023</h2>
      </div>
    </div>
    <div class="sentPDF">
      <div class="national-pdf cert-pdf">
        <div class="content">
          <div class="icon-pdf"><i class="ri-file-pdf-2-fill"></i></div>
          <div class="text">
            <div class="text1">Certificate 1.pdf</div>
            <div class="text2">3 mb</div>
          </div>
        </div>
      </div>
      <div class="national-pdf cert-pdf">
        <div class="content">
          <div class="icon-pdf"><i class="ri-file-pdf-2-fill aqua"></i></div>
          <div class="text">
            <div class="text1">Certificate 1.img</div>
            <div class="text2">3 mb</div>
          </div>
        </div>
      </div>
    </div>
    <div class="pos-icon">
      <img src="../../assets/img/dash.svg" alt="" />
    </div>
  </div>
  <div class="hr" v-if="showAddCert1"></div>
  <div v-if="!showAddCert1" class="up-but" style="width: 100%; height: 67px; margin-top: 12px">
    <button style="width: 100%" class="sub" @click="showAddCert">
      Add New Certificate
    </button>
  </div>
  <add-cert v-if="showAddCert1"/>
  <div v-if="!showAddCert1" style="height: 230px;"></div>
</template>

<script>
import AddCert from './AddCert.vue';
export default {
  components: { AddCert },
  name: "CertificationVue",
  data() {
    return {
      showAddCert1: false 
    };
  },
  methods: {
    showAddCert() {
      this.showAddCert1 = !this.showAddCert1;
      this.$emit('nextHeight');
    },
  }
};
</script>

<style>
.sent-cert {
  width: 100%;
  height: 188px;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 40px 0px rgba(18, 18, 18, 0.08);
  overflow: hidden;
}

.sent-cert .pos-icon {
  width: 159px;
  height: 159px;
  position: absolute;
  top: 60px;
  right: 10px;
}

.sent-cert .pos-icon img {
  width: 100%;
  height: 100%;
}

.sent-cert .sent-head {
  width: 100%;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.sent-cert .sent-head h2 {
  width: 100%;
  height: 22px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
  color: rgba(17, 17, 17, 1);
}

.sent-cert .sent-head i {
  color: rgba(17, 17, 17, 1);
}

.sent-cert .sent-content {
  width: 323px;
  height: 66px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}

.sent-cert .sent-content .cont {
  width: 323px;
  height: 18px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;
}

.sent-cert .sent-content .cont h2 {
  width: 305px;
  height: 18px;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.64px;
  text-align: left;
  color: rgba(106, 106, 106, 1);
}

.sent-cert .sent-content .cont i {
  color: rgba(45, 45, 45, 1);
}

.sent-cert .sentPDF {
  width: 283px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.sentPDF .cert-pdf {
  width: 138px;
  height: 48px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  border: 1px;
  background: rgba(248, 248, 248, 1);
  border: 1px solid rgba(243, 243, 243, 1);
}

.sentPDF .cert-pdf .aqua {
  color: rgba(0, 224, 255, 1);
}

.hr{
  width: 100%;
  height: 2px;
  margin: 5px 0;
  border-bottom: 2px solid rgba(227, 227, 227, 1);
}
</style>
