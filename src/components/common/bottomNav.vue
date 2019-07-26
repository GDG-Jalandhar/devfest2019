<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    app
    color="teal"
    class="hidden-sm-and-up"
  >
    <v-btn>
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Recents</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>
      <v-icon>mdi-mixer</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>
      <v-icon>mdi-access-point</v-icon>
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