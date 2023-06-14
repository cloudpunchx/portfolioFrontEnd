<!-- need to finish bio -->

<template>
    <div>
        <v-container class="sectionContainer" fluid>
            <v-row>
                <v-col cols="12" md="6">
                    <div class="imgContainer">
                        <v-img
                        src="../assets/SiobhanVeniceCourtyard.jpg"
                        alt="Siobhan Bonardi"
                        class="profileImg"
                        ></v-img>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="profileContainer">
                        <p class="paragraph"><span class="intro">Hello World!</span> I'm Siobhan Bonardi, a software developer based in Edmonton, Alberta. I have a Full-Stack
                        Development Diploma from Innotech College where I graduated in March 2023.</p>
                        <p class="paragraph">I love creating logos using Cricut Design Space, as well as exploring my creativity with Adobe Illustrator, Adobe InDesign, and GIMP. Since I started diving into full stack development,
                            it's been fun to actually bring my ideas to life starting from scratch.
                        </p>
                        <p class="paragraph">I absolutely <span class="intro">love</span> to travel.</p>
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
    display: flex;
    justify-content: center;
    align-items: center;
}

.intro{
    font-family: lobster;
}

@media (min-width: 1px) {

    .sectionContainer{
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
        font-size: 17pt;
        font-family: playfair;
    }

    .profileContainer{
        padding: 10px;
        text-align: center;
    }
}

@media (min-width: 500px) {

}

@media (min-width: 800px) {
    .sectionContainer{
        padding: 50px;
    }
    .profileImg {
        max-width: 450px;
    }

    .paragraph {
        font-size: 18pt;
    }

    .profileContainer{
        width: 80%;
        padding: 50px;
    }
}
</style>