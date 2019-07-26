<template>
  <v-app-bar app
    color="white"
    elevate-on-scroll
    scroll-off-screen
  >
    <v-app-bar-nav-icon @click="toggleDrawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

    <v-toolbar-title class="google-font">DevFest Punjab 2019</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        text
        class="ml-0 google-font hidden-sm-and-down mr-2"
        style="text-transform: capitalize;" 
        @click="onClick($event, link)"
      >
        {{ link.text }}
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

     

    <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          @click="() => {}"
        >
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import {
    mapGetters,
    mapMutations
  } from 'vuex'
export default {
    computed: {
      ...mapGetters(['links'])
    },
    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to || !item.href) return
        this.$vuetify.goTo(item.href)
      }
    }
}
</script>
