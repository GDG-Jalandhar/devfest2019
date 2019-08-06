<template>
    <div>
        <v-btn small class="mt-0 mx-0" text icon v-if="(data.vdata.twitter).length>0" :href="data.vdata.twitter" target="_blank">
            <v-icon small style="color:#1da1f2">mdi-twitter</v-icon>
        </v-btn>

        <v-btn class="mt-0 mx-0" small text icon v-if="(data.vdata.linkedin).length>0" :href="data.vdata.linkedin" target="_blank">
            <v-icon small style="color:#0077b5">mdi-linkedin</v-icon>
        </v-btn>

        <v-btn class="mt-0 mx-0" small text icon v-if="(data.vdata.github).length>0" :href="data.vdata.github" target="_blank">
            <v-icon small style="color:#333">mdi-github-circle</v-icon>
        </v-btn>
        <v-btn class="mt-0 mx-0" small text icon v-if="(data.vdata.website).length>0" :href="data.vdata.website" target="_blank">
            <v-icon small style="color:#333">mdi-link</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    props:{
        data:{
            data:[]
        }
    }
}
</script>
