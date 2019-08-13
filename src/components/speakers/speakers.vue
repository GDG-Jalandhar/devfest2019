<template>
    <v-container class="mb-0 pb-0">
        <v-layout wrap align-center justify-center row fill-height>
            <v-flex xs12 class="px-5">
                <v-layout row wrap class="pa-0">
                    <v-flex xs6 sm3 md3 lg2 v-for="(item,i) in speakerData" :key="i" 
                    class="pa-1" style="text-align:center">
                        <speakerDetails :data="{vdata: item}"/>                    
                    </v-flex>    
                </v-layout> 
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import speakerData from '@/assets/data/speaker.json'
import speakerDetails from '@/components/common/SpeakerDetails'
export default {
    components:{
        speakerDetails
    },
    data() {
        return {
            speakerData: speakerData
        }
    }
}
</script>
