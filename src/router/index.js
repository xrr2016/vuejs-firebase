import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Shares from '@/components/Share/Shares.vue'
import CreateShare from '@/components/Share/CreateShare.vue'
import Profile from '@/components/User/Profile.vue'
import SignIn from '@/components/User/SignIn.vue'
import SignUp from '@/components/User/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shares',
      name: 'Shares',
      component: Shares
    },
    {
      path: '/create_share',
      name: 'CreateShare',
      component: CreateShare
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
