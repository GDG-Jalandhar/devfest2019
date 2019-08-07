<template>
    <!-- style="border:1px solid #9e9e9e;border-radius:7px" -->
    <v-container class=" px-3" >
        <v-layout wrap align-center justify-center row fill-heights>

            <v-flex xs12 sm12 md12 lg12 xl12 order-xs2 order-md1 class="pa-5">
              <v-layout row wrap>
                  <v-flex xs12 xs6 sm4 md3 lg3 v-for="(item,index) in sessionsData" :key="item">
                    <div style="border-radius: 5px; border:1px solid #e0e0e0;min-height:180px" class="ma-1 pa-5">
                        <p class="google-font mb-1" style="font-size:120%">{{item.title}}</p>
                        <p class="google-font">{{item.description | summery(90)}}</p>
                    </div>
                  </v-flex>
              </v-layout>
            </v-flex> 

           
        </v-layout>


    </v-container>
</template>

<script>
import sessionsData from '@/assets/data/sessions.json'
export default {
    data() {
        return {
            sessionsData:sessionsData
        }
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        }
    }
}
</script>
