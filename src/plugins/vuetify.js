import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                background: "#fffceb",
                primary: '#0A0F0D',
                secondary: '#A53860',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
});

export default vuetify;




// documentation
// https://v2.vuetifyjs.com/en/features/theme/#light-and-dark