<template>
    <v-container class="my-0 px-5 red" style="">
        <v-layout wrap align-center justify-center row fill-height class="green">
            <v-flex xs12 class="px-5 mt-5 yellow">
                <p class="google-font">Announcements</p>

                <v-layout row wrap>
                    <v-flex xs12 v-for="(item,i) in announcementData" :key="i">
                        <div class="pa-4 ma-1">
                            <p class="google-font">{{item.title}}</p>
                            <p class="google-font">{{item.des}}</p>
                        </div>
                    </v-flex>
                </v-layout>
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
