<template>
  <div class="stringFormatter">
    <span>{{first}}</span>
    <span>{{second}}</span>
    <span>{{third}}</span>
    <span>{{fourth}}</span>
  </div>
</template>
<script>
export default {
  name: "StringFormatter",
  data() {
    return {};
  },
  computed: {
    first() {
      return this.input.split(this.regex)[1];
    },
    second() {
      return this.input.split(this.regex)[2];
    },
    third() {
      return this.input.split(this.regex)[3];
    },
    fourth() {
      return this.input.split(this.regex)[4];
    }
  },
  methods: {
    formatting() {}
  },
  props: {
    regex: RegExp,
    input: String
  },
  beforeMount() {
    this.formatting();
  }
};
</script>
<style lang='scss' scoped>
.stringFormatter {
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
}
</style>