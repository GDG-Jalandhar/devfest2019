import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { text: 'Home', to: '/', icon:'mdi-home'},
      { text: 'Schedule', to: '/schedule', icon: 'mdi-format-float-left'},
      { text: 'Speakers', to: '/speakers', icon:'mdi-account-switch'},
      { text: 'Team', to: '/team', icon:'mdi-account-settings'},
      { text: 'About', to: '/about', icon: 'mdi-note-multiple-outline'},
      // { text: 'Contact', to: '/contact', icon:'mdi-contacts'},
      { text: 'Community Guidelines', to: '/community-guidelines', icon:'mdi-format-align-justify'}
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
