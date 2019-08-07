<template>
    <v-content class="pa-0">
        <v-container class="pa-0">
            <v-layout row wrap align-center justify-center fill-height class="mt-0">
                <v-flex xs12 md10>
                    <SpeakerHeader class="pa-0"/>
                    <!-- <comingSoon class="my-5 pa-4"/> -->
                    <br>
                    <SpeakerDetails class="mb-5 pb-5"/>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import SpeakerHeader from '@/components/speakers/header'
import SpeakerDetails from '@/components/speakers/speakers'
import comingSoon from '@/components/speakers/comingSoon'
export default {
    components:{
        SpeakerHeader,
        SpeakerDetails,
        comingSoon
    }
}
</script>
