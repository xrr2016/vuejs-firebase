import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Shares from '@/view/Share/Shares.vue'
import Share from '@/view/Share/Share.vue'
import CreateShare from '@/view/Share/CreateShare.vue'
import Profile from '@/pages/User/Profile.vue'
import SignUp from '@/pages/User/SignUp.vue'
import Login from '@/pages/User/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/share/:id',
      name: 'Share',
      props: true,
      component: Share
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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
