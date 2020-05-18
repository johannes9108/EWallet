<template>
  <div class="card" v-bind:style="position" v-bind:class="[cardInfo.vendor]" @click="setActive()">
    <div class="icons">
      <img v-bind:src="getChip()" alt />
      <img :src="getVendor()" alt />
    </div>
    <div class="info">
      <div class="numberComponent">
        <span class="title">CARDNUMBER</span>
        <!-- <span class="cardNumber"> -->
        <!-- <span>6666</span>
          <span>6666</span>
          <span>6666</span>
        <span>6666</span>-->
        <StringFormatter :regex="format" :input="cardInfo.number" />
      </div>
      <div class="smallInfo">
        <div class="nameComponent">
          <span class="title">CARDHOLDER NAME</span>
          <span>{{cardInfo.name}}</span>
        </div>
        <div class="dateComponent">
          <span class="title">VALID THRU</span>
          <span>{{formatDate(cardInfo.validDate)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ChipDark from "../assets/chip-dark.svg";
// import ChipLight from '../assets/chip-light.svg';
// import BitCoin from '../assets/vendor-bitcoin.svg';
// import BlockChain from '../assets/vendor-blockchain.svg';
// import Evil from '../assets/vendor-evil.svg';
// import Ninja from '../assets/vendor-ninja.svg';
// import Vue from "vue";
import StringFormatter from "./StringFormatter";

export default {
  data() {
    return {
      format: /(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/
    };
  },
  components: {
    StringFormatter
    // ChipDark
    //   ChipLight,
    //   BitCoin,
    //   BlockChain,
    //   Evil,
    //   Ninja
  },
  methods: {
    getChip() {
      return require("../assets/chip-light.svg");
    },
    getVendor() {
      return require("../assets/vendor-" + this.cardInfo.vendor + ".svg");
    },
    setActive() {
      console.log("1");
      this.$root.setActive(this.cardInfo.id);
    },
    formatDate(valid) {
      return valid.substring(0, 2) + "/" + valid.substring(2, 4);
    },
    formatNumber(valid) {
      if (valid.length >= 5 && valid.length < 9) {
        return valid.substring(0, 4) + "-" + valid.substring(4, valid.length);
      }
      if (valid.length >= 9 && valid.length < 13) {
        return (
          valid.substring(0, 4) +
          "-" +
          valid.substring(4, 8) +
          "-" +
          valid.substring(8, valid.length)
        );
      }
      if (valid.length >= 13) {
        return (
          valid.substring(0, 4) +
          "-" +
          valid.substring(4, 8) +
          "-" +
          valid.substring(8, 12) +
          "-" +
          valid.substring(12, valid.length)
        );
      }
      return valid;
    }
    // checkNumber(valid) {
    //   if (valid.length > 16) return "Ileagal";
    //   return valid;
    // }
  },
  computed: {},
  beforeMount() {},
  props: {
    cardInfo: Object,
    position: Object,
    positionData: Object
  }
};
</script>
<style lang="scss">
.bitcoin {
  background: rgb(248, 162, 34);
}
.blockchain {
  background: rgb(117, 51, 162);
  color: white;
}
.evil {
  background: rgb(209, 24, 24);
  color: white;
}
.ninja {
  background: rgb(0, 0, 0);
  color: white;
}
.card {
  /* background-color: yellow; */
  word-break: break-all;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 10px;
  max-height: 250px;
  width: 350px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}
.icons {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* background-color: red; */
}
.info {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden;
  // flex-direction: column;
  // justify-content: space-around;
  /* background-color: grey; */
}

.smallInfo {
  font-size: 1rem;
  display: grid;
  grid-template-columns: 4fr 1fr;
  overflow: hidden;
  // justify-content: space-between;
  /* background-color: magenta; */
}
.numberComponent {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* background-color: wheat; */
}
.nameComponent {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* background-color: wheat; */
}
.dateComponent {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  /* background-color: lightcoral; */
}
.title {
  font-size: 0.6rem;
  /* background-color: lightseagreen; */
}
.name {
  /* background-color: sienna; */
}
</style>
