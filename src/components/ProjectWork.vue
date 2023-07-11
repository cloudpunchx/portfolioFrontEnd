<template>
    <div>
        <div class="container">
            <v-container>
                <v-row>
                    <v-col>
                        <h3>Projects</h3>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col
                    cols="12"
                    sm="12"
                    md="6"
                    lg="4"
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
                                <p class="subHeading subHeading2">Javascript | Vue.js | Vuetify | HTML | CSS | SCSS | Python | Flask | MariaDB | SQL | Apache | PM2</p>
                                <p class="description">This website is based on Letterboxd, a website for making lists, tracking watched movies and sharing with friends.
                                    Cloudpunchd allows users to log-in/sign-up to their own personal profile. Users can then add movies to a Watch List, mark as Watched, and write reviews.
                                </p>
                                <p><a class="githubLink" href="https://github.com/cloudpunchx/cloudpunchd_frontend.git" target="_blank">Front End Code | GitHub</a></p>
                                <p class="githubLink2"><a class="githubLink" href="https://github.com/cloudpunchx/cloudpunchd_backend.git" target="_blank">Back End Code | GitHub</a></p>
                                <p><a class="websiteLink" href="https://cloudpunchd.cloudpunch.ca/#/" target="_blank">cloudpunchd.cloudpunch.ca</a></p>
                            </div>
                        </v-card>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="12"
                    md="6"
                    lg="4"
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
                                <p class="subHeading subHeading2">Javascript | Vue.js | Vuetify | HTML | CSS | SCSS | Python | Flask | MariaDB | SQL | Apache | PM2</p>
                                <p class="description">My personal portfolio website where you can view my work and contact me.</p>
                                <p><a class="githubLink" href="https://github.com/cloudpunchx/portfolioFrontEnd" target="_blank">Front End Code | GitHub</a></p>
                                <p class="githubLink2"><a class="githubLink" href="https://github.com/cloudpunchx/portfoliobackend.git" target="_blank">Back End Code | GitHub</a></p>
                                <p><a class="websiteLink" href="https://cloudpunch.ca/#/" target="_blank">cloudpunch.ca</a></p>
                            </div>
                        </v-card>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="12"
                    md="6"
                    lg="4"
                    >
                        <v-card
                        class="card"
                        shaped
                        elevation="5"
                        color="#F7F4EA"
                        >
                            <v-img
                            src="../assets/calculatorImg.jpg"
                            aspect-ratio="1"
                            class="calculatorImg"
                            >
                            </v-img>
                            <div class="contentContainer">
                                <h6><a class="titleName" href="https://calculator.cloudpunch.ca/#/" target="_blank">Calculator</a></h6>
                                <p class="subHeading">calculator | june 2023</p>
                                <p class="subHeading subHeading2">Javascript | Vue.js | Vuetify | HTML | CSS | SCSS | Apache | PM2</p>
                                <p class="description">A simple calculator.</p>
                                <p><a class="githubLink" href="https://github.com/cloudpunchx/simplecalculator.git" target="_blank">Front End Code | GitHub</a></p>
                                <p><a class="websiteLink" href="https://calculator.cloudpunch.ca/#/" target="_blank">calculator.cloudpunch.ca</a></p>
                            </div>
                        </v-card>
                    </v-col>

                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectWork"
    }
</script>

<style scoped>

/* Align content in v-cards */
.container {
    text-align: center;
}

a {
    font-family: lobster;
    color: #FF7E6B;
    text-decoration: none;
    transition: font-size 0.2s;
}

/* link font = yellow on hover */
a:hover{
    color: #ffd819;
}

.description{
    color: #7e72af;
    font-family: playfair;
}
.subHeading{
    color: #7e72af;
    font-size: 1.1rem;
    font-family: playfair;
    font-weight: bold;
}
.subHeading2{
    color: #7e72af;
    font-weight: bold;
    transition: font-size 0.2s;
}
p {
        font-size: 1.2rem;
    }

.githubLink{
    font-size: 1.2rem;
    font-family: playfair;
}

.githubLink:hover{
    font-size: 1.3rem;
}

.githubLink2{
    margin-top: -4%;
}

.contentContainer{
    padding: 25px;
    flex: 1;
}

/* Bottom border if screenshot of project is a light color (design) */
.portfolioImg, .calculatorImg{
    border-bottom: 2px solid #C0B9DD;
}

/* Height 100 so the cards are all the same height even with smaller amount of content */
.v-card {
    height: 100%;
}

@media only screen and (min-width: 1px){
/* Breakpoint for Mobile */
    h3 {
        font-size: 3rem;
        font-family: lobster;
        margin-bottom: 25px;
        color: whitesmoke;
    }
    .titleName{
        font-size: 3rem;
    }
    .websiteLink{
        font-size: 1.6rem;
    }
    .websiteLink:hover{
        font-size: 1.7rem;
    }
}

@media only screen and (min-width: 600px){
/* Breakpoint for Tablet */
    h3 {
        font-size: 3.2rem;
    }
    .container {
        display: flex;
        padding: 25px;
        flex-wrap: wrap;
    }

    .v-col {
        width: 100%;
    }
}

@media only screen and (min-width: 800px){
/* Breakpoint for Desktop */
    h3 {
        font-size: 3.5rem;
    }
    .titleName{
        font-size: 3rem;
    }
    .websiteLink{
        font-size: 1.5rem;
    }
    .websiteLink:hover{
        font-size: 1.6rem;
    }
}

@media only screen and (min-width: 1260px){
/* Breakpoint for Desktop */

    .titleName{
        font-size: 3.1rem;
    }
}

</style>
