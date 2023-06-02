<template>
    <v-app-bar app color="secondary">
        <v-spacer></v-spacer>
        <v-toolbar-title class="titleName">siobhan bonardi</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text v-for="link in links" :key="link.name" :href="link.url" target="_blank">{{ link.name }}</v-btn>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
    export default {
    name: "NavigationBar",
    data() {
        return {
        links: [
            { name: 'Github', url: 'https://github.com/cloudpunchx' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/siobhanbonardi/' },
        ],
        };
    },
};
</script>

<style scoped>
.titleName{
    font-family: lobster;
    font-size: 16pt;
    color: whitesmoke;
}

.v-btn{
    color: whitesmoke;
}

.v-btn:hover{
    color: #ffd819;
}
</style>