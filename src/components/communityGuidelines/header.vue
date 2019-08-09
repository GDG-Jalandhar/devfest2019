<template>
    <v-container class="px-3">
        <v-layout wrap align-center justify-center row fill-heights>

            <v-flex xs12 sm12 md12 lg12 xl12 class="px-5">
               <p class="google-font mb-1" style="font-weight: 350;color: #616161;font-size:200%"><b>Community   
                    <span style="color: #1a73e8;">Guidelines</span> & <span style="color: #1a73e8;">COC</span></b> 
                </p>
                <p class="google-font mt-3">
                    {{cgdata.aboutGDG}}
                </p>
            </v-flex> 
        </v-layout>
    </v-container>
</template>

<script>
import data from '@/assets/data/aboutPage.json'
export default {
    data() {
        return {
            cgdata: data
        }
    },
}
</script>
