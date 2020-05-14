<template>
  <div class="card" v-bind:style="position" v-bind:class="[cardInfo.vendor]" @click="setActive()">
    <div class="icons">
      <img v-bind:src="getChip()" alt />
      <img :src="getVendor()" alt />
    </div>
    <div class="info">
      <span class="cardNumber">{{cardInfo.cardnumber}}</span>
      <div class="smallInfo">
        <div class="nameComponent">
          <span class="title">CARDHOLDER NAME</span>
          <span class="name">{{cardInfo.name}}</span>
        </div>
        <div class="dateComponent">
          <span class="title">VALID THRU</span>
          <span class="name">{{cardInfo.validDate.month}}/{{cardInfo.validDate.year}}</span>
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
export default {
  data() {
    return {};
  },
  components: {
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
    }
  },

  props: {
    cardInfo: Object,
    position: Object
  }
};
</script>
<style>
.bitcoin {
  background: darkgray;
}
.blockchain {
  background: darkred;
}
.evil {
  background: darkgoldenrod;
}
.ninja {
  background: darkblue;
  color: white;
}
.card {
  /* background-color: yellow; */
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: grey; */
}
.cardNumber {
  font-size: 2rem;

  /* background-color: aquamarine; */
}
.smallInfo {
  display: flex;
  justify-content: space-between;
  /* background-color: magenta; */
}
.nameComponent {
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
  font-size: 0.7rem;
  /* background-color: lightseagreen; */
}
.name {
  /* background-color: sienna; */
}
</style>
