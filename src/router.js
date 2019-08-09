import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./views/Team.vue'),
      meta: { hideNavigation: true }
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: () => import('./views/Speakers.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('./views/Schedule.vue')
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: () => import('./views/Sessions.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path:'/community-guidelines',
      name:'community-guidelines',
      component: () => import('./views/CommunityGuidelines.vue')
    },
    {
      path:'/sponsors',
      name:'sponsors',
      component: () => import('./views/Sponsors.vue')
    }
  ]
})
