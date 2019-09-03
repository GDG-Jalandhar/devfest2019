  
                    <p class="google-font mb-0" style="font-size:120%">{{sdata.title}}</p>
                    <p style="font-size:80%">{{sdata.complexity}}</p>

                    <v-chip class="white--text ml-0" color="indigo" label v-if="sdata.timeDuration<60" small> {{ sdata.timeDuration }} min</v-chip>
                    <v-chip label class="white--text ml-0" color="indigo" v-else small> {{ sdata.timeDuration/60 }} hour</v-chip>
                    <v-chip class="ml-3" small label>{{sdata.place}}</v-chip>
                    <!-- <p>{{sdata.timeDuration}} min</p> -->
                    <!-- <p class="google-font" style="font-size:90%">{{sdata.description | summary(100)}}</p> -->
               


 
 <v-row v-for="sd in sdata.speakers" :key="sd" >
                      <span v-for="(sp,i) in speakerData" :key="i" class="">
                        <span v-if="sp.id == sd" class="ma-0 pa-0">
                          {{ sp.name }}
                           <!-- <v-list two-line subheader class="pa-0 ma-0 ">
                              <v-list-item class="">
                                <v-list-item-avatar class="">
                                    <img :src="getImgUrl(sp.image)"> 
                                </v-list-item-avatar>
                                <v-list-item-content class="">
                                  <v-list-item-title class="google-font" style="color:#424242">{{ sp.name }}</v-list-item-title>
                                  <v-list-item-subtitle class="google-font">{{ sp.designation }}, {{sp.company.name}}
                                  </v-list-item-subtitle>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list>    -->
                        </span>
                      </span>
                    </v-row>


                       <v-layout wrap align-center justify-center row fill-heights>
      <v-flex xs12 sm12 md12 lg12 xl12 class="pa-5">
        <v-layout row wrap class="px-3 mb-3" v-for="(item,index) in scheduleData" :key="index">
          <v-flex xs12 md2>
            {{item.startTime}}
          </v-flex>
          <v-flex xs12 md10>
            <!-- v-for="(data,index) in item.sessions" :key="index" -->
            <v-row row wrap v-if="item.sessions.length"  >
              <!-- align="stretch" justify="center" -->
              <v-col v-for="(n,index) in item.sessions.length"  :key="index"  class="ma-1 pa-0 green">
                  <v-flex xs12 v-for="(itemp,index) in item.sessions[index]"  class="" :key="index" >
                    <v-flex xs12 v-for="(obj,x) in itemp" class="pa-3 mb-1" :key="x" style="border-radius: 5px; border:1px solid #e0e0e0;">
                      <div xs12 v-for="(sdata,key) in sessionsData" :key="key">
                        <div v-if="obj == sdata.id">
                          <p class="google-font mb-0" style="font-size:120%">{{sdata.title}}</p>
                          <p class="google-font" style="font-size:90%">{{sdata.description | summary(100)}}</p>

                          <div v-for="(sp,i) in speakerData" :key="i">
                            <div v-if="sp.id == sdata.speakers">
                              {{sp.name}}
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- {{obj}} -->
                    </v-flex>
                  </v-flex>
              </v-col>
              
            </v-row>
            <v-row row wrap v-else>
              <v-col xs12>
                {{item.des}}
              </v-col>
            </v-row>
          </v-flex>
          <!-- <v-flex xs12 sm2 md2 lg2 class="pa-1">
            <p class="google-font mb-1" style="font-size:120%">{{item.startTime}}</p>
          </v-flex>
          <v-flex xs12 sm10 md10 lg10 class="pa-3" style="border-radius: 5px; border:1px solid #e0e0e0;">
              <v-chip class="white--text ml-0" :color="item.color" label v-if="item.duration<60" small> {{ item.duration }} min</v-chip>
              <v-chip label class="white--text ml-0" :color="item.color" v-else small> {{ item.duration/60 }} hour</v-chip>
              <p class="mb-1" style="font-size:130%"><b>{{ item.topic }}</b></p>
              {{item.venue}}
              <p style="font-size:90%">{{ item.des | summary(100) }}</p>
          </v-flex> -->
          <!-- <v-timeline>
            <v-timeline-item v-for="(item,index) in scheduleData" :key="index" :color="item.color">
              <template v-slot:opposite>
                <span>{{ item.startTime }}</span>
              </template>
              <div
                style="border-radius: 5px; border:1px solid #e0e0e0;min-height:80px"
                class="google-font ma-1 pa-5">
                <v-list-item-content>
                  <v-list-item-title class="google-font" style="font-size:110%;color:#424242">
                    <b>{{ item.topic | summary(30)}}</b>
                    &nbsp;{{item.venue}}
                    <v-chip class="white--text ml-0" :color="item.color" label v-if="item.duration<60" small> {{ item.duration }} min</v-chip>
                    <v-chip label class="white--text ml-0" :color="item.color" v-else small> {{ item.duration/60 }} hour</v-chip>
                  </v-list-item-title>
                  <p style="font-size:90%">{{ item.des | summary(100) }}</p>
                </v-list-item-content>
              </div>
            </v-timeline-item>
          </v-timeline> -->
        </v-layout>
      </v-flex>
    </v-layout>