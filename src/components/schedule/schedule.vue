<template>
  <v-container class="px-2">


    <v-row class="mx-3"  v-for="(item,index) in scheduleData" :key="index">
      <v-col cols="12" md="1" class="pa-3" >
        <p style="font-size:120%">{{item.startTime}}</p>
      </v-col>
      <v-col xs10 v-if="item.sessions.length">
        <v-row class=" ">
          <v-col  v-for="(n,index) in item.sessions.length"  :key="index" class="pa-2 ma-1" >
            <v-row v-for="(itemp,index) in item.sessions[index]" :key="index" class="pa-0">
              <v-col md="12" v-for="(obj,x) in itemp" class="px-4" :key="x" style="border-radius: 0px; border:1px solid #e0e0e0;">
                <v-row xs12 v-for="(sdata,key) in sessionsData" :key="key" class="">
                  <v-col v-if="obj == sdata.id">
                    <p class="google-font mb-0" style="font-size:120%">{{sdata.title}}</p>
                    <p style="font-size:80%">{{sdata.complexity}}</p>
                    <v-chip class="white--text ml-0" color="indigo" label v-if="sdata.timeDuration<60" small> {{ sdata.timeDuration }} min</v-chip>
                    <v-chip label class="white--text ml-0" color="indigo" v-else small> {{ sdata.timeDuration/60 }} hour</v-chip>
                    <v-chip class="ml-3" small label>{{sdata.place}}</v-chip>
                    <span v-for="sd in sdata.speakers" :key="sd"> 
                      <span v-for="(sp,i) in speakerData" :key="i">
                        <v-chip color="teal" label small outlined v-if="sp.id == sd" class="mx-3 my-2">
                            {{ sp.name }}
                        </v-chip>
                      </span>
                    </span>
                  </v-col>
                </v-row>
                
                
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-else class="" style="border-radius: 0px; border:1px solid #e0e0e0;">
        <p class="google-font mb-0" style="font-size:120%">{{item.title}}</p>
        <p class="google-font" style="font-size:90%">{{item.des}}</p>
        <v-chip class="white--text ml-0" color="indigo" label v-if="item.timeDuration<60" small> {{ item.timeDuration }} min</v-chip>
        <v-chip label class="white--text ml-0" color="indigo" v-else small> {{ item.timeDuration/60 }} hour</v-chip>
        <v-chip class="ml-3" small label>{{item.place}}</v-chip>
        
      </v-col>

    </v-row>


 
  </v-container>
</template>

<script>
import scheduleData from "@/assets/data/schedule.json";
import sessionsData from "@/assets/data/sessions.json";
import speakerData from "@/assets/data/speaker.json";
export default {
  data: () => ({
    scheduleData: scheduleData,
    sessionsData: sessionsData,
    speakerData:speakerData
  }),
  methods:{
    getImgUrl(pic) {
        if(pic.length>0){
            return require('@/assets/img/speakers/'+pic)
        }else{
            return require('@/assets/img/common/avatar.png')
        }
    },
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) {
        return val.substring(0, num) + "...";
      } else {
        return val;
      }
    }
  }
};
</script>
