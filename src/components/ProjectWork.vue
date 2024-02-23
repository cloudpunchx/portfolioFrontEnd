<template>
    <div>
        <div>
            <v-container class="container">
                <v-row>
                    <v-col>
                        <h3>
                            Projects |
                            <a
                                class="h3Link"
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
                        sm="6"
                        md="6"
                        lg="6"
                    >
                        <v-card shaped elevation="5">
                            <v-img :src="project.previewImg"> </v-img>
                            <v-card-title class="justify-center">
                                <a
                                    class="titleName linkHover"
                                    :href="project.siteUrl"
                                    target="_blank"
                                    >{{ project.title }}</a
                                ></v-card-title
                            >
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
                                        class="githubLink linkHover"
                                        :href="project.githubFrontEnd"
                                        target="_blank"
                                        >Front End Code | GitHub</a
                                    >
                                </p>
                                <p class="githubLink2">
                                    <a
                                        class="githubLink linkHover"
                                        :href="project.githubBackEnd"
                                        target="_blank"
                                        >Back End Code | GitHub</a
                                    >
                                </p>
                                <p>
                                    <a
                                        class="websiteLink linkHover"
                                        :href="project.siteUrl"
                                        target="_blank"
                                        >{{ project.siteUrl }}</a
                                    >
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectWork",
        data() {
            return {
                // WRITE IN TEST LOGIN SO PEOPLE CAN USE IT?
                projects: [
                    {
                        previewImg: require("@/assets/cloudbookdSS.jpg"),
                        title: "Cloudbookd",
                        subHeading: "a reading tracker site | 2024",
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
                    {
                        previewImg: require("../assets/calculatorImg.jpg"),
                        title: "Simple Calculator",
                        subHeading: "calculator | june 2023",
                        skillsUsed: [
                            "JavaScript",
                            "Vue.js",
                            "Vuetify",
                            "HTML",
                            "CSS",
                        ],
                        description: "A simple calculator.",
                        githubFrontEnd:
                            "https://github.com/cloudpunchx/simplecalculator.git",
                        githubBackEnd: "",
                        siteUrl: "https://calculator.cloudpunch.ca/#/",
                    },
                ],
            };
        },
    };
</script>

<style scoped>
    .container {
        padding: 25px;
        text-align: center;
    }

    h3 {
        font-size: 2rem;
        font-family: Georgia, "Times New Roman", Times, serif;
        color: whitesmoke;
    }

    .h3Link {
        color: whitesmoke;
        font-family: Georgia, "Times New Roman", Times, serif;
    }

    .v-card {
        background-color: #f7f4ea;
        height: 100%;
    }

    .titleName {
        font-size: 2rem;
    }

    a {
        font-family: Georgia, "Times New Roman", Times, serif;
        text-decoration: none;
    }

    .description {
        font-family: Georgia, "Times New Roman", Times, serif;
        font-size: 1.2rem;
        color: #7e72af;
    }

    .subHeading {
        color: #7e72af;
        font-size: 1.1rem;
        font-family: Georgia, "Times New Roman", Times, serif;
        font-weight: bold;
    }

    .githubLink {
        font-size: 1.2rem;
        font-family: Georgia, "Times New Roman", Times, serif;
        color: #7e72af;
    }

    .githubLink2 {
        margin-top: -4%;
    }

    .bottomBorder {
        border-bottom: 2px solid #c0b9dd;
    }

    .websiteLink {
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 600px) {
        /* Breakpoint for Tablet */
        h3 {
            font-size: 3rem;
        }
    }

    @media only screen and (min-width: 800px) {
        /* Breakpoint for Desktop */
        .container {
            max-width: 80vw;
        }
    }

    @media only screen and (min-width: 1260px) {
        /* Breakpoint for Desktop */
        .container {
            max-width: 50vw;
        }
    }
</style>
