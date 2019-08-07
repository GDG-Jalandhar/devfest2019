<template>
    <v-content class="pa-0">
        <v-container class="pa-0">
            <v-layout row wrap align-center justify-center fill-height class="mt-0">
                <v-flex xs12 md10>
                    <aboutHeader class="pa-0"/>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import aboutHeader from '@/components/about/header'
export default {
    components:{
        aboutHeader,
    }
}
</script>
