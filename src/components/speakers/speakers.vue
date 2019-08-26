<template>
    <v-container class="mb-0 pb-0">
        <v-layout wrap align-center justify-center row fill-height>
            <v-flex xs12 class="px-5">
                <v-layout row wrap class="pa-0">
                    <v-flex xs6 sm3 md3 lg2 v-for="(item,i) in ShuffleData(speakerData)" :key="i" 
                    class="pa-1" style="text-align:center">
                        <speakerDetails class="d-none d-sm-block" :data="{vdata: item}"/>   
                        <speakerDetailsMobile class="hidden-sm-and-up" :data="{vdata: item}"/>                 
                    </v-flex>    
                </v-layout> 
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import speakerData from '@/assets/data/speaker.json'
import speakerDetails from '@/components/common/SpeakerDetails'
import speakerDetailsMobile from '@/components/common/SpeakerDetailsMobile'
export default {
    components:{
        speakerDetails,
        speakerDetailsMobile
    },
    data() {
        return {
            speakerData: speakerData
        }
    },
    methods: {
        ShuffleData(speakerData) {
            let currentIndex = speakerData.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = speakerData[currentIndex];
                speakerData[currentIndex] = speakerData[randomIndex];
                speakerData[randomIndex] = temporaryValue;
            }
            return speakerData;
        }
    }
}
</script>
