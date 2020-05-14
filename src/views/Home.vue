<template>
  <div class="home">
    <Top title="E wallet" />
    <Card :cardInfo="getActiveCard" v-bind:style="{'box-shadow': '0px 0px 10px gray'}" />
    <CardStack />
    <router-link :to="{name: 'AddCard'}">
      <button>Add a new card</button>
    </router-link>
  </div>
</template>
<script>
import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from "../components/CardStack";

export default {
  data() {
    return {};
  },
  components: {
    Top,
    Card,
    CardStack
  },
  computed: {
    getActiveCard() {
      return this.$root.data.find(val => val.id == this.$root.activeId);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding: 0.5rem;
  gap: 1rem;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 3fr 3fr 1fr;
}

.cardStack {
}
a {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: black 1px solid;
  border-radius: 15px;

  button {
    background-color: transparent;
    border: none;
  }
}
</style>