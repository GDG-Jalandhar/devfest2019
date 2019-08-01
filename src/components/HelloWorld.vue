<template>
  <v-container>
    <v-layout
      row
      wrap
      class="pa-0"
    >
      <v-flex xs12 md12>
        <v-img
          :src="require('../assets/devfest.jpg')"
          class="mt-0"
          
          height="500"
        ></v-img>
      </v-flex>

      <v-flex xs12 md6 offset-md3 mb-4 mt-4 text-center>
        <h1 class="google-font mb-3">
          DevFest Punjab 2019
        </h1>
        <p class="subheading font-weight-regular google-font">
          DevFests are community-led, developer events hosted by GDG chapters around the globe focused on community building and learning about Google’s technologies. Each DevFest is inspired by and uniquely tailored to the needs of the developer community and region that hosts it.
          
        </p>

        <p class="subheading font-weight-regular google-font">
         <b>Powered By: </b> GDG Jalandhar & GDG Chandigarh 
          
        </p>

      </v-flex>

    
     
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
   
  }),
};
</script>
