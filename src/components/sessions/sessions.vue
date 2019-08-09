<template>
    <!-- style="border:1px solid #9e9e9e;border-radius:7px" -->
    <v-container class=" px-3" >
        <v-layout wrap align-center justify-center row fill-heights>

            <v-flex xs12 sm12 md12 lg12 xl12 class="pa-5">
              <v-layout row wrap class="pa-3">
                  <v-flex xs12 sm4 md4 lg3 v-for="(item,index) in sessionsData" :key="index">
                    <div style="border-radius: 5px; border:1px solid #e0e0e0;min-height:180px" class="ma-1 pa-5">
                        <v-chip :color="item.tag.color" label outlined class="mt-1 mb-0" small>{{item.tag.name}}</v-chip>
                        <sessionDialog class="mx-0 mb-0 pa-0" :data="{vdata:item}" />
                    </div>
                  </v-flex>
              </v-layout>
            </v-flex> 

           
        </v-layout>


    </v-container>
</template>

<script>
import sessionsData from '@/assets/data/sessions.json'
import sessionDialog from '@/components/common/sessionDialog'
export default {
    components:{
        sessionDialog
    },
    data() {
        return {
            sessionsData:sessionsData,
            sessionDialog:sessionDialog
        }
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        }
    }
}
</script>
