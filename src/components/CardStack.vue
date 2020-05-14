<template>
  <div class="cardStack">
    <Card v-bind:position="card1" />
    <Card v-bind:position="card2" />
    <Card v-bind:position="card3" />
  </div>
</template>
<script>
import Card from "./Card";
export default {
  components: {
    Card
  },
  data() {
    return {
      card1: { position: "absolute", top: "0px" },
      card2: { position: "absolute", top: "50px" },
      card3: { position: "absolute", top: "100px", margin: "auto" },
      items: 5
    };
  },
  created() {
    //   let size = 200;
  },
  props: {
    stackHeight: Number
  }
};
</script>
<style lang="scss" scoped>
.cardStack {
  position: relative;
}
</style>
