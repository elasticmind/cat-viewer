import { expect } from "chai";
import sinon from "sinon";
import { SET_CATS, SET_CAT } from "../../src/store/mutationTypes";
import { FETCH_CATS, FETCH_CAT } from "../../src/store/actionTypes";

const actionsInjector = require("inject-loader!../../src/store/actions");
const { actions } = actionsInjector({
  "../utils/requestUtils": {
    fetchWithApiHeader(url) {
      const apiResponses = {
        "https://api.thecatapi.com/v1/breeds": [
          { id: "beau" },
          { id: "tifu" },
          { id: "lcats" }
        ],
        "https://api.thecatapi.com/v1/breeds/search?q=beau": [{ id: "beau" }],
        "https://api.thecatapi.com/v1/images/search?breed_id=beau": [
          { url: "beautiful_cat.jpg" }
        ]
      };

      return Promise.resolve(apiResponses[url]);
    }
  }
});

describe("actions", () => {
  it(`${FETCH_CATS} reaches out to the correct API and commits the result`, async () => {
    const commit = sinon.spy();

    await actions[FETCH_CATS]({ commit });

    expect(commit.args[0][0]).to.equal(SET_CATS);
    expect(commit.args[0][1].length).to.equal(3);
  });

  it(`${FETCH_CAT} reaches out to the correct APIs and commits with a newly constructed object`, async () => {
    const commit = sinon.spy();

    await actions[FETCH_CAT]({ commit }, "beau");

    expect(commit.args[0][0]).to.equal(SET_CAT);
    expect(commit.args[0][1].id).to.equal("beau");
    expect(commit.args[0][1].image).to.equal("beautiful_cat.jpg");
  });
});
