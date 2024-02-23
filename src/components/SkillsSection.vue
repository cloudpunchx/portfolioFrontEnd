<template>
    <div class="container">
        <v-card color="primary" elevation="5" shaped dark>
            <v-row>
                <v-col>
                    <h3>Skills</h3>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col v-for="(skill, i) in skills" :key="i" cols="auto">
                    <p class="skills">{{ skill }}</p>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "SkillsSection",
        data() {
            return {
                skills: [
                    "HTML",
                    "CSS",
                    "SCSS",
                    "JavaScript",
                    "Vue.js",
                    "React",
                    "Python",
                    "Flask",
                    "MariaDB",
                    "DBeaver",
                    "Apache",
                    "Vuetify",
                ],
            };
        },
    };
</script>

<style scoped>
    h3 {
        font-size: 2.5rem;
        font-family: lobster;
    }

    .skills {
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 600px) {
        /* Breakpoint for Tablet */
        .container {
            width: 80vw;
        }
    }
    @media only screen and (min-width: 800px) {
        /* Breakpoint for Desktop */
        .container {
            width: 55vw;
        }
    }
</style>
