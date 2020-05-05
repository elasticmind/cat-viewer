<template>
  <div>
    <ul v-if="cats" class="list">
      <router-link
        v-for="cat in cats"
        :key="cat.id"
        :to="`/detail/${cat.id}`"
        tag="li"
        class="list-item"
      >
        {{ cat.name }}
      </router-link>
    </ul>
    <div v-else>
      <h1>
        Loading...
      </h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { FETCH_CATS } from "@/store/actionTypes";

export default {
  computed: {
    ...mapState(["cats"])
  },
  mounted() {
    this.$store.dispatch(FETCH_CATS);
  }
};
</script>

<style lang="scss" scoped>
.list {
  list-style-type: none;
  width: 60%;
  margin: auto;
}

.list-item {
  background-color: var(--color-light);
  border: 1px solid #a0a0a0;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.15s ease-out;
}

.list-item:hover {
  color: var(--color-primary);
  background-color: var(--color-white);
  transform: scale(1.02);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.list-item:first-of-type {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.list-item:last-of-type {
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>
