import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedShares: [{
        imgUrl: 'http://www.tianya999.com/uploads/allimg/130604/2290-130604153503.jpg',
        id: '5655081d-3ca5-4bd5-8cda-f0f787597b56',
        title: 'data-warehouse',
        date: '2017-07-29'
      },
      {
        imgUrl: 'http://www.tianya999.com/uploads/allimg/130604/2290-130604153453.jpg',
        id: '25dc2138-8adf-4ebd-adb1-cde63cb463c1',
        title: 'Implementation',
        date: '2017-07-28'
      },
      {
        imgUrl: 'http://img.tuku.com/upload/picture/2015/01/5nHwAbI.jpg',
        id: '366cb5e6-9842-4d51-9105-ad9049c7050a',
        title: 'platforms Sleek blue',
        date: '2017-07-26'
      },
      {
        imgUrl: 'http://img.tuku.com/upload/picture/2015/01/70uy62Y.jpg',
        id: 'febcada1-bf4b-44f6-92dc-225e705980a1',
        title: 'Croatian Kuna',
        date: '2017-05-13'
      }
    ],
    user: {
      id: 'c4a04818-6589-4cee-a36a-53930763ede5',
      shares: [{
          imgUrl: 'http://www.tianya999.com/uploads/allimg/130604/2290-130604153453.jpg',
          id: '25dc2138-8adf-4ebd-adb1-cde63cb463c1',
          title: 'Implementation',
          date: '2017-07-28'
        },
        {
          imgUrl: 'http://img.tuku.com/upload/picture/2015/01/5nHwAbI.jpg',
          id: '366cb5e6-9842-4d51-9105-ad9049c7050a',
          title: 'platforms Sleek blue',
          date: '2017-07-26'
        }
      ]
    }
  },
  getters: {
    loadedShares(state) {
      return state.loadedShares.sort((prev, cur) => {
        return prev.date > cur.date
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
    }
  },
  mutations: {
    createShare (state, payload) {
      state.loadedShares.push(payload)
    }
  },
  actions: {
    createShare ({ commit }, payload ) {
      const share = {
        title: payload.title,
        desc: payload.desc,
        imgUrl: payload.imgUrl,
        date: payload.date,
        id: 'e02f7bdb-555f-4029-a013-9a3a4efc67d0'
      }
      // firebase
      commit('createShare', share)
    }
  }
})
