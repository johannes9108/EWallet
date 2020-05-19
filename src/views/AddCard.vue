<template>
  <div class="addCard">
    <div class="buttonHolder">
      <router-link :to="{name: 'Home'}">Back</router-link>
    </div>
    <Top title="ADD A NEW BANK CARD" />
    <Card title="New Card" :cardInfo="placeHolder" />
    <CardForm :cardValues="placeHolder" />
  </div>
</template>
<script>
import Top from "../components/Top";
import Card from "../components/Card";
import CardForm from "../components/CardForm";
export default {
  data() {
    return {
      placeHolder: {
        id: -1,
        number: "",
        name: "",
        validDate: "",
        ccv: "",
        vendor: 0
      }
    };
  },
  components: {
    Card,
    Top,
    CardForm
  }
};
</script>
<style lang="scss" scoped>
.addCard {
  // border: 1px solid black;
  margin: auto;
  padding: 0.5rem;
  gap: 1rem;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr 3fr 3fr;

  .buttonHolder {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  a {
    text-decoration: none;
    text-align: center;
    // display: block;
    color: white;
    background: blacK;
    border-radius: 10px;
    // height: 100%;
    min-width: 20%;
  }
}
</style>