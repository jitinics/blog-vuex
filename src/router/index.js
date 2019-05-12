import Vue from 'vue'
import Router from 'vue-router'

import login from '@/views/login/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'home',
      component: login
    }
  ]
})