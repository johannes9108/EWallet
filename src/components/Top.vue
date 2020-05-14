<template>
  <div class="topComponent">
    <h1>{{title}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String
  }
};
</script>
<style lang="scss" scoped>
.topComponent {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>