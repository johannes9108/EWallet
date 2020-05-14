<template>
  <div class="card" v-bind:style="position">
    <div class="icons">
      <img src="@/assets/chip-dark.svg" alt />
      <img src="@/assets/vendor-bitcoin.svg" alt />
    </div>
    <div class="info">
      <span class="cardNumber">1234 5678 9101 1123</span>
      <div class="smallInfo">
        <div class="nameComponent">
          <span class="title">CARDHOLDER NAME</span>
          <span class="name">CHRISTOPHER WALLENBERG</span>
        </div>
        <div class="dateComponent">
          <span class="title">VALID THRU</span>
          <span class="name">12/22</span>
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

  props: {
    cardInfo: Object,
    position: Object
  }
};
</script>
<style>
.card {
  background-color: yellow;
  padding: 1rem;
  border-radius: 2%;
  box-shadow: 0px 0px 10px gray;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}
.icons {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: red;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: grey;
}
.cardNumber {
  font-size: 2rem;

  background-color: aquamarine;
}
.smallInfo {
  display: flex;
  justify-content: space-between;
  background-color: magenta;
}
.nameComponent {
  display: flex;
  flex-direction: column;
  background-color: wheat;
}
.dateComponent {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  background-color: lightcoral;
}
.title {
  font-size: 0.7rem;
  background-color: lightseagreen;
}
.name {
  background-color: sienna;
}
</style>
