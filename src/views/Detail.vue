<template>
  <div class="wrapper">
    <template v-if="cat">
      <cat-detail-card :cat="cat" v-if="hasInfo" />
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
import CatDetailCard from "@/components/CatDetailCard";

export default {
  components: {
    CatDetailCard
  },
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
.wrapper {
  padding: 0 40px;
  text-align: left;
}

.back {
  background-color: var(--color-primary);
  padding: 20px;
  margin: auto;
  color: var(--color-gray-light);
  text-decoration: none;
  font-weight: bold;
  border-radius: 10px;
  display: block;
  width: fit-content;
  transition: color 0.15s ease-out;

  &:hover {
    color: var(--color-light);
  }
}
</style>
