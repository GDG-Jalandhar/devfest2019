<template>
  <v-card
    flat
    class="mx-auto my-1 "
    max-width="374"
    height="90%"
  >
    <v-img
      height="250"
      :src="require('@/assets/img/devfest-logo.jpg')"
      :lazy-src="require('@/assets/img/devfest-logo.jpg')"
    ></v-img>

    <v-card-title class="google-font">GDG DevFest Punjab 2019</v-card-title>
    <v-card-text>
      <div class="my-0 subtitle-1 black--text google-font">
        GDG Jalandhar & GDG Chandigarh
      </div>

      <div class="google-font">DevFests are community-led, developer events hosted by GDG chapters around the globe focused on community building and learning about Google’s technologies.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text class="google-font">
      <div class="subtitle-1 text--primary">28th Setember, Chandigarh</div>
      <v-chip-group
        small
      >
        <v-chip >#DevFestPunjab</v-chip>
        <v-chip >#DevFest</v-chip>
        <!-- <v-chip small outlined>#GDGJalandhar</v-chip>
        <v-chip small outlined>#GDGChandigarh</v-chip> -->
      </v-chip-group>
    </v-card-text>

    <v-card-actions class="text-center px-4">
        <p class="google-font">Registration Comming Soon...</p>
      <!-- <v-btn
        dark
        color="primary"
      >
        Request for an Invitation 
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>