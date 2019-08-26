<template>
    <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on }">
          <div v-on="on" style="cursor: pointer;" class="d-none d-sm-block">
              <v-avatar size="100">
                    <v-img
                    :src="getImgUrl(data.vdata.image)"
                    :lazy-src="getImgUrl(data.vdata.image)">

                        <v-layout
                            slot="placeholder"
                            fill-height
                            align-center
                            justify-center
                            ma-0
                        >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-layout>
                    
                    </v-img>
                </v-avatar>
                <p class="mt-3 mb-0 google-font" style="font-size:120%">{{data.vdata.name}}</p>
                <p class="mt-1 mb-0 google-font" style="font-size:80%">{{data.vdata.designation}}</p>
                <socialMediaDetails :data="{vdata:data.vdata.social}"/>
          </div>
          <div v-on="on" style="cursor: pointer;" class="hidden-sm-and-up px-3 my-0">
              <v-layout row wrap class="px-0 ma-0" style="border:1px solid #EEEEEE;border-radius:8px">
                <v-flex xs4 class="pa-0">
                  <v-img
                    style="height:100%"
                    :src="getImgUrl(data.vdata.image)"
                    :lazy-src="getImgUrl(data.vdata.image)">
                        <v-layout
                            slot="placeholder"
                            fill-height
                            align-center
                            justify-center
                            coverd
                            class="grey"
                            ma-0
                        >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-layout>
                    
                    </v-img>
                </v-flex>
                <v-flex xs8 class="pa-2">
                  <p class="mt-3 mb-0 google-font" style="font-size:120%">{{data.vdata.name}}</p>
                  <p class="mt-1 mb-0 google-font" style="font-size:80%">{{data.vdata.designation}}</p>
                  <socialMediaDetails :data="{vdata:data.vdata.social}"/>
                </v-flex>
              </v-layout>
          </div>
      </template>

      <v-card color="">
        <v-card-title
          class="px-5 google-font"
          primary-title
        >
         {{data.vdata.name}} 
        </v-card-title>

        <v-card-text class="pa-5">
            <p class="google-font">{{data.vdata.designation}}</p>
            <p class="google-font">{{data.vdata.bio}}</p>

            <socialMediaDetails :data="{vdata:data.vdata.social}"/>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import socialMediaDetails from '@/components/common/socialMedia'
  export default {
    components:{
        socialMediaDetails
    },
    props:{
      data:{
        vdata:[]
      }
    },
    data () {
      return {
        dialog: false,
        tempData:[],
        tagsData:[]
      }
    },
    mounted(){
     
    },
    methods:{
      getImgUrl(pic) {
          if(pic.length>0){
              return require('@/assets/img/team/'+pic)
          }else{
              return require('@/assets/img/common/avatar.png')
          }
      },
      getCharString(data){
          var splitArr = data.split(" ")
          if(splitArr.length>1){
              return (splitArr[0].substring(0,1)+''+splitArr[1].substring(0,1)).toUpperCase()
          }
          else{
              return (splitArr[0].substring(0,1)).toUpperCase()
          }
      },
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        }
    }
  }
</script>