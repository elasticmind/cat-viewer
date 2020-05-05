import { expect } from "chai";
import { SET_CATS, SET_CAT } from "../../src/store/mutationTypes";
import { mutations } from "../../src/store/mutations";

describe("mutations", () => {
  it(`${SET_CATS} properly sets the respective state`, () => {
    const state = { cats: null };
    const fetchedCats = [
      {
        id: "beau"
      },
      {
        id: "tifu"
      },
      {
        id: "lcat"
      }
    ];
    mutations[SET_CATS](state, fetchedCats);
    expect(state.cats).to.equal(fetchedCats);
  });

  it(`${SET_CAT} properly sets the respective state`, () => {
    const state = { cat: null };
    const fetchedCat = {
      id: "beau",
      description: "Cats are the most wonderful thing in the world."
    };
    mutations[SET_CAT](state, fetchedCat);
    expect(state.cat).to.equal(fetchedCat);
  });
});
