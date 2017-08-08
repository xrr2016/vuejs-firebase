import Vue from 'vue'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import App from './App'
import router from './router'
import {
  store
} from './store'
import dateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', dateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCOo6SINl-cltqm1fFif8KPGU4aYAdcb8I',
      authDomain: 'share-f0f61.firebaseapp.com',
      databaseURL: 'https://share-f0f61.firebaseio.com',
      projectId: 'share-f0f61',
      storageBucket: 'share-f0f61.appspot.com'
    })
  }
})
