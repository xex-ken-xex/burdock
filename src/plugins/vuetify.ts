import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: colors.blue.darken1, // #E53935
        secondary: colors.blue.lighten4, // #FFCDD2
        accent: colors.red.base, // #3F51B5
      },
    },
  },
});

