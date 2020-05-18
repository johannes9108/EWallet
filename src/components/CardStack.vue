<template>
  <div class="cardStack" :style="{gridAutoRows: gap}">
    <Card
      :style="{zIndex: index}"
      :cardInStack="true"
      v-for="(card,index) in this.$root.data"
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
      items: this.$root.data.length,
      gap: `${4 - 0.2 * this.$root.data.length}rem`
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
  display: grid;
  overflow: auto;
  -webkit-scrollbar: none;
  position: relative;
}
.cardStack::-webkit-scrollbar {
  display: none;
}
.cardStack::after {
}
</style>
