<template>
  <div class="cardForm">
    <div class="inputComponent">
      <span class="title">CARD NUMBER</span>
      <input
        id="cardNumber"
        type="number"
        v-model="formValues.number"
        placeholder="XXXX XXXX XXXX XXXX"
        :style="{errorStyle: incorrectNumber}"
      />
    </div>
    <div class="inputComponent">
      <span class="title">CARHOLDER NAME</span>
      <input
        id="name"
        type="text"
        v-model="formValues.name"
        placeholder="FIRSTNAME LASTNAME"
        :style="{errorStyle: incorrectName}"
      />
    </div>
    <div class="doubleInputRow">
      <div class="inputComponent">
        <span class="title">VALID THRU</span>
        <input
          id="validDate"
          type="number"
          placeholder="MM/YY"
          v-model="formValues.validDate"
          :style="{errorStyle: incorrectDate}"
        />
      </div>
      <div class="inputComponent">
        <span class="title">CCV</span>
        <input
          id="ccv"
          type="number"
          v-model="formValues.ccv"
          placeholder="XXX"
          :style="{errorStyle: incorrectCCV}"
        />
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      incorrectNumber: false,
      incorrectDate: false,
      incorrectName: false,
      incorrectCCV: false,
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
        this.incorrectNumber = true;
        incorrectValues = true;
      }
      if (this.formValues.validDate.length != 4) {
        this.incorrectDate = true;
        incorrectValues = true;
      }
      if (this.formValues.ccv.length != 3) {
        this.incorrectCCV = true;
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
.errorStyle {
  color: red;
}
</style>