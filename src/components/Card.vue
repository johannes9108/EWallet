<template>
  <div v-bind:class="{cardHolder: title}">
    <p class="cardDescritpion" v-if="title">{{title}}</p>
    <div
      v-bind:class="[isHovered && cardInStack ? 'highlighted':'']"
      :style="[getVendorData] "
      class="card"
      @click="setActive()"
      @mouseover.capture.stop="enter()"
      @mouseleave.capture.stop="exit()"
    >
      <div class="icons">
        <img
          :src="require('@/assets/chip-'+this.$root.vendors[this.cardInfo.vendor].chipType+'.svg')"
          alt
        />
        <img
          v-bind:src="require('@/assets/vendor-'+this.$root.vendors[this.cardInfo.vendor].name+'.svg')"
          alt
        />
      </div>
      <div class="info">
        <div class="numberComponent">
          <StringFormatter :regex="format" :input="cardInfo.number" />
        </div>
        <div class="smallInfo">
          <div class="nameComponent">
            <span class="title">CARDHOLDER NAME</span>
            <span>{{cardInfo.name.toUpperCase()}}</span>
          </div>
          <div class="dateComponent">
            <span class="title">VALID THRU</span>
            <span>{{formatDate(cardInfo.validDate)}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StringFormatter from "./StringFormatter";

export default {
  data() {
    return {
      isHovered: false,
      format: /(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/
    };
  },
  components: {
    StringFormatter
  },
  computed: {
    getVendorData() {
      // console.log(this.$root.vendors[this.cardInfo.vendor].chipUrl);
      let data = this.$root.vendors[this.cardInfo.vendor];
      return {
        backgroundImage: `linear-gradient(to right,rgb(${
          data.backgroundColor.red
        },${data.backgroundColor.green},${data.backgroundColor.blue}),rgb(${data
          .backgroundColor.red + 40},${data.backgroundColor.green + 40},${data
          .backgroundColor.blue + 40})`,
        color: `rgb(${data.textColor.red},${data.textColor.green},${data.textColor.blue})`
      };
    }
  },
  methods: {
    enter() {
      this.isHovered = true;
      console.log("Enter: " + this.isHovered);
      console.log(this);
    },
    exit() {
      this.isHovered = false;
      console.log("Exit: " + this.isHovered);
    },
    setActive() {
      if (this.cardInStack) this.$root.setActive(this.cardInfo.id);
    },
    formatDate(valid) {
      return valid.substring(0, 2) + "/" + valid.substring(2, 4);
    },
    formatNumber(valid) {
      if (valid.length >= 5 && valid.length < 9) {
        return valid.substring(0, 4) + "-" + valid.substring(4, valid.length);
      }
      if (valid.length >= 9 && valid.length < 13) {
        return (
          valid.substring(0, 4) +
          "-" +
          valid.substring(4, 8) +
          "-" +
          valid.substring(8, valid.length)
        );
      }
      if (valid.length >= 13) {
        return (
          valid.substring(0, 4) +
          "-" +
          valid.substring(4, 8) +
          "-" +
          valid.substring(8, 12) +
          "-" +
          valid.substring(12, valid.length)
        );
      }
      return valid;
    }
  },
  beforeMount() {},
  props: {
    cardInfo: Object,
    position: Object,
    positionData: Number,
    title: String,
    cardInStack: Boolean
  }
};
</script>
<style lang="scss">
.cardHolder {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.cardDescritpion {
  text-align: center;
  color: gray;
}

.card {
  /* background-color: yellow; */
  word-break: break-all;
  padding: 1rem;
  margin: auto auto;
  border-radius: 10px;
  height: 250px;
  width: 350px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}
.icons {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* background-color: red; */
}
.info {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden;
  // flex-direction: column;
  // justify-content: space-around;
  /* background-color: grey; */
}

.smallInfo {
  font-size: 1rem;
  display: grid;
  grid-template-columns: 4fr 1fr;
  overflow: hidden;
  // justify-content: space-between;
  /* background-color: magenta; */
}
.numberComponent {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* background-color: wheat; */
}
.nameComponent {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* background-color: wheat; */
}
.dateComponent {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  /* background-color: lightcoral; */
}
.title {
  font-size: 0.6rem;
  /* background-color: lightseagreen; */
}

.highlighted {
  transform: scale(1.05);
  transition: transform 1s;
  // position: absolute;
  // outline: groove black 1px;
  border: 5px solid black;
}
</style>
