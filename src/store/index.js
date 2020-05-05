import Vue from "vue";
import Vuex from "vuex";

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
      const cats = await (
        await fetch("https://api.thecatapi.com/v1/breeds", {
          headers: {
            "x-api-key": process.env.X_API_KEY
          }
        })
      ).json();

      commit("setCats", cats);
    },
    async fetchCat({ commit }, id) {
      const cat = await (
        await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${id}`, {
          headers: {
            "x-api-key": process.env.X_API_KEY
          }
        })
      ).json();
      const image = await (
        await fetch(
          `https://api.thecatapi.com/v1/images/search?breed_id=${id}`,
          {
            headers: {
              "x-api-key": process.env.X_API_KEY
            }
          }
        )
      ).json();

      console.log(cat, image);

      commit("setCat", cat.length ? { ...cat[0], image: image[0].url } : {});
    }
  }
});
