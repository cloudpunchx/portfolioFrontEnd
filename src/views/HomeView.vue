<template>
    <div class="background">
        <div>
            <NavigationBar />
        </div>

        <section class="container">
            <!-- LOGO -->
            <img
                class="logo"
                src="../assets/cloudpunchTransparent.png"
                alt="Cloudpunch Logo"
            />

            <!-- INTRO -->
            <div class="textContainer">
                <h4>siobhan bonardi</h4>
                <p class="paragraph">full stack web developer.</p>
                <p class="paragraph">based in edmonton.</p>
                <p class="paragraph">collects stephen king books.</p>
                <p class="paragraph">loves to travel.</p>
            </div>
        </section>

        <section class="skillsSection">
            <SkillsSection />
        </section>

        <section class="aboutMe">
            <AboutMe />
        </section>

        <section class="projectWork">
            <ProjectWork />
        </section>

        <section class="contactForm">
            <ContactMe />
        </section>

        <FooterBar />
    </div>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar.vue";
    import AboutMe from "@/components/AboutMe.vue";
    import ProjectWork from "@/components/ProjectWork.vue";
    import SkillsSection from "@/components/SkillsSection.vue";
    import ContactMe from "@/components/ContactMe.vue";
    import FooterBar from "@/components/FooterBar.vue";

    export default {
        name: "HomeView",
        components: {
            NavigationBar,
            AboutMe,
            ProjectWork,
            SkillsSection,
            ContactMe,
            FooterBar,
        },
    };
</script>

<style scoped>
    .background {
        height: 100%;
        position: relative;
        z-index: 0;
    }

    .container {
        position: relative;
        text-align: center;
        padding-top: 100px;
        font-family: Georgia, "Times New Roman", Times, serif;
    }

    h4 {
        color: #ff7e6b;
    }
    .textContainer {
        position: relative;
        z-index: 2;
    }

    .paragraph {
        color: #c0b9dd;
        margin: 0;
        padding: 0;
    }

    .aboutMe,
    .skillsSection {
        background-color: #f7f4ea;
        margin-top: 50px;
    }

    .projectWork {
        background-color: #c0b9dd;
    }

    .contactForm {
        background-color: #ff7e6b;
    }

    @media only screen and (min-width: 1px) {
        /* Breakpoint for Mobile */
        .logo {
            width: 90px;
        }

        .container {
            font-size: 25pt;
            padding-top: 80px;
        }
    }

    @media only screen and (min-width: 800px) {
        /* Breakpoint for Desktop */

        .logo {
            width: 125px;
        }

        .container {
            font-size: 40pt;
            padding-top: 100px;
        }
    }
</style>
