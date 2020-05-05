<template functional>
  <div>
    <img :src="props.cat.image" :alt="props.cat.name" class="image" />
    <h1 class="name">{{ props.cat.name }}</h1>
    <h3 class="heading">Description</h3>
    <p>{{ props.cat.description }}</p>
    <h3 class="heading">Detailed information</h3>
    <p class="detail">
      <span class="detail-label">Weight:</span>
      <span>&nbsp;{{ props.cat.weight.metric }}&nbsp;kg</span>
    </p>
    <p class="detail">
      <span class="detail-label">Life span:</span>
      <span>&nbsp;{{ props.cat.life_span }}&nbsp;years</span>
    </p>
    <p class="detail">
      <span class="detail-label">Temperament:</span>
      <span>&nbsp;{{ props.cat.temperament }}</span>
    </p>
    <h4 class="further-info-text">
      For further information, please visit the
      <a :href="props.cat.wikipedia_url">Wikipedia page of the breed!</a>
    </h4>
  </div>
</template>

<style lang="scss" scoped>
.image {
  display: block;
  width: 80%;
  margin: 0 auto 40px;
}

.name {
  margin-bottom: 20px;
  text-align: center;
}

.heading {
  margin: 30px 0 10px;
}

.detail {
  margin-bottom: 10px;
}

.detail-label {
  font-weight: bold;
}

.further-info-text {
  margin: 100px 0;
  text-align: center;

  a {
    color: var(--color-gray-dark);
    transition: color 0.15s ease-out;

    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
