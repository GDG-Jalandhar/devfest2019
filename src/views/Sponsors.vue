<template>
    <v-content class="pa-0">
        <v-container fluid class="px-5">
            <v-layout row wrap align-center justify-center fill-height class="mt-0">
                <v-flex xs12 md10>
                    <SponsorsHeader class="pa-0"/>
                    <SponsorsData class="pa-0" />
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import SponsorsHeader from '@/components/sponsors/header'
import SponsorsData from '@/components/sponsors/sponsorsData'
export default {
    components:{
        SponsorsHeader,
        SponsorsData
    }
}
</script>
