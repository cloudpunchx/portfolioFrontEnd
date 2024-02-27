import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                // cream
                background: "#F7F4EA",

                // soft coral
                primary: "#ff7e6b",

                // soft lavender
                secondary: "#C0B9DD",

                // darker purple (primarily text)
                accent: "#7e72af",

                error: "#b71c1c",
                yellow: "#ffd819",
            },
        },
    },
});

export default vuetify;
