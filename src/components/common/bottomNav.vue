<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    shift
    app
    color="deep-purple accent-4"
    class="hidden-sm-and-up"
  >
    <v-btn
      value="Home"
      router
      to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn 
        value="Schdule"
        router
        to="/schedule">
      <span>Schedule</span>
      <v-icon>mdi-format-float-left</v-icon>
    </v-btn>

    <v-btn
        value="Speakers"
        router
        to="/speakers">
      <span>Speakers</span>
      <v-icon>mdi-account-switch</v-icon>
    </v-btn>

    <v-btn
    value="Team"
        router
        to="/team">
      <span>Team</span>
      <v-icon>mdi-account-settings</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {
        activeBtn: 1,
      }
    },
  }
</script>