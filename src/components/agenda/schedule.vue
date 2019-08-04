<template>
    <v-container class="pa-0" style="max-width: 900px;">
      
        <v-timeline
            align-top
            dense
            v-for="(item,i) in scheduleData" :key="i"
            class=""
        >
            <v-timeline-item
                :color="showColor(item.tag)"
                small 
            >
                <v-layout pt-3>
                    <v-flex xs3>
                        <strong class="google-font">{{item.startTime}}</strong>
                    </v-flex>
                    <v-flex xs9>
                        <strong class="google-font">{{item.topic}}</strong>
                        <div class="google-font">{{item.des}}</div>
                    </v-flex>
                </v-layout>
            </v-timeline-item>

        </v-timeline>


    </v-container>
</template>

<script>
import scheduledata from '@/assets/data/scheduleData.json'
export default {
    components:{
    },
    data() {
        return {
            scheduleData: scheduledata,
            showLoader: true,
            showData:false,
        }
    },
    mounted(){
        
    },
    methods:{
        showColor(tag){
            if(tag == "Web"){
                return "red"
            }
            else if(tag == "Mobile"){
                return "green"
            }
            else if(tag == "Cloud"){
                return "orange"
            }
        },
        showIcon(tag){
            if(tag == "Web"){
                return "code"
            }
            else if(tag == "Mobile"){
                return "stay_primary_portrait"
            }
            else if(tag == "Cloud"){
                return "cloud"
            }
        }
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        }
    }
}
</script>
