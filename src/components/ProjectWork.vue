<template>
    <div class="container">
        <v-container>
            <v-row dense>
                <v-col
                cols="12"
                sm="4"
                >
                    <v-card
                    class="card"
                    shaped
                    elevation="5"
                    color="#F7F4EA"
                    >
                        <v-img
                        src="../assets/cloudpunchdSS.png"
                        aspect-ratio="1"
                        >
                        </v-img>
                        <div class="contentContainer">
                            <h6><a class="titleName" href="https://cloudpunchd.cloudpunch.ca/#/" target="_blank">Cloudpunchd</a></h6>
                            <p class="subHeading">a movie tracking site | march 2023 - present</p>
                            <p>This website is based on Letterboxd, a website for making lists, tracking watched movies and sharing with friends.
                                Cloudpunchd allows users to log-in/sign-up to their own personal profile. Users can then add movies to a Watch List, mark as Watched, and write reviews.
                            </p>
                            <p><a class="websiteLink" href="https://cloudpunchd.cloudpunch.ca/#/" target="_blank">cloudpunchd.cloudpunch.ca</a></p>
                            <p class="subHeading subHeading2">Javascript | Vue.js | Vuetify | HTML | CSS | SCSS | Python | Flask | MariaDB | SQL | Apache | PM2</p>
                            <p><a class="githubLink" href="https://github.com/cloudpunchx/cloudpunchd_frontend.git" target="_blank">Front End Code | GitHub</a></p>
                            <p class="githubLink2"><a class="githubLink" href="https://github.com/cloudpunchx/cloudpunchd_backend.git" target="_blank">Back End Code | GitHub</a></p>
                        </div>
                    </v-card>
                </v-col>

                <v-col
                cols="12"
                sm="4"
                >
                    <v-card
                    class="card"
                    shaped
                    elevation="5"
                    color="#F7F4EA"
                    >
                        <v-img
                        src="../assets/portfolioSS.png"
                        aspect-ratio="1"
                        class="portfolioImg"
                        >
                        </v-img>
                        <div class="contentContainer">
                            <h6><a class="titleName" href="https://cloudpunch.ca/#/" target="_blank">Portfolio</a></h6>
                            <p class="subHeading">my portfolio | may 2023 - present</p>
                            <p>My personal portfolio website where you can view my work and contact me.</p>
                            <p><a class="websiteLink" href="https://cloudpunch.ca/#/" target="_blank">cloudpunch.ca</a></p>
                            <p class="subHeading subHeading2">Javascript | Vue.js | Vuetify | HTML | CSS | SCSS | Apache | PM2</p>
                            <p><a class="githubLink" href="https://github.com/cloudpunchx/portfolioFrontEnd" target="_blank">Front End Code | GitHub</a></p>
                            <p class="githubLink2"><a class="githubLink" href="https://github.com/cloudpunchx/portfoliobackend.git" target="_blank">Back End Code | GitHub</a></p>
                        </div>
                    </v-card>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "ProjectWork"
    }
</script>

<style scoped>

a {
    font-size: 50pt;
    font-family: lobster;
    color: #FF7E6B;
    text-decoration: none;
    transition: font-size 0.2s;
}

a:hover{
    font-size: 52pt;
    color: #ffd819;
}

a:active{
    font-size: 52pt;
}

.subHeading2{
    color: #C0B9DD;
    font-weight: bold;
    transition: font-size 0.2s;
}

.websiteLink:hover{
    font-size: 25pt;
    color: #ffd819;
}

.githubLink{
    font-size: 16pt;
    font-family: playfair;
}

.githubLink:hover{
    font-size: 18pt;
}

.githubLink2{
    margin-top: -4%;
}

.contentContainer{
    padding: 25px;
    flex: 1;
}

.portfolioImg{
    border-bottom: 2px solid #C0B9DD;
}

.v-card {
    height: 100%;
}

@media only screen and (min-width: 1px){
/* Breakpoint for Mobile */

    .titleName{
        font-size: 33pt;
    }
    .subHeading{
        font-size: 13pt;
        font-family: playfair;
    }

    p {
        font-size: 13pt;
    }

    .websiteLink{
        font-size: 18pt;
    }
}

@media only screen and (min-width: 500px){
/* Breakpoint for Tablet */

}

@media only screen and (min-width: 800px){
/* Breakpoint for Desktop */

    .titleName{
        font-size: 42pt;
    }
    .container {
        display: flex;
        padding: 50px;
    }

    .subHeading{
        font-size: 15pt;
    }

    p {
        font-size: 16pt;
    }

    .websiteLink{
        font-size: 22pt;
    }
}

</style>
