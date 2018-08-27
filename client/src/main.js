import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
const axiosConfig = {
  baseURL: 'http://localhost:8000',
  timeout: 30000
}
// Setting up Axios on Vue Instance, for use via this.$axios
Vue.prototype.$axios = axios.create(axiosConfig)
// Default vars set up from localStorage (ie, user has come back)
Vue.prototype.$axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('userToken')}`
Vue.prototype.$axios.defaults.headers.common['Access-Token'] = localStorage.getItem('userToken')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
