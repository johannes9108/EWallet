<template>
  <div class="cardForm">
    <div class="inputComponent">
      <span class="title">CARD NUMBER</span>
      <input
        @focus="incorrectNumber=false"
        id="cardNumber"
        type="number"
        v-model="formValues.number"
        placeholder="XXXX XXXX XXXX XXXX"
        :class="{errorStyle: incorrectNumber}"
      />
      <p v-if="incorrectNumber">Cardnumber requires exactly 16 digits!</p>
    </div>
    <div class="inputComponent">
      <span class="title">CARHOLDER NAME</span>
      <input
        @focus="incorrectName=false"
        id="name"
        type="text"
        v-model="formValues.name"
        placeholder="FIRSTNAME LASTNAME"
        :class="{errorStyle: incorrectName}"
      />
      <p v-if="incorrectName">Name can only contain characters A-Ö a-ö!</p>
    </div>
    <div class="doubleInputRow">
      <div class="inputComponent">
        <span class="title">VALID THRU</span>
        <input
          @focus="incorrectDate=false"
          id="validDate"
          type="number"
          placeholder="MM/YY"
          v-model="formValues.validDate"
          :class="{errorStyle: incorrectDate}"
        />
        <p v-if="incorrectDate">4 digits!</p>
      </div>
      <div class="inputComponent">
        <span class="title">CCV</span>
        <input
          @focus="incorrectCCV=false"
          id="ccv"
          type="number"
          v-model="formValues.ccv"
          placeholder="XXX"
          :class="{errorStyle: incorrectCCV}"
        />
        <p v-if="incorrectCCV">3 digits!</p>
      </div>
    </div>
    <div class="inputComponent">
      <span class="title">VENDOR</span>
      <select id="Vendors" v-model="formValues.vendor">
        <option
          v-for="(item,index) in this.$store.state.vendors"
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
        incorrectValues = true;
      } else if (this.formValues.number.length < 16) {
        incorrectValues = true;
        this.incorrectNumber = true;
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
      this.$store.commit("addNewCard", newCard);
    }
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
  position: relative;
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
  #CardStack {
  }
  p {
    font-size: 0.8rem;
    font-style: italic;
    bottom: 0;
    left: 1rem;
    position: absolute;
    // background-color: white;
    // border: 1px solid black;
    color: red;
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