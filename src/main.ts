import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-material-design-icons/styles.css'

Vue.config.productionTip = false

store.dispatch.initialize() // setup the window state in store before starting the app

new Vue({
  router,
  store: store.original, // Inject the classic Vuex store. (instead of direct-vuex typed wrapper)
  render: h => h(App)
}).$mount('#app')
