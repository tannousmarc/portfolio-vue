import Vue from 'vue'
import Router from 'vue-router'
import TheHome from '@/components/TheHome'
import TheProjects from '@/components/TheProjects'

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
    }
  ],
  mode: 'history'
})
export default router
