<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    width="300"
    temporary
  >
    
    <v-flex xs12 class="pa-0">
      <v-img
        height="170"
        :src="require('@/assets/img/main.webp')"
        :lazy-src="require('@/assets/img/main.webp')"
      ></v-img>
      <!-- <p class="google-font mt-2" style="font-size:130%">DevFest Punjab</p> -->
    </v-flex>

    <v-list dense nav shaped>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :href="link.href"
        @click="onClick($event, link)"
        class="google-font"
      >
        <v-list-item-action>
          <v-icon>{{link.icon}}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title v-text="link.text" />
        </v-list-item-content>
        
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// import ChapterDetails from '@/assets/data/chapterDetails.json'
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    name: '',
    data() {
      return {
        
      }
    },
    computed: {
      ...mapGetters(['links']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      }
    },
    methods: {
      ...mapMutations(['setDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.setDrawer(false)
          return
        }
        if (item.to || !item.href) return
        this.$vuetify.goTo(item.href)
        this.setDrawer(false)
      }
    }
  }
</script>
