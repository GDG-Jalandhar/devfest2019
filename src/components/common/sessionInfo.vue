<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="700"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          text
          small
          v-on="on"
        >
          See More
        </v-btn>
      </template>

      <v-card color="px-5">
        <v-card-title
          class="px-5 white google-font"
          primary-title
        >
            asd
           <!-- <v-avatar size="80">
              <v-img
              :src="getImgUrl(data.vdata.image)"
              :lazy-src="getImgUrl(data.vdata.image)">

                  <v-layout
                      slot="placeholder"
                      fill-height
                      align-center
                      justify-center
                      ma-0
                  >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
              
              </v-img>
          </v-avatar>
          <span class="ml-4 my-5">
            <p class="my-0">{{data.vdata.name}} | {{data.vdata.id}}</p>
            <p class="my-0" style="font-size:70%">{{data.vdata.company.name}}</p>
          </span> -->
          
        </v-card-title>

        <v-card-text>
            {{data.vdata}}
        </v-card-text>

        <v-divider></v-divider>

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
    components:{
    },
    props:{
      data:{
        vdata:[]
      }
    },
    data () {
      return {
        dialog: false,
      }
    },
    mounted(){
    },
    methods:{
      getImgUrl(pic) {
          if(pic.length>0){
              return require('@/assets/img/speakers/'+pic)
          }else{
              return require('@/assets/img/common/avatar.png')
          }
      },
    }
  }
</script>