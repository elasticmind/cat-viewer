import * as mutationTypes from "./mutationTypes";

export const mutations = {
  [mutationTypes.SET_CATS](state, cats) {
    state.cats = cats;
  },
  [mutationTypes.SET_CAT](state, cat) {
    state.cat = cat;
  }
};
