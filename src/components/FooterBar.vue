<template>
    <v-footer class="text-center d-flex flex-column">
        <div>
            <p class="link">
                <a class="link" href="https://github.com/cloudpunchx">Github</a> | 
                <a class="link" href="https://www.linkedin.com/in/siobhanbonardi/">LinkedIn</a> | 
                <a class="link" href="mailto:siobhanbonardi@gmail.com">siobhanbonardi@gmail.com</a> |
                © 2023 | Web Design by Siobhan Bonardi 
            </p>
        </div>
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

.link:hover{
    color: #FF7E6B;
    font-size: 16pt;
}

@media (min-width: 1px) {
    img {
        width: 180px;
    }

    .link{
        text-decoration: none;
        color: whitesmoke;
        font-size: 11pt;
        font-family: playfair;
    }
}

@media (min-width: 1000px) {
    img {
        width: 200px;
    }

    .link{
        font-size: 15pt;
    }
}
</style>