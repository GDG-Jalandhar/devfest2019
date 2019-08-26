<template>

    <v-app-bar
        fixed
        app
        shrink-on-scroll
        absolute
      >
        <v-app-bar-nav-icon @click="toggleDrawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <!-- <v-toolbar-title class="google-font pa-0 ma-0">{{title}}</v-toolbar-title> -->

        <v-spacer></v-spacer>


        <share/>

        <v-btn icon v-on:click="shareMe" class="hidden-sm-and-up">
            <v-icon>mdi-share-variant</v-icon>
        </v-btn>
    </v-app-bar> 
</template>


<script>
import share from '@/components/common/share'
import {
    mapGetters,
    mapMutations
  } from 'vuex'
export default {
    props:{
        title:String
    },
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
            // console.log('Thanks for sharing')
          }).catch(e=>{
            // console.log(e)
          })
        }
      }
    }
}
</script>