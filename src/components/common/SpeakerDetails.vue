<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      hide-on-leave
      width="700"
    >
      <template v-slot:activator="{ on }">
        <div v-on="on" style="cursor: pointer;">
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
          <p class="mt-3 mb-0 google-font" style="font-size:110%">{{data.vdata.name}}</p>
          <p class="mt-1 mb-0 google-font" style="font-size:80%">{{data.vdata.company.name}}</p>
          <socialMediaDetails :data="{vdata:data.vdata.social}"/>
        </div>
      </template>

      <v-card color="" >
        <v-card-title
          class="px-5 py-5 grey lighten-4 google-font"
          primary-title
          :style="{'background-image':'url('+require('@/assets/img/svg/footer.svg')+')'}"
          style="background-position:right top"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;
        </v-card-title>

        <v-card-text class="px-5">
          <v-layout row wrap class="my-3">
            <v-flex xs12 md4 class="text-center pa-2">
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
            <p class="my-0 mt-3" style="font-size:130%;color:#424242">{{data.vdata.name}}</p>
            <p class="my-0" style="font-size:100%">{{data.vdata.company.name}}</p>

            <!-- <p class="my-0 google-font" style="font-size:120%"><b>Social Info</b></p> -->
            <socialMediaDetails :data="{vdata:data.vdata.social}"/>
            </v-flex>

            <v-flex xs12 md8 class="pa-2">
              <p class="google-font my-0" style="font-size:110%;color:#424242">{{data.vdata.city}}, {{data.vdata.country}}</p>
              <p class="google-font my-0" style="font-size:110%">{{data.vdata.designation}}</p>
              <p class="google-font my-0" v-if="data.vdata.company.url" style="font-size:110%"><a :href="data.vdata.company.url" target="_blank">{{data.vdata.company.name}}</a></p>
              <p class="google-font my-0" v-else>{{data.vdata.company.name}}</p>

              <p class="google-font my-4" style="font-size:110%">
                {{data.vdata.bio}}
              </p>
            </v-flex>
          </v-layout>
          
          
          
          <p class="my-0 google-font mt-2" v-if="SessionsData.length>0" style="font-size:120%">
            <b>Sessions:</b>
          </p>
       
          <v-flex xs12 md6 v-for="(item, index) in SessionsData" :key="index">
            <v-list two-line subheader class="pa-0 ma-0">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-avatar color="grey lighten-2" >
                            <span class="google-font" style="width:100vh">{{getCharString(item.title)}}</span>
                        </v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="google-font" style="color:#424242">{{ item.title }}</v-list-item-title>
                        <v-list-item-subtitle class="google-font">{{ item.place}} 
                          <br>
                        <v-chip :color="item.tag.color" label outlined class="mt-1 mb-0" x-small>{{item.tag.name}}</v-chip></v-list-item-subtitle>
                    </v-list-item-content>

                    <!-- <v-list-item-action>
                       <v-btn small text icon color="grey darken-1">
                        <v-icon >mdi-information-outline</v-icon>
                      </v-btn>
                    </v-list-item-action> -->
                    
                </v-list-item>
            </v-list>
          </v-flex>
         

   

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
  </div>
</template>

<script>
import socialMediaDetails from '@/components/common/socialMedia'
import SessionDeails from '@/assets/data/sessions.json'
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
        SessionDeails:SessionDeails,
        SessionsData:[],
        tempData:[]
      }
    },
    mounted(){
      this.SessionDeails.map(res=>{
        res.speakers.map(d=>{
          if(d== this.data.vdata.id){
            this.SessionsData.push(res)
          }
          
        })
      })
    },
    methods:{
      getImgUrl(pic) {
          if(pic.length>0){
              return require('@/assets/img/speakers/'+pic)
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
    }
  }
</script>