import Vue from 'vue';
import Electron from 'vue-electron';
import Router from 'vue-router';
import SvgIcon from 'vue-svgicon';

import App from './App';
import routes from './routes';

Vue.use(SvgIcon);
Vue.use(Electron);
Vue.use(Router);
Vue.config.debug = true;

const router = new Router({
  scrollBehavior: () => ({
    y: 0,
  }),
  routes,
});

/* eslint-disable no-new */
new Vue({
  router,
  ...App,
}).$mount('#app');
