<template>
  <div id="app">
    <div class="content-wrapper">
      <header class="header">
        <h1>
          Cats of the world
        </h1>
        <h4>
          Choose one to see detailed info about it! 🐈
        </h4>
      </header>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
:root {
  --color-primary: #0f9797;
  --color-gray-dark: #333333;
  --color-gray-light: #3f495e;
  --color-white: #ffffff;
  --color-light: #fafafa;
  --color-light-dark: #eaeaea;
}

* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-gray-dark);
  background-color: var(--color-light-dark);
  min-height: 100vh;
}

.header {
  display: inline-block;
  margin: 40px 0;
  padding: 0 20px;
}

.content-wrapper {
  width: 80%;
  margin: auto;
  padding-bottom: 40px;
  background-color: var(--color-light);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 600px) {
  .content-wrapper {
    width: 100%;
  }
}
</style>
