<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12" md="6">
                    <div class="imgContainer">
                        <v-img
                        src="../assets/siobhanVenice.jpg"
                        alt="Siobhan Bonardi"
                        class="profileImg"
                        ></v-img>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="profileContainer">
                        <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam autem minus laboriosam ipsa, magnam fugit, ullam commodi quasi ratione non assumenda nam fuga vero doloremque? Illum sint blanditiis velit quos.</p>
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

.profileImg {
    width: 300px;
    border: 5px solid #ff7e6b;
    border-radius: 50% 50% 0 0;
}

.paragraph {
    width: 100%;
}

@media (min-width: 960px) {
/* Adjust the breakpoint as needed */
    .profileContainer {
        margin-top: 50px;
    }
}
</style>