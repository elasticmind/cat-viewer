<template>
  <div>
    <template v-if="cat">
      <template v-if="hasInfo">
        <h1>{{ cat.name }}</h1>
        <img src="" :alt="cat.name" />
        <h3>Description</h3>
        <p>{{ cat.description }}</p>
      </template>
      <div v-else>
        <h1>
          Unfortunately, there is no information available for this breed.
        </h1>
      </div>
    </template>
    <div v-else>
      <h1>
        Loading...
      </h1>
    </div>
    <router-link to="/" class="back">
      Back to the list of cats
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["cat"]),
    hasInfo() {
      return this.cat !== null && Object.keys(this.cat).length !== 0;
    }
  },
  mounted() {
    this.$store.dispatch("fetchCat", this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
.back {
  background-color: var(--color-primary);
  padding: 20px;
  color: var(--color-gray-light);
  text-decoration: none;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  margin-top: 100px;

  &:hover {
    color: var(--color-light);
  }
}
</style>
