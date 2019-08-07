<template>
    <v-content class="pa-0">
        <v-container class="pa-0">
            <v-layout row wrap align-center justify-center fill-height class="mt-0">
                <v-flex xs12 md10>
                    <communityGuidelinesHeader class="pa-0"/>
                    <communityGuidelinesSection class="pa-0"/>
                    <coc class="pa-0"/>
                    <antiHarPolicy class="pa-0" />
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import communityGuidelinesHeader from '@/components/communityGuidelines/header'
import coc from '@/components/communityGuidelines/coc'
import antiHarPolicy from '@/components/communityGuidelines/antiHarPolicy'
import communityGuidelinesSection from '@/components/communityGuidelines/guidelines'
export default {
    components:{
        communityGuidelinesHeader,
        communityGuidelinesSection,
        antiHarPolicy,
        coc
    }
}
</script>
