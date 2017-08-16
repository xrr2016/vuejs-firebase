import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Shares from '@/components/Share/Shares.vue'
import Share from '@/components/Share/Share.vue'
import CreateShare from '@/components/Share/CreateShare.vue'
import Profile from '@/components/User/Profile.vue'
import SignUp from '@/components/User/SignUp.vue'
import Login from '@/components/User/Login.vue'

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
