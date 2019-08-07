<template>
    <v-container class="pa-0">
        <v-layout wrap align-start justify-start row fill-height class="mt-0 mb-0">
            <v-flex xs12 class="mb-3 px-5">
                <p class="google-font mb-1" style="font-size:130%;">Volunteer Team Members</p>
                <!-- <v-divider></v-divider> -->
            </v-flex>
            <v-flex xs12 md3 lg3 v-for="(item,i) in TeamDetails" :key="i" class="px-5">
                <v-list three-line class="py-0 ma-0">
                    <template >
                    <v-list-item
                        :key="item.name"                        
                    >
                        <v-list-item-avatar>
                            <img :src="getImgUrl(item.profileImage)" width="100%">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title class="google-font" v-html="item.name"></v-list-item-title>
                            <v-list-item-subtitle><span class="google-font">{{item.designation}}</span></v-list-item-subtitle>
                            <v-list-item-subtitle>
                                
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
                </v-list>
            </v-flex>
         
        </v-layout>



    </v-container>
</template>

<script>
import TeamDetails from '@/assets/data/organizingTeam.json'
export default {
    data(){
        return {
            TeamDetails: TeamDetails,
            showLoader: true,
            showData:false,
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
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        }
    }
}
</script>
