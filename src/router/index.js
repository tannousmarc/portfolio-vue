import Vue from 'vue'
import Router from 'vue-router'
import TheHome from '@/components/TheHome'
import TheProjects from '@/components/TheProjects'
import ThePlayground from '@/components/ThePlayground'
import TheContact from '@/components/TheContact'
import The404 from '@/components/The404'

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
      path: '/project/projects',
      redirect: '/projects'
    },
    {
      path: '/project/playground',
      redirect: '/playground'
    },
    {
      path: '/project/contact',
      redirect: '/contact'
    },
    {
      path: '/playground',
      name: 'ThePlayground',
      component: ThePlayground
    },
    {
      path: '/contact',
      name: 'TheContact',
      component: TheContact
    },
    { path: '*',
      component: The404 }
  ],
  mode: 'history'
})
export default router
