<template>
    <v-content class="pa-0">
        <v-container class="pa-0">
            <v-layout row wrap align-center justify-center fill-height class="mt-0">
                <v-flex xs12 md10>
                    <SessionsHeader class="pa-0"/>
                    <SessionsData class="pa-0"/>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import SessionsHeader from '@/components/sessions/header'
import SessionsData from '@/components/sessions/sessions'
export default {
    components:{
        SessionsHeader,
        SessionsData
    }
}
</script>
