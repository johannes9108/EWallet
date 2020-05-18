<template>
  <div class="addCard">
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
  grid-template-rows: 1fr 3fr 3fr;
}
</style>