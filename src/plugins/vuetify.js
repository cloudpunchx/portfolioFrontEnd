import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                background: "#F7F4EA",
                primary: '#FF7E6B',
                secondary: '#C0B9DD',
                accent: '#FFFBFE',
                error: '#b71c1c',
                yellow: '#ffd819',
            },
        },
    },
});

export default vuetify;




// documentation
// https://v2.vuetifyjs.com/en/features/theme/#light-and-dark