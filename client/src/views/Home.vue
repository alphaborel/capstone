<template>
  <div class="splash">
    <div class="tagDiv">
      <h3>Keep track of your loans and grow your small business with:</h3>
      <h1><em>Loan-Dash</em></h1>
      <v-btn color="green" large :to="{name: 'signup' }">Get Started</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
  .splash {
    width: 100%;
    height: 100%;
    background-image: url("../assets/splash_background.jpg");
    background-repeat: no-repeat;
    position: fixed;
    background-size: cover;
  }
  .tagDiv {
    max-width: 400px;
    margin-left: 4em;
    margin-top: 10em;
    text-align: center;
  }
  .tagDiv h1 {
    font-size: 5em;
  }
</style>
