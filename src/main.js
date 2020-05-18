import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dataFile from "./assets/datafile.json";
Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      data: dataFile.data,
      vendors: dataFile.vendors,
      nextId: 13,
      activeId: 1,
      activeCard: null,
    };
  },
  created() {
    if (this.data.length > 0) {
      this.activeCard = this.data.find((val) => val.id == this.$root.activeId);
      this.data = this.filteredData(this.activeId);
    }
  },
  methods: {
    filteredData(activeId) {
      return this.data.filter((item) => item.id != activeId);
    },

    setActive(activeId) {
      let oldActiveCard = this.activeCard;
      let index = this.data.findIndex((item) => item.id == activeId);
      this.activeCard = this.data.find((item) => item.id == activeId);
      this.data.splice(index, 1, oldActiveCard);
    },
    getStackSize() {
      return this.data.length;
    },
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
