<template>
  <div class="cardStack" :style="{gridAutoRows: gap}">
    <Card
      :style="{zIndex: index}"
      :cardInStack="true"
      v-for="(card,index) in (this.$store.state.activeCard)?this.$store.getters.filteredData:this.$store.state.data"
      v-bind:key="card.id"
      :cardInfo="card"
    />
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
      items: this.$store.state.data.length,
      gap: `${4 - 0.2 * this.$store.state.data.length}rem`
    };
  },
  methods: {},
  created() {},

  computed: {},

  props: {}
};
</script>
<style lang="scss" scoped>
.cardStack {
  padding-top: 12%;
  display: grid;
  overflow: auto;
  -webkit-scrollbar: none;
  position: relative;
  border-radius: 2%;
  margin: 0 auto;
  width: fit-content;
}
.cardStack::-webkit-scrollbar {
  display: none;
}
</style>
