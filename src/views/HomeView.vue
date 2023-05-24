<template>
  <div class="blocks">
    <div @click="transferTropical" class="block block--left">
      <h1>Tropical <br />Paradise</h1>
    </div>
    <div @click="transferOlive" class="block block--right">
      <h1>Olive Garden</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import router from "@/router";

export default {
  name: "HomeView",
  components: {},
  methods: {
    transferTropical() {
      router.push("/tropical");
    },
    transferOlive() {
      router.push("/olivegarden");
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  max-width: 100%;
  max-height: calc(100% - 90px);
}

.blocks {
  display: flex;
}

.block {
  background-color: #d25a1e;
  min-height: 100vh;
  width: 50%;
  width: calc(50% + 2rem);
  display: flex;
  justify-content: center;
  cursor: pointer;

  h1 {
    margin: auto;
    font-size: 3rem;
  }
}

.block--left {
  clip-path: polygon(0 0, 100% 0, calc(100% - 4rem) 100%, 0% 100%);
  background: url("../assets/bg-img.jpg");
  background-size: cover;
  background-position: -150px;
  transition: ease 0.2s;

  &:hover {
    width: 60%;
  }

  h1 {
    font-family: "Pangolin", cursive;
    font-size: 6rem;
  }
}

.block--right {
  margin-left: -3.5rem;
  clip-path: polygon(4rem 0, 100% 0, 100% 100%, 0% 100%);
  background: url("../assets/olive-bg-1.jpg");
  background-size: cover;
  transition: ease 0.2s;

  &:hover {
    width: 60%;
  }

  h1 {
    font-family: "Kaushan Script", cursive;
    font-size: 6rem;
  }
}
</style>
