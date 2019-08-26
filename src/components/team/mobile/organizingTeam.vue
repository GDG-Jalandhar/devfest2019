<template>
    <v-container fluid class="pa-0">
        <v-layout wrap align-start justify-start row fill-height class="mt-0 mb-0">
            <!-- text-xs-center  -->
            <v-flex xs12 sm3 md2 lg2 v-for="(item,i) in ShuffleData(TeamDetails)" :key="i" class="px-5 ma-0">
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
    },
    methods: {
        ShuffleData(TeamDetails) {
      let currentIndex = TeamDetails.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = TeamDetails[currentIndex];
        TeamDetails[currentIndex] = TeamDetails[randomIndex];
        TeamDetails[randomIndex] = temporaryValue;
      }
      return TeamDetails;
    },
    }
}
</script>
