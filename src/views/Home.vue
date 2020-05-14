<template>
  <div class="home">
    <Top title="E wallet" />
    <Card />
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
  components: {
    Top,
    Card,
    CardStack
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding: 0.5rem;
  gap: 1rem;
  background-color: white;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 3fr min(3fr, 4fr) 1fr;
}

.cardStack {
  background-color: blue;
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