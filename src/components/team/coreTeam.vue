<template>
    <v-container class="pa-0">
        <v-layout wrap align-start justify-start row fill-height class="mt-0 mb-0">
            <v-flex xs6 sm3 md2 lg2 v-for="(item,i) in TeamDetails" :key="i" class="text-xs-center px-5" style="text-align:center">
                <!-- style="text-align:center;border: 1px solid #e0e0e0;min-height:250px;border-radius:7px" -->
                <div 
                    class="text-xs-center ma-1 pa-1 py-5 my-0" >
                    <v-avatar size="100">
                        <v-img
                        :src="getImgUrl(item.image)"
                        :lazy-src="getImgUrl(item.image)">

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
                    <p class="mt-3 mb-0 google-font" style="font-size:130%">{{item.name}}</p>
                    <p class="mt-1 mb-0 google-font">{{item.designation}}</p>

                    <v-btn small class="mt-0 mx-0" icon v-if="(item.social.twitter).length>0" :href="item.social.twitter" target="_blank">
                        <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
                    </v-btn>

                    <v-btn small class="mt-0 mx-0" icon v-if="(item.social.linkedin).length>0" :href="item.social.linkedin" target="_blank">
                        <v-icon small style="color:#0077b5">fab fa-linkedin-in</v-icon>
                    </v-btn>

                    <v-btn small class="mt-0 mx-0" icon v-if="(item.social.github).length>0" :href="item.social.github" target="_blank">
                        <v-icon small style="color:#333">fab fa-github</v-icon>
                    </v-btn>
                    <v-btn small class="mt-0 mx-0" icon v-if="(item.social.website).length>0" :href="item.social.website" target="_blank">
                        <v-icon style="color:#333">link</v-icon>
                    </v-btn>
                </div>
            </v-flex>
        </v-layout>



    </v-container>
</template>

<script>
import TeamDetails from '@/assets/data/coreTeam.json'
export default {
    data() {
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
