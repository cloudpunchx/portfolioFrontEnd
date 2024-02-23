<template>
    <div>
        <v-card color="background" flat>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="6" class="imgColumn">
                    <div class="photoContainer">
                        <v-img
                            src="../assets/SiobhanVeniceCourtyard.jpg"
                            alt="Personal Photo - Siobhan Bonardi"
                            class="profileImg"
                        ></v-img>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="12" lg="6">
                    <div class="profileContainer">
                        <p>
                            <span class="lobsterFont">Hello World!</span> I'm
                            Siobhan Bonardi, a software developer based in
                            Edmonton, Alberta. I have a Full-Stack Development
                            Diploma from Innotech College where I graduated in
                            March 2023.
                        </p>
                        <p>
                            I've always loved crafting by hand and creating
                            digital designs using Adobe Illustrator, InDesign,
                            and Photoshop. Since starting my full stack journey,
                            I take pride in blending my design skills with
                            technical knowledge to deliver captivating digital
                            experiences. Creating well-rounded and efficient
                            APIs, optimizing database queries, and designing
                            sleek and modern UIs has become my passion.
                        </p>
                        <p>
                            I love traveling- summers in Italy are my favourite!
                            In my free time I'm usually gaming with my husband,
                            watching horror movies, and thrifting fun stuff for
                            my home.
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "AboutMe",
    };
</script>

<style scoped>
    .imgColumn {
        display: flex;
        justify-content: center;
    }
    .profileImg {
        max-width: 300px;
        border: 8px solid #ff7e6b;
        border-radius: 100% 100% 0 0;
    }

    .profileContainer {
        color: #ff7e6b;
        font-size: 15pt;
        font-family: Georgia, "Times New Roman", Times, serif;
        text-align: center;
        padding: 10px;
    }

    .lobsterFont {
        font-family: lobster;
    }

    @media (min-width: 800px) {
        /* Tablet Size */
        .profileImg {
            max-width: 400px;
        }

        .profileContainer {
            text-align: start;
        }
    }

    @media (min-width: 1000px) {
        /* Desktop Size */
        .imgColumn {
            justify-content: flex-end;
            align-self: center;
        }
        .photoContainer {
            padding-right: 50px;
        }
        .profileContainer {
            font-size: 17pt;
            width: 60%;
            padding: 50px;
        }
    }

    @media (min-width: 2000px) {
        /* Large Screens */
        .profileContainer {
            width: 55%;
        }
    }
</style>
