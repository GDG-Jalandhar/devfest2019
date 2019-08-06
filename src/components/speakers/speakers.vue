<template>
    <v-container class="mb-0 pb-0">
        <v-layout wrap align-center justify-center row fill-height>
            <v-flex xs12 class="px-5">
                <v-layout row wrap class="pa-0">
                    <v-flex xs6 sm3 md3 lg2 v-for="(item,i) in speakerData" :key="i" 
                    class="pa-1" style="text-align:center">
                        
                        <v-hover>
                        <div slot-scope="{ hover }"
                            style="border-radius: 5px; border:1px solid white"
                            :class="`elevation-${hover ? 0 : 0}`"
                            class="text-xs-center ma-1 pa-1 py-3 my-0" >
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

                            <speakerSocialInfo :data="{vdata:item.social}"/>
                            <speakerDetails :data="{vdata: item}"/>
                            
                        </div>
                        </v-hover>

                        
                    </v-flex>    
                </v-layout> 
            </v-flex>
        </v-layout>


    </v-container>
</template>

<script>
import speakerData from '@/assets/data/speaker.json'
import speakerDetails from '@/components/common/SpeakerDetails'
import speakerSocialInfo from '@/components/common/SpeakerSocialInfo'
export default {
    components:{
        speakerDetails,
        speakerSocialInfo
    },
    data() {
        return {
            speakerData: speakerData,
            speakerDetails: speakerDetails
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
    }
}
</script>
