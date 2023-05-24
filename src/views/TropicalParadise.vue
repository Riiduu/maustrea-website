<template>
  <div class="TropicalView">
    <div class="hero">
      <h1>Tropical Paradise</h1>
      <p>Be wherever you want</p>
    </div>
    <div class="fruit_placeholder">
      <img src="../assets/icons/papaya-icon.png" alt="Papaya Icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TropicalView",
};
</script>

<style lang="scss" scoped>
.hero {
  height: 60vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background: url("../assets/bg-img.jpg");
  background-size: cover;
  background-position-y: -400px;
  font-family: "Pangolin", cursive;

  font-size: 3rem;

  p {
    margin-top: -40px;
  }
}

.fruit_placeholder {
  height: 100px;
  margin: 50px;

  img {
    height: 80px;
  }
}
</style>
