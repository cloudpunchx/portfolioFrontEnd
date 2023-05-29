<template>
    <v-app-bar app flat color="background">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <v-spacer></v-spacer>
        <v-toolbar-title class="titleName">there are other worlds than these</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="secondary" v-for="link in links" :key="link.name" :href="link.url" target="_blank">{{ link.name }}</v-btn>
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
            { name: 'Website 2', url: 'https://www.example2.com' },
        ],
        };
    },
};
</script>

<style scoped>
    .titleName{
        font-family: lobster;
        font-size: 16pt;
        color: #A53860;
    }
</style>