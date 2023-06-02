<template>
    <div class="container">
        <v-container>
            <v-row dense>
                <v-col
                cols="12"
                sm="4"
                >
                    <v-card
                    shaped
                    elevation="5"
                    >
                        <v-img
                        src="https://media.distractify.com/brand-img/2Ykrh7vPe/0x0/servantseries-1645214277281.jpg"
                        aspect-ratio="1"
                        >
                        </v-img>
                        <div class="contentContainer">
                            <h6><a href="https://cloudpunchd.cloudpunch.ca/#/" target="_blank">Cloudpunchd</a></h6>
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
                <v-col>
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    Second
                    </v-card>
                </v-col>
                <v-col>
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    Third
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
.container {
    display: flex;
    margin: 80px;
}

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

.subHeading{
    font-size: 15pt;
    font-family: playfair;
}

.subHeading2{
    color: #C0B9DD;
    font-weight: bold;
    transition: font-size 0.2s;
}

p {
    font-size: 16pt;
}

.websiteLink{
    font-size: 22pt;
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
}

</style>