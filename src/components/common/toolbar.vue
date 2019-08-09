<template>
  <v-app-bar app
    color="white"
    elevate-on-scroll
    scroll-off-screen
  >
    <v-app-bar-nav-icon @click="toggleDrawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

    <v-toolbar-title class="google-font pa-0">DevFest Punjab 2019</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        text
        class="ml-0 google-font hidden-sm-and-down mr-2"
        style="text-transform: capitalize;" 
        @click="onClick($event, link)"
        v-if="link.visible"
      >
        {{ link.text }}
    </v-btn>

    <share/>

    <v-btn icon v-on:click="shareMe" class="hidden-sm-and-up">
      <v-icon>mdi-share-variant</v-icon>
    </v-btn>

    <!-- <v-menu
      left
      bottom
       v-if="$vuetify.breakpoint.smAndUp"
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
    </v-menu> -->
  </v-app-bar>
</template>

<script>
import share from '@/components/common/share'
import {
    mapGetters,
    mapMutations
  } from 'vuex'
export default {
    components:{
      share
    },
    computed: {
      ...mapGetters(['links'])
    },
    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to || !item.href) return
        this.$vuetify.goTo(item.href)
      },
      shareMe(e){
        if(navigator.share){
          navigator.share({
            title:"DevFest Punjab 2019",
            url:''
          }).then(()=>{
            console.log('Thanks for shareing')
          }).catch(e=>{
            console.log(e)
          })
        }
      }
    }
}
</script>
