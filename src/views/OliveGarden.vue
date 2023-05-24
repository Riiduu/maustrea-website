<template>
  <div class="OliveGarden">
    <div class="hero">
      <h1>Olive Garden</h1>
      <p>Be wherever you want</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OliveGarden",
};
</script>

<style lang="scss" scoped>
.hero {
  height: 60vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background: url("../assets/olive-bg-1.jpg");
  background-size: cover;
  background-position-y: -400px;
  font-family: "Pangolin", cursive;

  font-size: 3rem;

  p {
    margin-top: -40px;
  }
}
</style>
