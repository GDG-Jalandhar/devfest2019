<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="800"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon  v-on="on">
          <v-icon>mdi-apps</v-icon>
        </v-btn>
      </template>

      <v-card class="px-5 google-font" >
        <v-card-title
          class="headline google-font"
        >
          What's New in #DevFestPunjab?          
        </v-card-title>

        <v-card-text class="">
          <p class="google-font" style="font-size:80%">Version: 1.0.0</p>
          
          <v-layout row wrap class="mb-3">
            <v-flex xs12 class="">
              <p class="google-font mb-1 px-4" style="font-size:120%"><b>Now Available on:</b></p>
            </v-flex>
            <v-flex xs12 sm6 md6 class="pl-0" v-for="(item,i) in appAvailableData" :key="i">
              <div class="ma-1">
                <v-card
                  class="mx-auto"
                  max-width="344"
                  outlined
                >
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="overline mb-4">{{item.tag}}</div>
                      <v-list-item-title class=" mb-1 google-font" style="font-size:140%">{{item.title}}</v-list-item-title>
                      <v-list-item-subtitle>{{item.des}}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                      tile
                      size="80"
                    >
                    <img :src="item.img" alt="" srcset="">
                    </v-list-item-avatar>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn text :href="item.link" target="_blank">See More</v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </v-flex>
          </v-layout>

          <v-layout row wrap class="mt-5">
            <v-flex xs12 class="">
              <p class="google-font mb-1 px-4" style="font-size:120%"><b>Announcements</b></p>
            </v-flex>
            <v-flex xs12 sm6 md4 v-for="(item,i) in updatesData" :key="i" class="px-1">
              <div style="border-radius: 5px; border:1px solid #e0e0e0;" class="ma-1 pa-4">
                <p class="google-font mb-0" style="font-size:120%">{{item.title}}</p>
                <a :href="item.link" style="text-decoration:none;" target="_blank">Link</a>
              </div>
            </v-flex>
          </v-layout>
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
    data () {
      return {
        dialog: false,
        appAvailableData:[
          {
            "title":"Talk to DevFest Punjab",
            "tag":"Google Assistant",
            "des":"Now You can find the details about devfest punjab on Google Assistant",
            "link":'https://assistant.google.com/services/a/uid/000000a6f27a8909?hl=en_in',
            "img":'https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png'
          }
        ],
        updatesData:[
          {
            "title":"Call For Speakers",
            "des":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam odit consequuntur velit nostrum ad illum enim, placeat sequi beatae dolor ullam repudiandae possimus eos atque magnam ut et porro!",
            "link":""
          },
          {
            "title":"Speakers Update",
            "des":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam odit consequuntur velit nostrum ad illum enim, placeat sequi beatae dolor ullam repudiandae possimus eos atque magnam ut et porro!",
            "link":""
          },
          {
            "title":"Speakers Update",
            "des":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam odit consequuntur velit nostrum ad illum enim, placeat sequi beatae dolor ullam repudiandae possimus eos atque magnam ut et porro!",
            "link":""
          }
        ]
      }
    },
  }
</script>