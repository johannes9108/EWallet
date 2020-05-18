<template>
  <div class="cardStack">
    <!-- :positionData="{index, height}" -->
    <Card
      v-for="(card,index) in this.$root.filteredData(this.$root.activeId)"
      v-bind:key="card.id"
      :cardInfo="card"
      v-bind:style="{position: 'absolute', top: `${index*30}px`}"
    />
    <!-- :position="cardsPos[cardsPosIndex++]" -->
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
      items: this.$root.data.length,
      clientHeight: 0
    };
  },
  methods: {},
  created() {
    //  let height = this.$el.clientHeight;
    //   console.log("Height: " + height);
    //   let distance = height / this.items;
    //   console.log("Distance: " + distance);
    // this.height = getStackSize
  },

  computed: {},

  props: {
    // stackHeight: Number
  }
};
</script>
<style lang="scss" scoped>
.cardStack {
  border-radius: 0;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  display: grid;
  grid-template-rows: auto;
  // margin: 0 auto;
  // background-color: red;
  overflow: auto;
  position: relative;
}
.cardStack::after {
  // content: "";
  // display: block;
  // padding-bottom: 100%;
}
</style>
