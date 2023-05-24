<template>
  <div class="Navbar" v-if="this.currentRouteName.toString() != 'home'">
    <div class="logo-bar">
      <img src="./assets/maustrea-logo.png" class="logo-img" />
      <h1 @click="transferHome">Maustrea</h1>
    </div>
    <div class="right-options">
      <div class="options">
        <label @click="transferHome">Home</label>
        <label>Contact us</label>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import router from "./router";
export default {
  name: "HomeComponent",
  methods: {
    transferHome() {
      router.push("/");
    },
  },
  mounted() {
    // if (pageLocation == "home") {
    //   document.getElementsByClassName("Navbar").style.display = "none";
    //   console.log("yeye");
    // }
    // if (this.currentRouteName.toString() == "home") {
    //   document.getElementsByClassName("Navbar").document.style.display = "none";
    // }
  },
  created() {
    this.currentRoute;
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

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
}

.logo-bar {
  display: flex;
  flex-direction: row;
  margin: auto 50px;

  h1 {
    cursor: pointer;
  }
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

  label {
    cursor: pointer;
  }
}
</style>
