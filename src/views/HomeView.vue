<template>
  <div class="background">
    <NavigationBar/>
    <section class="container">
      <img class="logo" src="../assets/cloudpunchTransparent.png" alt="Cloudpunch Logo">
      <h4>siobhan bonardi</h4>
      <p class="paragraph">full stack web developer.</p>
      <p class="paragraph">based in edmonton.</p>
      <p class="paragraph">collects stephen king books.</p>
      <p class="paragraph">loves to travel.</p>
    </section>
    <section class="contactForm">
      <ContactMe/>
    </section>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import ContactMe from '@/components/ContactMe.vue'
  export default {
    name: 'HomeView',
    components: {
      NavigationBar,
      ContactMe
    },
  }
</script>

<style scoped>
  .background{
    height: 100vh;
  }

  .logo{
    width: 5vw;
  }

  .container {
    text-align: center;
    color: #C0B9DD;
    font-size: 40pt;
    padding-top: 100px;
    font-family: playfairDisplay;
}

h4{
  color: #FF7E6B;
}
  .paragraph {
    margin: 0;
    padding: 0;
}

/* .contactForm{
  margin-top: 50px;
} */
</style>