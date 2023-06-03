<template>
    <div>
        <v-container class="sectionContainer" fluid>
            <v-row>
                <v-col cols="12" md="6">
                    <div class="imgContainer">
                        <v-img
                        src="../assets/siobhanVeniceCropped.jpg"
                        alt="Siobhan Bonardi"
                        class="profileImg"
                        ></v-img>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="profileContainer">
                        <p class="paragraph"><span class="intro">Hello World!</span> I'm Siobhan Bonardi, a software developer based in Edmonton, Alberta. I have a Full-Stack
                        Development Diploma from Innotech College where I graduated in March 2023.</p>
                        <p class="paragraph"></p>
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
    padding: 100px;
}

.imgContainer {
    background-color: #f7f4ea;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profileImg {
    max-width: 400px;
    max-height: 100%;
    border: 8px solid #ff7e6b;
    border-radius: 50% 50% 0 0;
}

.intro{
    font-family: lobster;
}

.paragraph {
    color: #ff7e6b;
    font-size: 18pt;
    font-family: playfair;
}

/* @media (min-width: 960px) {
    .profileContainer {
        margin-top: 50px;
    }
} */
</style>