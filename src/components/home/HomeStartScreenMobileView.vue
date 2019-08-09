<template>
    <v-container class="my-0 " style="">
        <v-layout wrap align-center justify-center row fill-height>
            <v-flex xs12 class="px-5 mx-5 mb-3" >
                <v-img
                    :src="require('@/assets/img/devfest-logo.jpg')"
                    :lazy-src="require('@/assets/img/devfest-logo.jpg')"
                    width="100%"
                    style="border-radius:8px"
                    class="elevation-0">
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
            </v-flex>
            <v-flex xs12 class="px-5" >
                <p class="google-font mb-1" style="font-weight: 350;color: #616161;font-size:200%"><b>DevFest  
                    <span style="color: #1a73e8;">Punjab</span>.</b> 
                </p>
               
                <p class="google-font mb-0 mt-0" style="font-size:140%">GDG Jalandhar <v-icon>mdi-unfold-more-vertical mdi-36px</v-icon> GDG Chandigarh</p>
                <p class="google-font mb-0" style="font-size:100%">DevFests are community-led, developer events hosted by GDG chapters around the globe focused on community building and learning about Google’s technologies. </p>
                <p class="google-font my-0" style="font-size:100%;color:#424242">
                    Date | Time | Venue
                </p> 
                <p class="google-font" style="font-size:110%;color:#9e9e9e">
                    <span v-for="(item,i) in chapterDetails.ChapterHashTags" :key="i">
                        #{{item}} &nbsp;
                    </span>
                </p>

                <v-btn :href="chapterDetails.ChapterMeetupLink" target="_blank" class="ma-0 google-font elevation-1" color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white">Request for an Invitation</v-btn>
                &nbsp;

                <v-btn :href="chapterDetails.GDGProgramWebsite" target="_blank" rounded color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" outlined  class="ml-0" dark>Learn More</v-btn>

            </v-flex>

        
        </v-layout>

    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails
        }
    },
}
</script>
