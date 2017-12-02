import Vue from 'vue'
import Router from 'vue-router'
import TheHome from '@/components/TheHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome
    },
    {
      path: '/home',
      redirect: '/'
    }
  ]
})
