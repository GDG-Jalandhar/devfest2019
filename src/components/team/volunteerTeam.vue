<template>
    <v-container fluid class="pa-0">
        <v-layout wrap align-start justify-start row fill-height class="mt-0 mb-0 mx-3">
            <v-flex xs12 class="mb-3 px-5  d-none d-sm-block">
                <p class="google-font mb-1" style="font-size:130%;color:#1a73e8">Volunteer Details</p>
            </v-flex>
            <v-flex xs12 md3 sm4 lg3 v-for="(item,i) in ShuffleData(TeamDetails)" :key="i" class="px-5 mb-3">
                <div style="border:1px solid #EEEEEE;border-radius:8px;min-height:100px;max-height:100px">
                    <v-layout row wrap class="px-0 ma-0">
                        <v-flex xs4 sm5 md4 class="pa-0">
                            <v-img
                            v-if="item.profileImage"
                            style="height:100px;border:1px;border-radius:8px;"
                            :src="getImgUrl(item.profileImage)"
                            :lazy-src="getImgUrl(item.profileImage)">
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

                            <v-img
                            v-else
                            style="height:100px;border:1px;border-radius:8px;"
                            :src="require('@/assets/img/common/avatar.png')"
                            :lazy-src="require('@/assets/img/common/avatar.png')">
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
                        <v-flex xs8 sm7 md8 class="pa-2">
                            <p class="mt-3 mb-0 google-font" style="font-size:110%">{{item.name}}</p>
                            <v-btn class="mt-0 mx-0" x-small icon v-if="(item.twitter).length>0" :href="item.twitter" target="_blank">
                                <v-icon x-small style="color:#BDBDBD">fab fa-twitter</v-icon>
                            </v-btn>

                            <v-btn class="mt-0 mx-0" x-small icon v-if="(item.facebook).length>0" :href="item.facebook" target="_blank">
                                <v-icon x-small style="color:#BDBDBD">fab fa-facebook</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </div>
                <!-- <v-list three-line class="py-0 ma-0">
                    <template >
                    <v-list-item
                        :key="item.name"
                        class="pb-0 mb-0"                        
                    >
                        <v-list-item-avatar>
                            <img v-if="item.profileImage" class="my-auto" :src="getImgUrl(item.profileImage)" width="100%">
                            <v-avatar v-else color="grey lighten-2 my-auto" >
                                <span class="google-font" style="width:100vh">{{getCharString(item.name)}}</span>
                            </v-avatar>
                        </v-list-item-avatar>

                        <v-list-item-content class="">
                            <v-list-item-title class="google-font" v-html="item.name"></v-list-item-title>
                            <v-list-item-subtitle><span class="google-font">{{item.designation}}</span></v-list-item-subtitle>
                            <v-list-item-subtitle class="">
                                
                                <v-btn class="mt-0 mx-0" x-small icon v-if="(item.twitter).length>0" :href="item.twitter" target="_blank">
                                    <v-icon x-small style="color:#BDBDBD">fab fa-twitter</v-icon>
                                </v-btn>

                                <v-btn class="mt-0 mx-0" x-small icon v-if="(item.facebook).length>0" :href="item.facebook" target="_blank">
                                    <v-icon x-small style="color:#BDBDBD">fab fa-facebook</v-icon>
                                </v-btn>

                               
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    </template>
                </v-list> -->
            </v-flex>
         
        </v-layout>



    </v-container>
</template>

<script>
import TeamDetails from '@/assets/data/volunteerData.json'

export default {
    data(){
        return {
            TeamDetails: TeamDetails
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
        ShuffleData(TeamDetails) {
      let currentIndex = TeamDetails.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = TeamDetails[currentIndex];
        TeamDetails[currentIndex] = TeamDetails[randomIndex];
        TeamDetails[randomIndex] = temporaryValue;
      }
      return TeamDetails;
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
