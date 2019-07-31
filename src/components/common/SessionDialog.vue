<template>
  <div >
    <v-dialog
      v-model="dialog"
      width="600"
      
    >
      <template class="red" v-slot:activator="{ on }">
        <p
          color="blue"
          style="cursor: pointer;color:blue"
          class="ma-0 mt-2 mb-0"
          v-on="on"
        >
          See More
        </p>

        <!-- <v-btn
          small
          outline
          dark
          color="grey"
          class="ma-0 mt-2"
          v-on="on"
        >
          see more
        </v-btn> -->
      </template>

      <v-card>
        <v-card-title
          class="headline google-font white"
          primary-title
        > 
          <p class="google-font">{{data.jsonData.title}}</p>
        </v-card-title>

        <v-card-text class="">
          <p class="google-font mb-1" style="font-size:130%"><b>Description:</b></p>
          <p class="google-font mb-0" style="font-size:120%">{{data.jsonData.des}}</p>

        </v-card-text>

        <!-- <v-divider></v-divider> -->

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props:{
        data:{
            jsonData:[]
        }
    },
    data () {
      return {
        dialog: false
      }
    }
  }
</script>