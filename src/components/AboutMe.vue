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
                        <p class="paragraph">I've always loved exploring my creative side through various design tools such as Cricut Design Space, Adobe Illustrator, Adobe InDesign, and GIMP. 
                            Since venturing into the world of full stack development, it's been so fun bringing my ideas to life.
                            Creating well-rounded and efficient APIs, optimizing database queries, and designing sleek and modern UIs have become my passion. 
                            I take pride in blending my design skills with technical expertise to deliver captivating digital experiences.
                        </p>
                        <p class="paragraph">In my free time I love gaming with my husband, watching horror movies, and thrift shopping. And I absolutely <span class="intro">love</span> to travel.
                            
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
        font-size: 17pt;
    }

    .profileContainer{
        width: 80%;
        padding: 50px;
        text-align: start;
    }
}
</style>