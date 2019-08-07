import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { text: 'Home', to: '/', icon:'mdi-home', visible:true},
      { text: 'Schedule', to: '/schedule', icon: 'mdi-format-float-left',visible:true},
      { text: 'Sessions', to: '/sessions', icon: 'mdi-format-float-left',visible:true},
      { text: 'Speakers', to: '/speakers', icon:'mdi-account-switch',visible:true},
      { text: 'Team', to: '/team', icon:'mdi-account-settings',visible:true},
      { text: 'About', to: '/about', icon: 'mdi-note-multiple-outline',visible:true},
      // { text: 'Contact', to: '/contact', icon:'mdi-contacts'},
      { text: 'Community Guidelines', to: '/community-guidelines', icon:'mdi-format-align-justify',visible:false}
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
