<template>
  <v-content class="pa-0">
    <!-- <comingSoon/> -->
    <!-- <card /> -->


    <v-container fluid class="my-0 py-3">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10 >
          <HomeStartScreen />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="hidden-sm-and-down ">
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

    
    <!-- <v-container fluid style="background-color:#F9F9F9" >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <whatWeDo />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="background-color:#4C4A78" >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <AboutGDGChapter />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <eventshowcase />
        </v-flex>
      </v-layout>
    </v-container>
  
    <v-container fluid class="py-5" style="background-color:#F9F9F9">
      <v-layout wrap align-start justify-start row fill-height>
        <v-flex xs12 md10 offset-md1 offset-lg1 >
          <p class="google-font mb-2" style="font-size:150%">Our Feature Event & Meetup</p>
        </v-flex>
        <v-flex xs12 md10 offset-md1 offset-lg1 >
          <featureEvent />
        </v-flex>
      </v-layout>
    </v-container> -->
    
     <!-- <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <wtmInfo />
        </v-flex>
      </v-layout>
    </v-container> -->

    <!-- <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <partners />
        </v-flex>
      </v-layout>
    </v-container> -->

    


  </v-content>
  
</template>

<script>
  import HomeStartScreen from '@/components/home/HomeStartScreen'
  import whatToDo from '@/components/home/whatToDo'
  import stats from '@/components/home/stats'
  import FeatureSpeakers from '@/components/home/FeatureSpeakers'
  import FeatureSessions from '@/components/home/FeatureSessions'
  import partners from '@/components/home/partners'
  import card from '@/components/common/card'
  import comingSoon from '@/components/common/comingSoon'
  // import whatWeDo from '@/components/home/whatWeDo'
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
      comingSoon,
      FeatureSpeakers,
      FeatureSessions,
      partners,
      card
      // whatWeDo,
      // AboutGDGChapter,
      // eventshowcase,
      // // wtmInfo,
      // partners,
      // featureEvent
    }
  }
</script>
