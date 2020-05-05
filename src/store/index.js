import Vue from "vue";
import Vuex from "vuex";
import { fetchWithApiHeader } from "../utils/requestUtils";

require("dotenv").config();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cats: null,
    cat: null
  },
  mutations: {
    setCats(state, cats) {
      state.cats = cats;
    },
    setCat(state, cat) {
      state.cat = cat;
    }
  },
  actions: {
    async fetchCats({ commit }) {
      const cats = await fetchWithApiHeader(
        "https://api.thecatapi.com/v1/breeds"
      );

      commit("setCats", cats);
    },
    async fetchCat({ commit }, id) {
      const [cat, image] = await Promise.all([
        fetchWithApiHeader(
          `https://api.thecatapi.com/v1/breeds/search?q=${id}`
        ),
        fetchWithApiHeader(
          `https://api.thecatapi.com/v1/images/search?breed_id=${id}`
        )
      ]);

      commit("setCat", cat.length ? { ...cat[0], image: image[0].url } : {});
    }
  }
});
