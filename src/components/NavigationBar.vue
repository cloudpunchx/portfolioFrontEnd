<template>
    <div>
        <v-navigation-drawer
        class="navDrawer"
        v-model="drawer"
        absolute
        temporary
        left
        :style="{ position: drawer ? 'fixed' : 'absolute' }"
        >
            <v-list
            class="listItems"
            nav 
            dense>
                <v-list-item-group>
                    <v-list-item>
                        <v-list-item-icon>
                            <img src="../assets/github-mark-white.png" alt="github logo">
                        </v-list-item-icon>
                        <v-list-item-title class="listItem" 
                        style="font-size: 17pt; font-family: playfair; "
                        >GitHub</v-list-item-title>
                    </v-list-item>
        
                    <v-list-item>
                        <v-list-item-icon>
                            <img src="../assets/In-White-72.png" alt="LinkedIn logo">
                        </v-list-item-icon>
                        <v-list-item-title class="listItem" 
                        style="font-size: 17pt; font-family: playfair;"
                        >LinkedIn</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        
        <v-app-bar app color="secondary" >
            <v-app-bar-nav-icon v-show="isMobile" @click="toggleDrawer"></v-app-bar-nav-icon>
    
            <v-spacer></v-spacer>
            <v-toolbar-title v-show="!isMobile" class="titleName">siobhan bonardi</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-show="!isMobile" text v-for="link in links" :key="link.name" :href="link.url" target="_blank">{{ link.name }}</v-btn>
            <v-spacer></v-spacer>
        </v-app-bar>
    </div>
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
                drawer: false,
            };
        },
        computed: {
            isMobile() {
                return this.$vuetify.breakpoint.smAndDown;
            },
        },
        methods: {
            toggleDrawer() {
                this.drawer = !this.drawer;
            },
        },
    };
</script>
    
<style scoped>

.navDrawer{
    background-color: #FF7E6B;
}
.listItem{
    color: whitesmoke;
}

.listItem:hover{
    color: #ffd819;
}
.titleName {
    font-family: lobster;
    font-size: 16pt;
    color: whitesmoke;
}
    
.v-btn {
    color: whitesmoke;
}
    
.v-btn:hover {
    color: #ffd819;
}
    
@media only screen and (min-width: 1px) {
    
}
</style>
