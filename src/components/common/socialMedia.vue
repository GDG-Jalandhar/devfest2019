<template>
    <v-flex xs12 class="pa-0 ma-0">
        <v-btn aria-label="social media btn" small class="mt-0 mx-0" icon v-if="data.vdata.twitter" :href="data.vdata.twitter" target="_blank">
            <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
        </v-btn>

        <v-btn aria-label="social media btn" small class="mt-0 mx-0" icon v-if="data.vdata.linkedin" :href="data.vdata.linkedin" target="_blank">
            <v-icon small style="color:#0077b5">fab fa-linkedin-in</v-icon>
        </v-btn>
        
        <v-btn aria-label="social media btn" small class="mt-0 mx-0" icon v-if="data.vdata.github" :href="data.vdata.github" target="_blank">
            <v-icon small style="color:#333">fab fa-github</v-icon>
        </v-btn>
        
        <!-- <br class="hidden-sm-and-up"> -->

        <v-btn aria-label="social media btn" small class="mt-0 mx-0" icon v-if="data.vdata.website" :href="data.vdata.website" target="_blank">
            <v-icon style="color:#333">mdi-link</v-icon>
        </v-btn>

        <v-btn aria-label="social media btn" small class="mt-0 mx-0" icon v-if="data.vdata.medium" :href="data.vdata.medium" target="_blank">
            <v-icon small style="color:#1da1f2">fab fa-medium</v-icon>
        </v-btn>
    </v-flex>
</template>

<script>
export default {
    props:{
        data:{
            vdata:[]
        }
    }
}
</script>
