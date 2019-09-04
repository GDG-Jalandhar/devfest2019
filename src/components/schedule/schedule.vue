<template>
  <v-container class="mx-5">
    <v-layout
      row
      wrap
      v-for="(item,index) in scheduleData"
      :key="index"
      style="border-radius: 0px; border:1px solid #E0E0E0;border-left:0px;border-right:0px"
    >
      <v-flex xs2 md3 class="text-right pa-3">
        <p style="font-size:150%" class="mb-0">{{item.startTime}}</p>
        <p style="font-size:80%" class="ma-0">{{item.endTime}}</p>
      </v-flex>
      <v-flex v-if="item.sessions.length" xs10 md9 class="pa-3">
        <div v-for="(n,index) in item.sessions.length" :key="index" class="white">
          <div v-for="(itemp,index) in item.sessions[index]" :key="index" class="white">
            <div v-for="(obj,x) in itemp" :key="x" class="white">
              <div v-for="(sdata,key) in sessionsData" :key="key">
                <div v-if="obj == sdata.id" class="py-3 pa-3">
                  <v-layout row wrap>
                    <v-flex xs12 class="px-3" :style="{ 'border-left':  getBorderColor(sdata.place)}" >
                      <p class="google-font mb-0" style="font-size:120%">{{sdata.title}}</p>
                      <p style="font-size:80%">{{sdata.complexity}}</p>
                      <v-chip
                        class="white--text ml-0"
                        color="pink"
                        label
                        v-if="sdata.timeDuration<60"
                        small
                      ><v-icon x-small>mdi-av-timer</v-icon>&nbsp; {{ sdata.timeDuration }} min</v-chip>
                      <v-chip
                        label
                        class="white--text ml-0"
                        color="pink"
                        v-else
                        small
                      > <v-icon x-small>mdi-av-timer</v-icon>&nbsp; {{ sdata.timeDuration/60 }} hour</v-chip>

                      <v-chip class="ml-1 mr-1" dark :color="getColor(sdata.place)" small label>
                        <v-icon x-small>mdi-google-maps</v-icon>&nbsp;
                        {{sdata.place}}
                      </v-chip>

                      <span v-for="sd in sdata.speakers" :key="sd">
                        <span v-for="(sp,i) in speakerData" :key="i">
                          <v-chip
                            color="teal"
                            label
                            small
                            outlined
                            v-if="sp.id == sd"
                            class="mr-1 my-2"
                          ><v-icon x-small>mdi-account-outline</v-icon>&nbsp;{{ sp.name }}</v-chip>
                        </span>
                      </span>
                    </v-flex>
                  </v-layout>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-flex>
      <v-flex xs10 md9 v-else class="pa-3" >
        <div class="px-3" :style="{ 'border-left':  getBorderColor(item.place)}">
            <p class="google-font mb-0" style="font-size:120%">{{item.title}}</p>
        <p class="google-font" style="font-size:90%">{{item.des}}</p>
        <v-chip
          class="white--text ml-0"
          color="pink"
          label
          v-if="item.timeDuration<60"
          small
        > <v-icon x-small>mdi-av-timer</v-icon>&nbsp; {{ item.timeDuration }} min</v-chip>
        <v-chip
          label
          class="white--text ml-0"
          color="pink"
          v-else
          small
        ><v-icon x-small>mdi-av-timer</v-icon>&nbsp;  {{ item.timeDuration/60 }} hour</v-chip>
        <v-chip class="ml-1" :color="getColor(item.place)" dark small label><v-icon x-small>mdi-google-maps</v-icon>&nbsp;{{item.place}}</v-chip>
        </div>
      </v-flex>
    </v-layout>
    <!-- <v-row
      justify="start"
      class="mx-0"
      v-for="(item,index) in scheduleData"
      :key="index"
      style="border-radius: 0px; border:1px solid #E0E0E0;"
    >
      <v-col cols="12" xs="1" md="1" class="pa-2">
        <p style="font-size:120%" class="mb-0">{{item.startTime}}</p>
        <p style="font-size:80%" class="ma-0">{{item.endTime}}</p>
      </v-col>
      <v-col cols="12" xs="10" md="11" v-if="item.sessions.length" class>
        <v-row class>
          <v-col v-for="(n,index) in item.sessions.length" :key="index" class="pa-2">
            <v-row v-for="(itemp,index) in item.sessions[index]" :key="index" class="pa-0">
              <v-col
                md="12"
                v-for="(obj,x) in itemp"
                class="ma-0 pa-0"
                :key="x"
                style="border-radius: 0px; border:1px solid #E0E0E0;"
              >
                <v-row
                  xs12
                  v-for="(sdata,key) in sessionsData"
                  class="grey lighten-5 ma-0"
                  :key="key"
                >
                  <v-col v-if="obj == sdata.id">
                    <p class="google-font mb-0" style="font-size:120%">{{sdata.title}}</p>
                    <p style="font-size:80%">{{sdata.complexity}}</p>
                    <v-chip
                      class="white--text ml-0"
                      color="indigo"
                      label
                      v-if="sdata.timeDuration<60"
                      small
                    >{{ sdata.timeDuration }} min</v-chip>
                    <v-chip
                      label
                      class="white--text ml-0"
                      color="indigo"
                      v-else
                      small
                    >{{ sdata.timeDuration/60 }} hour</v-chip>
                    <v-chip class="ml-3" small label>{{sdata.place}}</v-chip>
                    <span v-for="sd in sdata.speakers" :key="sd">
                      <span v-for="(sp,i) in speakerData" :key="i">
                        <v-chip
                          color="teal"
                          label
                          small
                          outlined
                          v-if="sp.id == sd"
                          class="mx-1 my-2"
                        >{{ sp.name }}</v-chip>
                      </span>
                    </span>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        v-else
        class="ma-0 grey lighten-5 mb-3"
        style="border-radius: 0px; border:1px solid #e0e0e0;"
      >
        <p class="google-font mb-0" style="font-size:120%">{{item.title}}</p>
        <p class="google-font" style="font-size:90%">{{item.des}}</p>
        <v-chip
          class="white--text ml-0"
          color="indigo"
          label
          v-if="item.timeDuration<60"
          small
        >{{ item.timeDuration }} min</v-chip>
        <v-chip
          label
          class="white--text ml-0"
          color="indigo"
          v-else
          small
        >{{ item.timeDuration/60 }} hour</v-chip>
        <v-chip class="ml-3" small label>{{item.place}}</v-chip>
      </v-col>
    </v-row>-->
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
    speakerData: speakerData
  }),
  methods: {
    getBorderColor(data){
      console.log(data)
      if(data == 'Main Hall'){
        return '5px solid #1E88E5'
      }
      else if(data == 'Hall 2'){
        return '5px solid #0F9D58'
      }else{
        return '5px solid orange'
      }
    },
    getColor(data){
      console.log(data)
      if(data == 'Main Hall'){
        return '#1E88E5'
      }
      else if(data == 'Hall 2'){
        return '#0F9D58'
      }else{
        return 'orange'
      }
    },
    getImgUrl(pic) {
      if (pic.length > 0) {
        return require("@/assets/img/speakers/" + pic);
      } else {
        return require("@/assets/img/common/avatar.png");
      }
    }
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
