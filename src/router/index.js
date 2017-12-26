import Vue from 'vue'
import Router from 'vue-router'
import TheHome from '@/components/TheHome'
import TheProjects from '@/components/TheProjects'
import ThePlayground from '@/components/ThePlayground'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome
    },
    {
      path: '/projects',
      name: 'TheProjects',
      component: TheProjects
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/project/home',
      redirect: '/'
    },
    {
      path: '/playground',
      name: 'ThePlayground',
      component: ThePlayground
    }
  ],
  mode: 'history'
})
export default router
