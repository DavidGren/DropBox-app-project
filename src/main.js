/* eslint-disable prefer-destructuring */
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';

const fb = require('./firebase.config');

Vue.config.productionTip = false;

let app = '';
fb.auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App),
    });
  }
});
