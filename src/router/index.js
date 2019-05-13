import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import Page from '@/pages/Home/page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    }
  ]
})
