<template>
  <div class="home">
    <Top title="E wallet" />
    <Card title="Active Card" activeCard removable :cardInfo="getActiveCard" />
    <CardStack />
    <router-link :to="{name: 'AddCard'}">
      <button>
        <h2>ADD A NEW CARD</h2>
      </button>
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
      return this.$root.activeCard;
    }
  },
  beforeMount() {}
};
</script>
<style lang="scss" scoped>
.home {
  // margin: auto;
  padding: 0.5rem;
  gap: 1rem;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 3fr 500px 0.8fr;
}

a {
  display: block;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: black 1px solid;
  border-radius: 15px;
}
button {
  background: red;
  margin: 0 auto;
  background-color: transparent;
  border: none;
}
</style>