<template>
  <div>
    <v-dialog
      v-model="dialog"
      fullscreen hide-overlay transition="dialog-bottom-transition"
      hide-on-leave
      width="700"
    >
      <template v-slot:activator="{ on }">
        <div v-on="on" style="cursor: pointer;" class="red">
            <v-chip :color="data.vdata.tag.color" label outlined class="mt-1 mb-0" small>{{data.vdata.tag.name}}</v-chip>
            <p class="google-font ma-0 mt-2" style="font-size:110%;" >{{data.vdata.title | summery(25)}}</p>
            <p class="google-font mt-1 mb-0" style="font-size:90%">{{data.vdata.description | summery(90)}}</p>
            <p class="google-font mt-1 mb-0" style="font-size:80%;color:#424242">{{data.vdata.timeDuration}} min | {{data.vdata.place}}</p>
        </div>
      </template>

      <v-card color="" >
        <!-- <v-toolbar 
            flat
            class="grey lighten-4" >
          <v-btn icon  @click="dialog = false">
            <v-icon>mdi-keyboard-backspace</v-icon>
          </v-btn>
          <v-toolbar-title>Back</v-toolbar-title>
          <v-spacer></v-spacer>
         
        </v-toolbar> -->
        <v-card-title
          class="px-5 grey lighten-4 google-font"
          primary-title
          :style="{'background-image':'url('+require('@/assets/img/svg/footer.svg')+')'}"
          style="background-position:right top;padding-top:20%;"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;
        </v-card-title>

        <v-card-text class="px-5 pb-5" style="margin-top: -80px;" >
         
            <v-fab-transition>
                <v-btn
                absolute
                dark
                fab
                bottom
                fixed
                right
                @click="dialog = false"
                color="indigo"
                >
                <v-icon>mdi-keyboard-return</v-icon>
                </v-btn>
            </v-fab-transition>
          <v-layout row wrap class="my-3">
            <v-flex xs12 md4 class="text-center pa-2">
                <p>{{data.vdata.title}} </p>
                <v-chip :color="data.vdata.tag.color" label outlined class="mt-1 mb-0" small>{{data.vdata.tag.name}}</v-chip>
                <p class="google-font mt-3 mb-0" style="font-size:110%"><b>Venue:</b> {{data.vdata.place}}</p>
                <p class="google-font mt-0 mb-0" style="font-size:110%"><b>Time Durations:</b> {{data.vdata.timeDuration}} min</p>
                <p class="google-font mt-0 mb-0" style="font-size:110%"><b>Type:</b> {{data.vdata.subtype}} </p>   
                <p class="google-font mt-0 mb-0" style="font-size:110%" v-if="data.vdata.complexity"><b>Content level:</b> {{data.vdata.complexity}} </p>                  

                <p class="google-font mt-3" style="font-size:105%">{{data.vdata.description}} <br> </p>

            </v-flex>

          </v-layout>
          
          
          
          <p class="my-0 google-font mt-2" v-if="data.vdata.speakers.length>0" style="font-size:120%">
            <b>Speakers:</b>
          </p>
       
          <v-flex xs12 md12 v-for="(item,index) in data.vdata.speakers" :key="index">
            <div v-for="(speaker,j) in SpeakersDetails" :key="j">
              <div v-if="speaker.id == item">    
                <v-list two-line subheader class="pa-0 ma-0">
                  <v-list-item>
                    <v-list-item-avatar>
                        <img :src="getImgUrl(speaker.image)"> 
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="google-font" style="color:#424242">{{ speaker.name }}</v-list-item-title>
                      <v-list-item-subtitle class="google-font">{{ speaker.designation }}, {{speaker.company.name}}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  </v-list>               
              </div>
            </div>
          </v-flex>

        </v-card-text>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import SpeakersDetails from '@/assets/data/speaker.json'
  export default {
    props:{
      data:{
        vdata:[]
      }
    },
    data () {
      return {
        dialog: false,
        SpeakersDetails:SpeakersDetails
      }
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
    },
    filters:{
        summery: (val,num)=>{
          if(val.length > num){
            return val.substring(0,num)+".."
          }else{
            return val
          }
        }
    }
  }
</script>