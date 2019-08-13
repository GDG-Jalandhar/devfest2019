<template>
    <v-dialog
      v-model="dialog"
      width="700"
    >
      <template v-slot:activator="{ on }">
          <div v-on="on" style="cursor: pointer;">
              <p class="google-font ma-0 mt-2" style="font-size:110%;" >{{data.vdata.title | summery(25)}}</p>
              <p class="google-font mt-1 mb-0" style="font-size:90%">{{data.vdata.description | summery(90)}}</p>
              <p class="google-font mt-1 mb-0" style="font-size:80%;color:#424242">{{data.vdata.timeDuration}} min | {{data.vdata.place}}</p>
          </div>
      </template>

      <v-card color="">
        <v-card-title
          class="px-5 grey lighten-4 google-font"
          primary-title
        >
         {{data.vdata.title}} 
        </v-card-title>

        <v-card-text class="pa-5">
            <v-chip :color="data.vdata.tag.color" label outlined class="mt-1 mb-0" small>{{data.vdata.tag.name}}</v-chip>

            <p class="google-font mt-3 mb-0" style="font-size:110%"><b>Venue:</b> {{data.vdata.place}}</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%"><b>Time Durations:</b> {{data.vdata.timeDuration}} min</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%"><b>Type:</b> {{data.vdata.subtype}} </p>   
            <p class="google-font mt-0 mb-0" style="font-size:110%" v-if="data.vdata.complexity"><b>Content level:</b> {{data.vdata.complexity}} </p>                  

            <p class="google-font mt-3" style="font-size:105%">{{data.vdata.description}}</p>

          
       
          <v-flex xs12 md12 v-for="(item, index) in SpeakersData" :key="index">
            <v-list two-line subheader class="pa-0 ma-0">
                <v-list-item>
                    <v-list-item-avatar>
                        <img :src="getImgUrl(item.image)">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="google-font" style="color:#424242">{{ item.name }}</v-list-item-title>
                        <v-list-item-subtitle class="google-font">{{ item.designation }}, {{item.company.name}} 
                        </v-list-item-subtitle>
                    </v-list-item-content>
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
</template>

<script>
import SpeakersDetails from '@/assets/data/speaker.json'
  export default {
    components:{
    },
    props:{
      data:{
        vdata:[]
      }
    },
    data () {
      return {
        dialog: false,
        SpeakersDetails:SpeakersDetails,
        SpeakersData:[],
        tempData:[],
        tagsData:[]
      }
    },
    mounted(){
      this.SpeakersDetails.map(res=>{
        res.sessionId.map(d=>{
          if(d == this.data.vdata.id){
            this.SpeakersData.push(res)
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