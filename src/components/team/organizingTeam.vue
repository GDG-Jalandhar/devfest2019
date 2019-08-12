<template>
    <v-container fluid class="pa-0">
        <v-layout wrap align-start justify-start row fill-height class="mt-0 mb-0">
            <v-flex xs6 sm3 md2 lg2 v-for="(item,i) in TeamDetails" :key="i" class="text-xs-center px-5" style="text-align:center">
                <TeamDetailsDialog :data="{vdata:item}"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import TeamDetails from '@/assets/data/organizingTeam.json'
import TeamDetailsDialog from '@/components/team/teamDetails'
export default {
    components:{
        TeamDetailsDialog
    },
    data() {
        return {
            TeamDetails: TeamDetails,
            showLoader: true,
            showData:false,
        }
    }
}
</script>
