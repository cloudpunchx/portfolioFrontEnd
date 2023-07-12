<template>
    <div class="container">
        <v-card
        class="card"
        shaped
        elevation="5"
        color="#FF7E6B"
        >
            <v-container>
                <v-row>
                    <v-col
                    >
                        <h3>Skills</h3>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                    >
                        <p class="skills">HTML | CSS | JavaScript | Vue.js | Python | Flask | Apache | MariaDB</p>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "SkillsSection"
    }
</script>

<style scoped>

    @media only screen and (min-width: 1px){
    /* Breakpoint for Mobile */

        .container{
            display: flex;
            flex-wrap: wrap;
        }

        h3{
            font-size: 3rem;
            font-family: lobster;
            color: whitesmoke;
        }

        .skills{
            color: whitesmoke;
            font-size: 15pt;
        }
    }
    @media only screen and (min-width: 600px){
    /* Breakpoint for Tablet */ 
        .container{
            width: 80vw;
            display: flex;
            flex-wrap: wrap;
        }

        h3 {
            font-size: 3.2rem;
        }

        .skills{
            font-size: 17pt;
        }

    }
    @media only screen and (min-width: 800px){
    /* Breakpoint for Desktop */
        .container{
                width: 50vw;
                display: flex;
                flex-wrap: wrap;
            }

        h3 {
            font-size: 3.5rem;
        }
    }
</style>