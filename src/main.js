// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import Truncate from 'lodash.truncate'
import store from '@/store/store'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


Vue.config.productionTip = false

Vue.filter('truncate', Truncate);

Vue.use(Vuetify, {
  theme: {
    primary: '#607d8b',
    secondary: '#009688',
    accent: '#795548',
    error: '#f44336',
    warning: '#03a9f4',
    info: '#3f51b5',
    success: '#4caf50'
  },
  options: {
    themeVariations: ['primary', 'secondary', 'accent'],
    extra: {
      mainToolbar: {
        color: 'primary',
      },
      sideToolbar: {
      },
      sideNav: 'primary',
      mainNav: 'primary lighten-1',
      bodyBg: 'primary',
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
