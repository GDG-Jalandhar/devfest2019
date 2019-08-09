<template>
    <div>
        <v-btn small class="mt-0 mx-0" icon v-if="(data.vdata.twitter).length>0" :href="data.vdata.twitter" target="_blank">
            <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
        </v-btn>

        <v-btn small class="mt-0 mx-0" icon v-if="(data.vdata.linkedin).length>0" :href="data.vdata.linkedin" target="_blank">
            <v-icon small style="color:#0077b5">fab fa-linkedin-in</v-icon>
        </v-btn>

        <v-btn small class="mt-0 mx-0" icon v-if="(data.vdata.github).length>0" :href="data.vdata.github" target="_blank">
            <v-icon small style="color:#333">fab fa-github</v-icon>
        </v-btn>
        <v-btn small class="mt-0 mx-0" icon v-if="(data.vdata.website).length>0" :href="data.vdata.website" target="_blank">
            <v-icon style="color:#333">link</v-icon>
        </v-btn>
    </div>
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
