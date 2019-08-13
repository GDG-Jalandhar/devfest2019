<template>
  <v-content class="pa-0">
    <!-- <comingSoon/> -->
    <!-- <card /> -->
    <v-container fluid class="my-0 py-0 hidden-sm-and-up" >
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10 >
          <HomeStartScreenMobileView />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <v-container fluid class="my-0 py-0 hidden-sm-and-up" >
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10 >
          <mobileAnnouncement />
        </v-flex>
      </v-layout>
    </v-container> -->

    <!-- mobileAnnouncement -->

    <v-container fluid class="my-0 py-5 hidden-sm-and-down">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10 >
          <HomeStartScreen />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="hidden-sm-and-down grey lighten-4 py-5">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <stats />
        </v-flex>
      </v-layout>
    </v-container>


    <v-container fluid class="my-0 py-3 hidden-sm-and-down">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10 >
          <whatToDo />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-0 py-3 hidden-sm-and-down ">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10 >
          <FeatureSpeakers />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-0 py-3 hidden-sm-and-down ">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10 >
          <FeatureSessions />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="hidden-sm-and-down " >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <partners />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- FeatureSpeakers -->

  


  </v-content>
  
</template>

<script>
  import HomeStartScreen from '@/components/home/HomeStartScreen'
  import whatToDo from '@/components/home/whatToDo'
  import stats from '@/components/home/stats'
  import FeatureSpeakers from '@/components/home/FeatureSpeakers'
  import FeatureSessions from '@/components/home/FeatureSessions'
  import partners from '@/components/home/partners'
  // import comingSoon from '@/components/common/comingSoon'
  import HomeStartScreenMobileView from '@/components/home/HomeStartScreenMobileView'
  // import mobileAnnouncement from '@/components/home/mobile-announcement'
  // import AboutGDGChapter from '@/components/home/AboutGDGChapter'
  // import eventshowcase from '@/components/home/eventshowcase'
  // // import wtmInfo from '@/components/home/wtmInfo'
  // import partners from '@/components/home/partners'
  // import featureEvent from '@/components/home/featureEvent'
  
  export default {
    components: {
      HomeStartScreen,
      whatToDo,
      stats,
      // comingSoon,
      FeatureSpeakers,
      FeatureSessions,
      partners,
      // card,
      HomeStartScreenMobileView,
      // mobileAnnouncement,
      // whatWeDo,
      // AboutGDGChapter,
      // eventshowcase,
      // // wtmInfo,
      // partners,
      // featureEvent
    }
  }
</script>
