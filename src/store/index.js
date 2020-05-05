import Vue from "vue";
import Vuex from "vuex";
import { fetchWithApiHeader } from "../utils/requestUtils";
import * as mutationTypes from "./mutationTypes";
import * as actionTypes from "./actionTypes";

require("dotenv").config();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cats: null,
    cat: null
  },
  mutations: {
    [mutationTypes.SET_CATS](state, cats) {
      state.cats = cats;
    },
    [mutationTypes.SET_CAT](state, cat) {
      state.cat = cat;
    }
  },
  actions: {
    [actionTypes.FETCH_CATS]: async function({ commit }) {
      const cats = await fetchWithApiHeader(
        "https://api.thecatapi.com/v1/breeds"
      );

      commit(mutationTypes.SET_CATS, cats);
    },
    [actionTypes.FETCH_CAT]: async function({ commit }, id) {
      const [cat, image] = await Promise.all([
        fetchWithApiHeader(
          `https://api.thecatapi.com/v1/breeds/search?q=${id}`
        ),
        fetchWithApiHeader(
          `https://api.thecatapi.com/v1/images/search?breed_id=${id}`
        )
      ]);

      commit(
        mutationTypes.SET_CAT,
        cat.length ? { ...cat[0], image: image[0].url } : {}
      );
    }
  }
});
