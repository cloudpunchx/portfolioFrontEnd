<template>
  <div class="background">
    <section class="container">
      <img class="logo" src="../assets/cloudpunchTransparent.png" alt="Cloudpunch Logo">
      <p class="paragraph">siobhan bonardi.</p>
      <p class="paragraph">full stack web developer.</p>
      <p class="paragraph">based in edmonton.</p>
      <p class="paragraph">collects stephen king books.</p>
      <p class="paragraph">loves to travel.</p>
    </section>
  </div>
</template>

<script>

  export default {
    name: 'HomeView',

    components: {
      
    },
  }
</script>

<style scoped>
  div{
    height: 100vh;
  }

  .logo{
    width: 5vw;
  }

  .container {
  text-align: center;
  padding-top: 150px;
}

  .paragraph {
    margin: 0;
    padding: 0;
    color: #A53860;
    font-size: 40pt;
    font-family: lobster;
}
</style>