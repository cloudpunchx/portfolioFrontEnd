<template>
    <div>
        <!-- Nav Drawer for Tablet/Mobile (smaller screens) -->
        <v-navigation-drawer
            class="navDrawer"
            v-model="drawer"
            absolute
            temporary
            left
            :style="{position: drawer ? 'fixed' : 'absolute'}"
        >
            <v-list class="listItems" nav dense>
                <v-list-item-group>
                    <v-list-item>
                        <v-list-item-icon>
                            <img
                                src="../assets/github-mark-white.png"
                                alt="github logo"
                            />
                        </v-list-item-icon>
                        <a
                            class="listItem"
                            href="https://github.com/cloudpunchx"
                            target="blank"
                            >GitHub</a
                        >
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <img
                                src="../assets/In-White-72.png"
                                alt="LinkedIn logo"
                            />
                        </v-list-item-icon>
                        <a
                            class="listItem"
                            href="https://www.linkedin.com/in/siobhanbonardi/"
                            target="blank"
                            >LinkedIn</a
                        >
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <!-- Nav bar -->
        <v-app-bar app color="secondary">
            <!-- Only show Icon when it isMobile -->
            <v-app-bar-nav-icon
                v-show="isMobile"
                @click="toggleDrawer"
            ></v-app-bar-nav-icon>

            <v-spacer></v-spacer>
            <v-toolbar-title v-show="!isMobile" class="titleName"
                >siobhan bonardi</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-btn
                v-show="!isMobile"
                text
                v-for="link in links"
                :key="link.name"
                :href="link.url"
                target="_blank"
                >{{ link.name }}</v-btn
            >
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
                    {name: "Github", url: "https://github.com/cloudpunchx"},
                    {
                        name: "LinkedIn",
                        url: "https://www.linkedin.com/in/siobhanbonardi/",
                    },
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
    .navDrawer {
        background-color: #ff7e6b;
    }
    .listItem {
        color: whitesmoke;
        font-size: 17pt;
        font-family: Georgia, "Times New Roman", Times, serif;
        text-decoration: none;
    }
    .listItem:visited {
        color: whitesmoke;
        text-decoration: none;
    }
    .listItem:hover {
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
</style>
