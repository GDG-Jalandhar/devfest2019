import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const  router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    { path: '*', redirect: '/' },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title:'Home | DevFest Punjab 2019',
        color:'white'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        title:'Home | DevFest Punjab 2019',
        color:'white'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta:{
        title:'About | DevFest Punjab 2019',
        color:'green'
      }
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./views/Team.vue'),
      meta: { 
        title:"Team | DevFest Punjab 2019",
        hideNavigation: true,
        color:'yellow'
      }
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: () => import('./views/Speakers.vue'),
      meta:{
        title:'Speakers | DevFest Punjab 2019',
        color:'blue'
      }
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('./views/Schedule.vue'),
      meta:{
        title:'Schedule | DevFest Punjab 2019',
        color:'red'
      }
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: () => import('./views/Sessions.vue'),
      meta:{
        title:'Sessions | DevFest Punjab 2019',
        color:'indigo'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
      meta:{
        title:'Contact | DevFest Punjab 2019',
        color:'red'
      }
    },
    {
      path:'/community-guidelines',
      name:'community-guidelines',
      component: () => import('./views/CommunityGuidelines.vue'),
      meta:{
        title:'Community Guidelines | DevFest Punjab 2019',
        color:'red'
      }
    },
    {
      path:'/sponsors',
      name:'sponsors',
      component: () => import('./views/Sponsors.vue'),
      meta:{
        title:'Sponsors | DevFest Punjab 2019',
        color:'red'
      }
    }
  ],
})

router.beforeEach((to, from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

export default router
