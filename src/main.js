import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import dateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', dateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
