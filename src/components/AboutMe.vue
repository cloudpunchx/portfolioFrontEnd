<template>
    <div>
        <v-container class="sectionContainer" fluid>
            <v-row dense>
                <v-col cols="12" sm="12" lg="6" class="imgColumn">
                    <div class="imgContainer">
                        <v-img
                            src="../assets/SiobhanVeniceCourtyard.jpg"
                            alt="Siobhan Bonardi"
                            class="profileImg"
                        ></v-img>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" lg="6">
                    <div class="profileContainer">
                        <p class="paragraph">
                            <span class="intro">Hello World!</span> I'm Siobhan
                            Bonardi, a software developer based in Edmonton,
                            Alberta. I have a Full-Stack Development Diploma
                            from Innotech College where I graduated in March
                            2023.
                        </p>
                        <p class="paragraph">
                            I've always loved crafting by hand and creating
                            digital designs using Adobe Illustrator, InDesign,
                            and Photoshop. Since starting my full stack journey,
                            I take pride in blending my design skills with
                            technical knowledge to deliver captivating digital
                            experiences. Creating well-rounded and efficient
                            APIs, optimizing database queries, and designing
                            sleek and modern UIs has become my passion.
                        </p>
                        <p class="paragraph">
                            I love traveling- summers in Italy are my favourite!
                            In my free time I'm usually gaming with my husband,
                            watching horror movies, and thrifting fun stuff for
                            my home.
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "AboutMe",
    };
</script>

<style scoped>
    .imgContainer {
        background-color: #f7f4ea;
    }

    .intro {
        font-family: lobster;
    }

    @media (min-width: 1px) {
        .imgColumn {
            display: flex;
            justify-content: center;
        }
        .sectionContainer {
            padding: 25px;
        }
        .profileImg {
            max-width: 300px;
            max-height: 100%;
            border: 8px solid #ff7e6b;
            border-radius: 100% 100% 0 0;
        }

        .paragraph {
            color: #ff7e6b;
            font-size: 15pt;
            font-family: Georgia, "Times New Roman", Times, serif;
        }

        .profileContainer {
            padding: 10px;
            text-align: center;
        }
    }

    @media (min-width: 800px) {
        .sectionContainer {
            padding: 50px;
        }
        .profileImg {
            max-width: 400px;
        }

        .profileContainer {
            text-align: start;
        }

        .paragraph {
            font-size: 17pt;
        }
    }

    @media (min-width: 1000px) {
        .imgColumn {
            display: flex;
            justify-content: flex-end;
        }
        .profileImg {
            max-width: 450px;
        }
        .imgContainer {
            padding-right: 50px;
        }
        .profileContainer {
            width: 80%;
            padding: 50px;
        }
    }

    @media (min-width: 2000px) {
        .imgContainer {
            padding-right: 50px;
        }
        .profileContainer {
            width: 55%;
            padding: 50px;
        }
    }
</style>
