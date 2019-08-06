<template>
    <v-container class="grey lighten-5 px-3" style="border:1px solid #9e9e9e;border-radius:7px">
        <v-layout wrap align-center justify-center row fill-heights>

            <v-flex xs12 sm5 md6 lg6 xl6 order-xs2 class="pa-5">
               <p class="google-font mb-1 hidden-sm-and-down" style="font-weight: 350;color: #616161;font-size:200%"><b>Our   
                    <span style="color: #1a73e8;">Speakers</span></b> 
                </p>
                <p class="google-font mt-3">
                    Being the tech leaders from across the region, also they are the same community people, just Iike us! Attend them in person and listen to their expert talks and know more about them below.
                </p>
                
                <v-btn href="#" color="#1a73e8" target="_blank" rounded style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"  class="ml-0 google-font mt-2" dark>Call For Speakers</v-btn>

                <p class="google-font mt-2">* Last Date for apply: 15th Sept 2019</p>

            </v-flex> 

            <v-flex xs12 sm7 md6 lg6 xl6 order-xs1 class="">
                    <v-img
                        aspect-ratio="1"
                        style="border:1px solid #9e9e9e;border-top-right-radius:7px;border-bottom-right-radius:7px"
                        class="white--text"
                        max-height="300"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        :src="'https://storage.googleapis.com/io-19-assets/images/homepage/intro_recap_1x.jpg'"
                        :lazy-src="'https://storage.googleapis.com/io-19-assets/images/homepage/intro_recap_1x.jpg'"
                        >
                        <v-card-title
                            class="fill-height align-end google-font"
                        >
                            Speakers
                        </v-card-title>
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
        </v-layout>


    </v-container>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>
