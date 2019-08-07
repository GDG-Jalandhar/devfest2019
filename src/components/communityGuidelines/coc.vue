<template>
    <v-container class="px-3">
        <v-layout wrap align-start justify-start row fill-heights>

            <v-flex xs12 sm12 md8 lg8 xl8 class="pa-5">
                <p class="google-font" style="font-size:180%;color:#0277bd">Code of Conducts</p>
                <p class="google-font mt-3">
                    {{cgdata.coc}}
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
