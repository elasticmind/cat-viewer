import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Detail from "../../src/views/Detail";
import CatDetailCard from "../../src/components/CatDetailCard";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

const mountOptionsWithCat = cat => ({
  store: new Vuex.Store({
    state: { cat },
    actions: { FETCH_CAT: () => {} }
  }),
  localVue,
  mocks: { $route: { params: { id: "meow" } } },
  stubs: ["router-link"]
});

describe("Detail.vue", () => {
  it("renders loader if fetch has not yet completed", () => {
    const wrapper = shallowMount(Detail, mountOptionsWithCat(null));

    expect(wrapper.find(CatDetailCard).exists()).to.equal(false);
    expect(wrapper.contains("[data-test-id=no-info]")).to.equal(false);
    expect(wrapper.contains("[data-test-id=loader]")).to.equal(true);
  });

  it("renders no-info if fetch completed but resulted in an empty object", () => {
    const wrapper = shallowMount(Detail, mountOptionsWithCat({}));

    expect(wrapper.find(CatDetailCard).exists()).to.equal(false);

    expect(wrapper.contains("[data-test-id=no-info]")).to.equal(true);
    expect(wrapper.contains("[data-test-id=loader]")).to.equal(false);
  });

  it("renders CatDetailCard if fetch completed and cat is an object with at least one key", () => {
    const wrapper = shallowMount(Detail, mountOptionsWithCat({ key: "value" }));

    expect(wrapper.find(CatDetailCard).exists()).to.equal(true);
    expect(wrapper.contains("[data-test-id=no-info]")).to.equal(false);
    expect(wrapper.contains("[data-test-id=loader]")).to.equal(false);
  });
});
