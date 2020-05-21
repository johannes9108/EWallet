import Vue from "vue";
import Vuex from "vuex";
import dataFile from "../assets/datafile.json";
import router from "../router/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: dataFile.data,
    vendors: dataFile.vendors,
    nextId: 13,
    activeId: 1,
    activeCard: null,
  },
  getters: {
    filteredData(state) {
      return state.data.filter((item) => item.id != state.activeCard.id);
    },
  },
  mutations: {
    setActive(state, activeId) {
      console.log("ActiveID = " + activeId);
      state.activeCard = state.data.find((item) => item.id == activeId);
    },
    removeItem(state, id) {
      state.activeCard = undefined;
      state.data = state.data.filter((item) => item.id != id);
      console.log(state.data);
    },
    addNewCard(state, card) {
      state.data.push(card);
      router.push({ name: "Home" });
    },
  },
  actions: {},
  modules: {},
});
