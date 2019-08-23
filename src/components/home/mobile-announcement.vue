<template>
    <v-container class="my-0 px-5 " >
        <v-layout wrap align-center row fill-height class="">
            <v-flex xs12>
                <p class="google-font mb-0" style="font-size:90%;color:#424242">ANNOUNCEMENTS</p>
            </v-flex>
            <v-flex xs12 class="px-1 mt-2" v-for="(item,i) in announcementData" :key="i" >
                    <v-card class="elevation-0 pa-1" style="border:1px solid #EEEEEE;border-radius:8px;min-height:150px;max-height:150px">
                        <!-- <v-img
                            height="30"
                            :src="require('@/assets/img/main.webp')"
                            :lazy-src="require('@/assets/img/main.webp')" 
                            >
                        </v-img> -->
                        <v-card-text class="pa-0">
                            <p class="google-font">{{item.title}}</p>
                        </v-card-text>
                        <v-card-actions bottom>
                            <v-btn depressed bottom small>See More</v-btn>
                        </v-card-actions>
                    </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import announcementData from '@/assets/data/announcement.json'
export default {
    data() {
        return {
            announcementData: announcementData
        }
    },
}
</script>
