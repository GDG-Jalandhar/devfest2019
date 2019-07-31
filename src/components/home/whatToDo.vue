<template>
    <v-container class="" >
        <v-layout wrap align-center justify-center row fill-height class="hidden-sm-and-down ma-2" style="border:1px solid #9e9e9e;border-radius:8px">
            <v-flex xs12 sm5 md3 lg3 xl3 class="text-center pa-5">
                <v-hover v-slot:default="{ hover }">
                    <v-card class="pa-3" :elevation="hover ? 0 : 0" style="min-height:200px">
                        <v-icon size="50px">mdi-microphone</v-icon>
                        <p class="google-font my-0" style="font-size:150%;color:#424242">Sessions</p>
                        <p class="google-font" style="font-size:100%;color:#9e9e9e">3 parallel tracks, dedicated to Android, Web and Cloud technologies</p>
                    </v-card>
                </v-hover>
            </v-flex> 
            <v-flex xs12 sm5 md3 lg3 xl3 class="text-center pa-5">
                <v-hover v-slot:default="{ hover }">
                    <v-card class="pa-3" :elevation="hover ? 2 : 0">
                        <v-icon size="50px">mdi-lightbulb-on</v-icon>
                        <p class="google-font my-0" style="font-size:150%;color:#424242">Showcases</p>
                        <p class="google-font" style="font-size:100%;color:#9e9e9e">Demo zone with the latest of Google tech: GCP, Firebase, VR, IoT - all in one place</p>
                    </v-card>
                </v-hover>
            </v-flex> 
            <v-flex xs12 sm5 md3 lg3 xl3 class="text-center pa-5">
                <v-hover v-slot:default="{ hover }">
                    <v-card class="pa-3" :elevation="hover ? 2 : 0">
                        <v-icon size="50px">mdi-account-switch</v-icon>
                        <p class="google-font my-0" style="font-size:150%;color:#424242">Workshops</p>
                        <p class="google-font" style="font-size:100%;color:#9e9e9e">Workshops to get your hands dirty and create a working prototype right during the conference</p>
                    </v-card>
                </v-hover>
            </v-flex> 
            <v-flex xs12 sm5 md3 lg3 xl3 class="text-center pa-5">
                <v-hover v-slot:default="{ hover }">
                    <v-card class="pa-3" :elevation="hover ? 2 : 0">
                        <v-icon size="50px">mdi-lock-pattern</v-icon>
                        <p class="google-font my-0" style="font-size:150%;color:#424242">Networking</p>
                        <p class="google-font" style="font-size:100%;color:#9e9e9e">Work hard and enjoy DevFest is the best place to meet new people</p>
                    </v-card>
                </v-hover>
            </v-flex> 
          
        </v-layout>


        <v-layout wrap align-center justify-center row fill-height class="hidden-sm-and-up" style="padding-top:5%;padding-bottom:5%;background:#fafafa" >
            <v-flex xs12 class="px-5 mb-2">
                <p class="google-font" style="font-size:120%">Our Theme</p>
            </v-flex>
            <v-flex xs12 sm5 md3 lg3 xl3 class="px-5">
                <span class="pa-2 google-font" style="border-radius: 7px; background-color: rgb(210, 227, 252); color: rgb(23, 78, 166); font-size: 130%;">Sessions</span>
                <p class="google-font mt-3" style="font-size:100%;color:#9e9e9e">3 parallel tracks, dedicated to Android, Web and Cloud technologies</p>
            </v-flex> 
            <v-flex xs12 sm5 md3 lg3 xl3 class="px-5 mt-2">
                <span class="pa-2 google-font" style="border-radius: 7px; background-color: rgb(254, 247, 224); color: rgb(176, 96, 0); font-size: 120%;">Showcases</span>
                <p class="google-font mt-3" style="font-size:100%;color:#9e9e9e">Demo zone with the latest of Google tech: GCP, Firebase, VR, IoT - all in one place</p>
            </v-flex> 
            <v-flex xs12 sm5 md3 lg3 xl3 class="px-5 mt-2">
                <span class="pa-2 google-font" style="border-radius: 7px; background-color: rgb(252, 232, 230); color: rgb(179, 20, 18); font-size: 120%;">Networking</span>
                <p class="google-font mt-3" style="font-size:100%;color:#9e9e9e">Workshops to get your hands dirty and create a working prototype right during the conference</p>
            </v-flex> 
            <v-flex xs12 sm5 md3 lg3 xl3 class="px-5 mt-2">
                <span class="pa-2 google-font" style="border-radius: 7px; background-color: rgb(206, 234, 214); color: rgb(13, 101, 45); font-size: 120%;">Workshop</span>
                <p class="google-font mt-3" style="font-size:100%;color:#9e9e9e">Work hard and enjoy DevFest is the best place to meet new people</p>
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
