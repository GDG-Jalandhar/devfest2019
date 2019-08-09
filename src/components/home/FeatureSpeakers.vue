<template>
    <v-container fluid class="mb-0 pb-0">
        <v-layout wrap align-start justify-start row fill-height>
            <v-flex xs12 md12 class="pa-5">
               <p class="google-font mb-1" style="font-weight: 350;color: #616161;font-size:200%"><b>Our lineup of   
                    <span style="color: #1a73e8;">big thinkers and </span> and <span style="color: #1a73e8;">even bigger doers</span></b> 
                </p>
                <p class="google-font mt-1">
                    Get ready to be inspired by speakers who are building a cloud full of opportunity with our partners and customers. Stay tuned as we add more dynamic speakers to our lineup.
                </p>
                
                <!-- <v-btn href="#" color="#1a73e8" target="_blank" rounded style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" outlined  class="ml-0 google-font mt-3" dark>How it was in 2018</v-btn> -->

            </v-flex> 
<!-- style="text-align:center;border: 1px solid #e0e0e0;min-height:250px;border-radius:7px" -->
            <v-flex xs6 sm3 md3 lg2 v-for="(item,i) in SpeakerDetails.slice(0, 5)" :key="i" 
            style="">
                <speakerDetailsCompo :data="{vdata:item}"/>
            </v-flex>         
        </v-layout>
    </v-container>
</template>

<script>
import SpeakerDetails from '@/assets/data/speaker.json'
import speakerDetailsCompo from '@/components/common/SpeakerDetails'
export default {
    components:{
        speakerDetailsCompo
    },
    data() {
        return {
            SpeakerDetails: SpeakerDetails
        }
    },
    methods:{
        showSpeakerDetails(){
            console.log('caas')
            this.popUpState = true
        },
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
            return val.substring(0,num)+".."
        }
    }
}
</script>
