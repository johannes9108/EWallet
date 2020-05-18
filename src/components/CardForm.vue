<template>
  <form class="cardForm">
    <div class="inputComponent">
      <span class="title">CARD NUMBER</span>
      <input type="number" v-model="formValues.number" placeholder="XXXX XXXX XXXX XXXX" />
    </div>
    <div class="inputComponent">
      <span class="title">CARHOLDER NAME</span>
      <input type="text" v-model="formValues.name" placeholder="FIRSTNAME LASTNAME" />
    </div>
    <div class="doubleInputRow">
      <div class="inputComponent">
        <span class="title">VALID THRU</span>
        <input type="number" placeholder="MM/YY" v-model="formValues.validDate" />
      </div>
      <div class="inputComponent">
        <span class="title">CCV</span>
        <input type="text" v-model="formValues.ccv" placeholder="XXX" />
      </div>
    </div>
    <div class="inputComponent">
      <span class="title">VENDOR</span>
      <select id="Vendors" v-model="formValues.vendor">
        <option
          v-for="(item,index) in this.$root.vendors"
          :key="item.name"
          :value="index"
        >{{item.name}}</option>
      </select>
    </div>
    <div class="inputComponent">
      <button @click="checkValues()">Add Card</button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      formValues: this.cardValues
    };
  },
  props: {
    cardValues: Object
  },

  methods: {
    checkValues() {
      let incorrectValues = false;
      if (this.formValues.number.length > 16) {
        this.formValues.number = this.formValues.number.slice(0, 16);
        incorrectValues = true;
      }
      if (this.formValues.validDate.length != 4) {
        this.formValues.validDate = "";
        incorrectValues = true;
      }
      if (this.formValues.ccv.length != 3) {
        this.formValues.ccv = "";
        incorrectValues = true;
      }
      if (incorrectValues) return;

      console.log("CHECK Complete Add card and redirect");
      const newCard = {
        id: this.$root.nextId++,
        number: this.formValues.number,
        name: this.formValues.name,
        validDate: this.formValues.validDate,
        ccv: this.formValues.ccv,
        vendor: this.formValues.vendor
      };
      this.$root.data.push(newCard);
      this.$router.push({ name: "Home" });
    }
    // checkDate(valid) {
    //   if (valid.length == 4) {
    //     return valid.substring(0, 2) + "/" + valid.substring(2, 4);
    //   } else return "Ilegal";
    // },
    // checkNumber(valid) {
    //   if (valid.length > 16) return "Ileagal";
    //   return valid;
    // }
  }
};
</script>
<style lang='scss' scoped>
.cardForm {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;
}
.inputComponent {
  padding: 0 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  input,
  select {
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid black;
    background: transparent;
    height: 100%;
  }
}
.doubleInputRow {
  display: flex;
  justify-content: space-between;
}
button {
  color: white;
  background: blacK;
  border-radius: 10px;
  height: 100%;
}
</style>