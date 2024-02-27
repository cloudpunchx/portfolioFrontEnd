<template>
    <div>
        <v-container class="projectsContainer">
            <v-row>
                <v-col>
                    <h3>
                        Projects |
                        <a
                            class="whiteText"
                            href="https://github.com/cloudpunchx"
                            target="_blank"
                            >GitHub</a
                        >
                    </h3>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    v-for="(project, i) in projects"
                    :key="i"
                    cols="12"
                    sm="12"
                    md="12"
                    lg="12"
                >
                    <v-card color="transparent" shaped flat>
                        <v-row>
                            <v-col sm="6" md="6" lg="6" xl="5">
                                <v-img
                                    :src="project.previewImg"
                                    alt="Project Image"
                                    class="image"
                                ></v-img>
                            </v-col>
                            <v-col sm="6" md="6" lg="6" xl="7">
                                <v-card-title class="justify-center">
                                    <a
                                        class="titleName"
                                        :href="project.siteUrl"
                                        target="_blank"
                                        >{{ project.title }}</a
                                    >
                                </v-card-title>
                                <v-card-text>
                                    <p class="subHeading">
                                        {{ project.subHeading }}
                                    </p>
                                    <p class="subHeading">
                                        {{ project.skillsUsed.join(" | ") }}
                                    </p>
                                    <p class="description">
                                        {{ project.description }}
                                    </p>
                                    <p>
                                        <a
                                            class="websiteLink"
                                            :href="project.githubFrontEnd"
                                            target="_blank"
                                            >Front End Code | GitHub</a
                                        >
                                    </p>
                                    <p v-if="project.githubBackEnd">
                                        <a
                                            class="websiteLink"
                                            :href="project.githubBackEnd"
                                            target="_blank"
                                            >Back End Code | GitHub</a
                                        >
                                    </p>
                                    <p>
                                        <a
                                            class="websiteLink"
                                            :href="project.siteUrl"
                                            target="_blank"
                                            >{{ project.siteUrl }}</a
                                        >
                                    </p>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                    <v-divider></v-divider>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "ProjectWork",
        data() {
            return {
                projects: [
                    {
                        previewImg: require("@/assets/cloudbookdSS.jpg"),
                        title: "Cloudbookd",
                        subHeading: "a reading tracker site | 2024",
                        skillsUsed: [
                            "JavaScript",
                            "Vue.js",
                            "Vuetify",
                            "Three.js",
                            "HTML",
                            "CSS",
                            "Python",
                            "Flask",
                            "MariaDB",
                            "Apache",
                            "DBeaver",
                        ],
                        description:
                            "This is a solo reading journey, track books you want to read, have read, and are currently reading. Challenge yourself by setting a yearly reading goal. Make custom bookshelves (lists).",
                        githubFrontEnd:
                            "https://github.com/cloudpunchx/cloudbookdFE.git",
                        githubBackEnd:
                            "https://github.com/cloudpunchx/cloudbookdBE.git",
                        siteUrl: "https://cloudbookd.cloudpunch.ca/#/",
                    },
                    {
                        previewImg: require("../assets/cloudpunchdSS.png"),
                        title: "Cloudpunchd",
                        subHeading: "a movie tracking site | 2023",
                        skillsUsed: [
                            "JavaScript",
                            "Vue.js",
                            "Vuetify",
                            "HTML",
                            "CSS",
                            "Python",
                            "Flask",
                            "MariaDB",
                            "Apache",
                            "DBeaver",
                        ],
                        description:
                            "This website is based on Letterboxd, a website for making lists, tracking watched movies and sharing with friends. Cloudpunchd allows users to log-in/sign-up to their own personal profile. Users can then add movies to a Watch List, mark as Watched, and write reviews.",
                        githubFrontEnd:
                            "https://github.com/cloudpunchx/cloudpunchd_frontend.git",
                        githubBackEnd:
                            "https://github.com/cloudpunchx/cloudpunchd_backend.git",
                        siteUrl: "https://cloudpunchd.cloudpunch.ca/#/",
                    },
                    {
                        previewImg: require("../assets/portfolioSS.png"),
                        title: "Portfolio",
                        subHeading: "my portfolio site",
                        skillsUsed: [
                            "JavaScript",
                            "Vue.js",
                            "Vuetify",
                            "HTML",
                            "CSS",
                            "Python",
                            "Flask",
                            "MariaDB",
                            "Apache",
                            "DBeaver",
                        ],
                        description:
                            "My personal portfolio website where you can view my work and contact me.",
                        githubFrontEnd:
                            "https://github.com/cloudpunchx/portfolioFrontEnd",
                        githubBackEnd:
                            "https://github.com/cloudpunchx/portfoliobackend.git",
                        siteUrl: "https://cloudpunch.ca/#/",
                    },
                ],
            };
        },
    };
</script>

<style scoped>
    .projectsContainer {
        color: whitesmoke;
        font-family: Georgia, "Times New Roman", Times, serif;
        padding: 25px;
        text-align: center;
    }

    h3 {
        font-size: 2rem;
    }

    .whiteText {
        color: whitesmoke;
    }

    .image {
        border: 2px solid silver;
        max-width: 500px;
    }

    .titleName {
        font-size: 2rem;
        color: rgb(53, 32, 95);
        font-weight: bold;
    }

    a {
        text-decoration: none;
    }

    .subHeading,
    .description {
        font-size: 1.2rem;
        color: rgb(53, 32, 95);
    }

    .subHeading {
        font-weight: bold;
    }

    .websiteLink {
        font-size: 1.2rem;
        color: rgb(53, 32, 95);
    }

    @media only screen and (min-width: 800px) {
        .container {
            max-width: 80vw;
        }
    }

    @media only screen and (min-width: 1260px) {
        .container {
            max-width: 60vw;
        }
    }
</style>
