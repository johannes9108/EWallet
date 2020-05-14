<template>
  <div class="cardStack">
    <Card
      v-for="(card,index) in this.$root.filteredData(this.$root.activeId)"
      v-bind:style="{position: 'absolute', top: `${index*50}px`}"
      v-bind:key="card.id"
      :cardInfo="card"
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
      height: -1
    };
  },
  methods: {
    // setActiveCard(activeId) {
    //   console.log("2");
    //   this.activeId = activeId;
    // }
  },
  beforeMount() {},
  mounted() {
    // let height = this.$el.clientHeight;
    // console.log("Height: " + height);
    // let distance = height / this.items;
    // console.log("Distance: " + distance);
    // this.card1.top = `${distance * 0}px`;
    // this.card2.top = `${distance * 1}px`;
    // this.card3.top = `${distance * 2}px`;
    // this.card4.top = `${distance * 3}px`;
    // this.card5.top = `${distance * 4}px`;
    // this.card5.top = `${distance * 5}px`;
  },

  props: {
    // stackHeight: Number
  }
};
</script>
<style lang="scss" scoped>
.cardStack {
  overflow: auto;
  position: relative;
}
</style>
