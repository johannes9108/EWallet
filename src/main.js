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
      activeId: 1,
    };
  },

  methods: {
    filteredData(activeId) {
      return this.data.filter((item) => item.id != activeId);
    },
    setActive(activeId) {
      this.activeId = activeId;
    },
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
