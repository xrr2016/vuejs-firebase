import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    loadedShares: [],
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
    setLoadedShares (state, payload) {
      state.loadedShares = state.loadedShares.concat(payload)
    },
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
    // 加载全部数据
    loadShares ({ commit }) {
      commit('setLoading', true)
      firebase.database().ref('shares').once('value')
        .then(data => {
          const shares = []  
          const obj = data.val()
          for (let key in obj) {
            shares.push({
              id: key,
              title: obj[key].title,
              desc: obj[key].desc,
              imgUrl: obj[key].imgUrl,
              date: obj[key].date,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedShares', shares)
          commit('setLoading', false)
        })
        .catch(err => {
          console.log(err)
          commit('setLoading', true)
        })
    },
    // 创建一个
    createShare ({ commit, state }, payload ) {
      const share = {
        title: payload.title,
        desc: payload.desc,
        // imgUrl: payload.imgUrl,
        image: payload.image,
        date: payload.date,
        creatorId: state.user.id
      }
      let imgUrl, key
      // firebase
      firebase.database().ref('shares').push(share)
        .then(data => {
          // const { key } = data
          key = data.key
          return key
        })
        .then (key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('shares/'+ key + '.' + ext).put(payload.image)
        })
        .then (file => {
          console.log(file)
          imgUrl = file.metaData.downloadURLs[0]
          return firebase.database().ref('shares').child(key).update({
            imgUrl: imgUrl
          })
        })
        .then(() => {
          commit('createShare', {
            ...share,
            imgUrl: imgUrl, 
            id: key
          })
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
    // 用户自动登录
    autoLogin ({ commit }, payload) {
      commit('setUser', { 
        id: payload.uid,
        createdShares: []
       })
    },
    // 用户退出登录
    userLogout ({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    // 清空错误
    clearError ({ commit }) {
      commit('clearError')
    }
  }
})
