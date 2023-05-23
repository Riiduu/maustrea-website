<template>
  <div class="Navbar">
    <div class="logo-bar">
      <img src="./assets/maustrea-logo.png" class="logo-img" />
      <h1>Maustrea</h1>
    </div>
    <div class="right-options">
      <div class="options">
        <label>Home</label>
        <label>Products</label>
        <label>Contact us</label>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.Navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  background-color: white;
  position: absolute;
}

.logo-bar {
  display: flex;
  flex-direction: row;
  margin: auto 50px;
}

.logo-img {
  height: 50px;
  width: 50px;
  margin: auto 5%;
  padding-right: 10px;
}

.right-options {
  display: flex;
  flex-direction: row;
  margin: auto 5%;
}

.right-options label {
  padding: 5px;
  font-size: large;
}

.options {
  margin-right: 10px;
}

#basket-icon {
  font-size: 2rem;
  margin-top: -5px;
}
</style>
