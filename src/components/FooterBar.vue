<template>
    <v-footer class="text-center d-flex flex-column">
        <div class="imgContainer">
            <img src="../assets/cloudpunchMedia.png" alt="Cloudpunch Media">
        </div>
    </v-footer>
</template>

<script>
    export default {
        name: "FooterBar",
    };
</script>

<style scoped>
.v-footer {
    background: linear-gradient(to top, #C0B9DD, rgba(192, 185, 221, 0));
    text-align: center;
    width: 100%;
    height: 125px;
    padding: 5px;
    margin-top: auto;
}

.imgContainer{
    margin-top: 65px;
}

img {
    width: 200px;
}
</style>