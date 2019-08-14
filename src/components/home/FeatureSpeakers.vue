<template>
    <v-container fluid class="mb-0 pb-0">
        <v-layout wrap align-start justify-start row fill-height>
            <v-flex xs12 md12 class="pa-5">
               <p class="google-font mb-1" style="font-weight: 350;color: #616161;font-size:200%">
                   <b>
                       Our lineup of<span style="color: #1a73e8;"> big thinkers and </span> and <span style="color: #1a73e8;">even bigger doers</span>
                   </b> 
                </p>
                <p class="google-font mt-1">
                    Get ready to be inspired by the speakers who are building a cloud full of opportunity with our partners and customers. <br>
                    Stay tuned as we have added outstanding & dynamic speakers to our lineup, <router-link to="/speakers">here</router-link>.
                </p>
            </v-flex> 
            <v-flex xs6 sm3 md3 lg2 v-for="(item,i) in SpeakerDetails.slice(0, 6)" :key="i" 
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
    }
}
</script>
