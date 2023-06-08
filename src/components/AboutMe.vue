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
                        <p class="paragraph">Since starting my web development journey, Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus sit sapiente quia at adipisci exercitationem placeat ut, culpa animi.
                        </p>
                        <p class="paragraph">I absolutely <span class="intro">love</span> to travel and try new things. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum commodi aliquid totam aspernatur consequuntur.</p>
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
.sectionContainer{
    padding: 50px;
}

.imgContainer {
    background-color: #f7f4ea;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profileImg {
    max-width: 450px;
    max-height: 100%;
    border: 8px solid #ff7e6b;
    border-radius: 100% 100% 0 0;
}

.intro{
    font-family: lobster;
}

.profileContainer{
    width: 80%;
    padding: 50px;
}

.paragraph {
    color: #ff7e6b;
    font-size: 18pt;
    font-family: playfair;
}

/* @media (min-width: 1800px) {

} */
</style>