<template>
  <v-container class="px-3">
    <v-layout wrap align-center justify-center row fill-heights>
      <v-flex xs12 sm12 md12 lg12 xl12 class="pa-5">
        <v-layout row wrap class="px-3">
          <v-timeline>
            <!-- <v-flex xs12 sm12 md12 lg12 v-for="(item,index) in scheduleData" :key="index"> -->
            <v-timeline-item v-for="(item,index) in scheduleData" :key="index" :color="item.color">
              <template v-slot:opposite>
                <span>{{ item.startTime }}</span>
              </template>
              <div
                style="border-radius: 5px; border:1px solid #e0e0e0;min-height:80px"
                class="google-font ma-1 pa-5">
                <v-list-item-content>
                  <v-list-item-title class="google-font" style="font-size:110%;color:#424242">
                    <b>{{ item.topic | summary(30)}}</b>
                    &nbsp;{{item.venue}}
                    <v-chip class="white--text ml-0" :color="item.color" label v-if="item.duration<60" small> {{ item.duration }} min</v-chip>
                    <v-chip label class="white--text ml-0" :color="item.color" v-else small> {{ item.duration/60 }} hour</v-chip>
                  </v-list-item-title>
                  <p style="font-size:90%">{{ item.des | summary(100) }}</p>
                </v-list-item-content>
              </div>
            </v-timeline-item>
            <!-- </v-flex> -->
          </v-timeline>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import scheduleData from "@/assets/data/scheduleData.json";
export default {
  data: () => ({
    scheduleData: scheduleData
  }),
  filters: {
    summary: (val, num) => {
      if (val.length > num) {
        return val.substring(0, num) + "...";
      } else {
        return val;
      }
    }
  }
};
</script>
