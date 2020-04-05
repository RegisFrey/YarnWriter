import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-material-design-icons/styles.css'

Vue.config.productionTip = false

new Vue({
  router,
  store: store.original, // Inject the classic Vuex store. (instead of direct-vuex typed wrapper)
  render: h => h(App)
}).$mount('#app')
