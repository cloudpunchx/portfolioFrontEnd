<template>
  <div class="background">
    <div>
      <NavigationBar/>
    </div>

    <section class="container">
      <img class="logo" src="../assets/cloudpunchTransparent.png" alt="Cloudpunch Logo">
      <h4>siobhan bonardi</h4>
      <div class="imgContainer">
        <v-img
        src="../assets/stars1.png"
        alt="Star"
        class="stars1"
        ></v-img>
        <v-img
        src="../assets/stars2.png"
        alt="Star"
        class="stars2"
        ></v-img>
      </div>
      <p class="paragraph">full stack web developer.</p>
      <p class="paragraph">based in edmonton.</p>
      <p class="paragraph">collects stephen king books.</p>
      <p class="paragraph">loves to travel.</p>
    </section>

    <section class="projectWork">
      <ProjectWork/>
    </section>

    <section class="aboutMe">
      <AboutMe/>
    </section>

    <section class="contactForm">
      <ContactMe/>
    </section>

    <FooterBar/>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import ProjectWork from '@/components/ProjectWork.vue'
import AboutMe from '@/components/AboutMe.vue'
import ContactMe from '@/components/ContactMe.vue'
import FooterBar from '@/components/FooterBar.vue'
  export default {
    name: 'HomeView',
    components: {
      NavigationBar,
      ProjectWork,
      AboutMe,
      ContactMe,
      FooterBar
    },
  }
</script>

<style scoped>
.background{
  height: 100%;
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

.imgContainer{
  position: relative;
  height: 100%;
  animation: twinklingAnimation 6s infinite;
}

@keyframes twinklingAnimation {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
/* .stars1{
  width: 100px;
  position: absolute;
  top: 11%;
  left: 30%;
  transform: translate(-25%, 50%);
  max-width: 100%;
} */

/* .stars2{
  width: 100px;
  position: absolute;
  top: 40%;
  left: 65%;
  transform: translate(-80%, 240%);
  max-width: 100%;
} */

.paragraph {
  margin: 0;
  padding: 0;
}

.projectWork{
  margin-top: 250px;
  background-color: #C0B9DD;
}

.aboutMe{
  background-color: #F7F4EA;
}

.contactForm{
  background-color: #FF7E6B;
}

@media only screen and (min-width: 1px){
/* Breakpoint for Mobile */
  .logo{
    width: 25vw;
  }

  .container {
    font-size: 30pt;
    padding-top: 80px;
  }

  .stars1{
    width: 65px;
    position: absolute;
    top: 40%;
    left: 10%;
    transform: translate(-20%, 80%);
    max-width: 100%;
  }

  .stars2{
    width: 50px;
    position: absolute;
    top: 100%;
    left: 75%;
    transform: translate(-50%, 500%);
    max-width: 100%;
  }

}

@media only screen and (min-width: 700px){
/* Breakpoint for Tablet */
}

@media only screen and (min-width: 1000px){
/* Breakpoint for Desktop */

  .logo{
    width: 5vw;
  }

  .container {
    font-size: 40pt;
    padding-top: 100px;
  }

  .stars1{
    width: 100px;
    position: absolute;
    top: 11%;
    left: 30%;
    transform: translate(-25%, 50%);
    max-width: 100%;
  }

  .stars2{
    width: 100px;
    position: absolute;
    top: 40%;
    left: 65%;
    transform: translate(-80%, 240%);
    max-width: 100%;
  }
}
</style>