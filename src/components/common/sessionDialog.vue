<template>
    <v-dialog
      v-model="dialog"
      width="700"
    >
      <template v-slot:activator="{ on }">
          <div v-on="on" 
          style="cursor: pointer;">
              <v-chip :color="data.vdata.tag.color" label outlined class="mt-1 mb-0" small>{{data.vdata.tag.name}}</v-chip>
              <p class="google-font ma-0 mt-2" style="font-size:110%;" >{{data.vdata.title | summery(25)}}</p>
              <p class="google-font mt-1 mb-0" style="font-size:90%">{{data.vdata.description | summery(80)}}</p>
              <p class="google-font mt-1 mb-0" style="font-size:80%;color:#424242">{{data.vdata.timeDuration}} min | {{data.vdata.place}}</p>
          </div>
      </template>

      <v-card color="" v-if="dialog">
        <v-card-title
          class="px-5 py-5 grey lighten-4 google-font"
          :style="{'background-image':'url('+require('@/assets/img/svg/footer.svg')+')'}"
          style="background-position:right bottom;"
        >
          {{data.vdata.title}} 
        </v-card-title>

        <v-card-text class="pa-5">
            <v-chip :color="data.vdata.tag.color" label outlined class="mt-1 mb-0" small>{{data.vdata.tag.name}}</v-chip>

            <p class="google-font mt-3 mb-0" style="font-size:110%"><b>Venue:</b> {{data.vdata.place}}</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%"><b>Time Durations:</b> {{data.vdata.timeDuration}} min</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%"><b>Type:</b> {{data.vdata.subtype}} </p>   
            <p class="google-font mt-0 mb-0" style="font-size:110%" v-if="data.vdata.complexity"><b>Content level:</b> {{data.vdata.complexity}} </p>                  

            <p class="google-font mt-3" style="font-size:105%">{{data.vdata.description}} <br> </p>

          
       
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