import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedShares: [{
        imgUrl: 'http://www.tianya999.com/uploads/allimg/130604/2290-130604153503.jpg',
        id: '5655081d-3ca5-4bd5-8cda-f0f787597b56',
        title: 'data-warehouse',
        date: '2017-07-29',
        desc: 'Personal Loan Accountsy stem digital Agent virtual'
      },
      {
        imgUrl: 'http://www.tianya999.com/uploads/allimg/130604/2290-130604153453.jpg',
        id: '25dc2138-8adf-4ebd-adb1-cde63cb463c1',
        title: 'Implementation',
        date: '2017-07-28',
        desc: 'Personal Loan Accountsy stem digital Agent virtual'
      },
      {
        imgUrl: 'http://img.tuku.com/upload/picture/2015/01/5nHwAbI.jpg',
        id: '366cb5e6-9842-4d51-9105-ad9049c7050a',
        title: 'platforms Sleek blue',
        date: '2017-07-26',
        desc: 'Personal Loan Accountsy stem digital Agent virtual'
      },
      {
        imgUrl: 'http://img.tuku.com/upload/picture/2015/01/70uy62Y.jpg',
        id: 'febcada1-bf4b-44f6-92dc-225e705980a1',
        title: 'Croatian Kuna',
        date: '2017-05-13',
        desc: 'Personal Loan Accountsy stem digital Agent virtual'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  getters: {
    loadedShares(state) {
      return state.loadedShares.sort((prev, cur) => {
        return prev.date < cur.date
      })
    },
    featureShares(state, getters) {
      return getters.loadedShares.slice(0, 5)
    },
    loadedShare(state) {
      return (shareId) => {
       return state.loadedShares.find(share => {
          return share.id === shareId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  },
  mutations: {
    createShare (state, payload) {
      state.loadedShares.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    createShare ({ commit }, payload ) {
      const share = {
        title: payload.title,
        desc: payload.desc,
        imgUrl: payload.imgUrl,
        date: payload.date
      }
      // firebase
      firebase.database().ref('shares').push(share)
        .then(data => {
          console.log(data)
          commit('createShare', share)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 用户注册
    signUserUp ({ commit }, payload) {
      commit('setLoading', true)
      firebase.auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
            commit('setLoading', false)
            const newUser = { id: user.uid, shares: [] }
            commit('setUser', newUser)
        })
        .catch(err => { 
          commit('setLoading', false)
          commit('setError', err)
          console.log(err) 
        })
    },
    // 用户登录
    userLogin ({ commit }, payload) {
      commit('setLoading', true)
      firebase.auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
            commit('setLoading', false)
            const newUser = { id: user.uid, shares: [] }
            commit('setUser', newUser)
        })
        .catch(err => { 
          commit('setLoading', false)
          commit('setError', err)
          console.log(err)
        })
    },
    // 清空错误
    clearError ({ commit }) {
      commit('clearError')
    }
  }
})
