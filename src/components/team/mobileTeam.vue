<template>
  <v-card class="elevation-0">
  
    <v-tabs
      v-model="tab"
      background-color="grey lighten-3"
      centered
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Organizing Team
      </v-tab>

      <v-tab href="#tab-2">
        Core Team
      </v-tab>

      <v-tab href="#tab-3">
        Volunteers 
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        value="tab-1"
      >
        <v-card flat class="px-4 elevation-0 mb-4">
          <organizingTeam/>
        </v-card>
      </v-tab-item>

      <v-tab-item
        value="tab-2"
      >
        <v-card flat class="pa-4 elevation-0">
          <coreTeam/>
        </v-card>
      </v-tab-item>

      <v-tab-item
        value="tab-3"
      >
        <v-card flat class="pa-4 elevation-0">
            <volunteerDetails/>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import coreTeam from '@/components/team/mobile/coreTeam'
import volunteerDetails from '@/components/team/mobile/volunteerTeam'
import organizingTeam from '@/components/team/mobile/organizingTeam'

  export default {
    components:{
        coreTeam,
        volunteerDetails,
        organizingTeam
    },
    data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>