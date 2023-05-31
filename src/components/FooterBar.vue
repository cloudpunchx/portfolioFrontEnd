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
    background: #C0B9DD;
    text-align: center;
    width: 100%;
}

.imgContainer{
    margin-top: 10px;
}

img {
    width: 200px;
}
</style>