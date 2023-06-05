<template>
    <div>
        <!-- <div class="starContainer">
            <v-img
            src="../assets/stars1.png"
            alt="Star"
            class="stars1"
            ></v-img>
            <v-img
            src="../assets/stars2.png"
            alt="Star"
            class="stars2"
            ></v-img>
        </div> -->
        <v-container class="sectionContainer" fluid>
            <v-row>
                <v-col cols="12" md="6">
                    <div class="imgContainer">
                        <v-img
                        src="../assets/rainbowArch.png"
                        alt="Rainbow Arch"
                        class="rainbowArch"
                        ></v-img>
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
                        <p class="paragraph">I love to travel and try new things.</p>
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

.archContainer{
    position: relative;
    height: 100%;
}

.rainbowArch{
    width: 500px;
    height: 612px;
    position: absolute;
    top: 58.5%;
}

/* .starContainer{
    position: relative;
    height: 100%;
    animation: twinklingAnimation 4s infinite;
}

@keyframes twinklingAnimation {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}

.stars1{
    width: 100px;
    position: absolute;
    top: -440%;
    left: 18%;
    transform: translate(-100%, 440%);
    max-width: 100%;
}

.stars2{
    width: 100px;
    position: absolute;
    top: -240%;
    left: 42%;
    transform: translate(-100%, 240%);
    max-width: 100%;
} */

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

/* @media (min-width: 1800px) {

} */
</style>