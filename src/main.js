import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {store} from './plugins/vuex'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSession from 'vue-session'
import './registerServiceWorker'

Vue.use(VueSession)
Vue.use(VueAxios, axios)

axios.defaults.baseURL = "http://localhost:3000";

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
