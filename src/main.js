import Vue from 'vue'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import App from './App'
import router from './router'
import { store } from './store'
import dateFilter from './filters/date'
import AlertComponent from './components/Alert'
import DialogComponent from './components/EditDialog'
import EditDateDialogComponent from './components/EditDateDialog'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.component('app-alert', AlertComponent)
Vue.component('app-dialog', DialogComponent)
Vue.component('app-edit-date-dialog', EditDateDialogComponent)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      projectId: 'share-f0f61',
      apiKey: 'AIzaSyCOo6SINl-cltqm1fFif8KPGU4aYAdcb8I',
      authDomain: 'share-f0f61.firebaseapp.com',
      databaseURL: 'https://share-f0f61.firebaseio.com',
      storageBucket: 'gs://share-f0f61.appspot.com/'
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLogin', user)
        this.$store.dispatch('loadShares')
      }
    })
  }
})
