<template>
    <v-container class="mb-0 pb-0">
        <v-layout wrap align-start justify-start row fill-height class="pa-5">
            <v-flex xs12>
                <p class="google-font mb-1" style="font-weight: 350;color: #616161;font-size:200%"><b>Featured
                    <span style="color: #1a73e8;">Sessions</span> </b> 
                </p>

                
                <p class="google-font mt-1">Hone your skills. Ask technical questions. Get inspired. This year’s program is packed with breakouts, keynotes, spotlights, panels, and bootcamps. See More</p>
            </v-flex>
            <v-flex xs12 sm3 md3 lg3 v-for="(item,i) in SessionDeails.slice(0, 4)" :key="i" class="" >
                <!-- style="text-align:center;border: 1px solid #e0e0e0;min-height:250px;border-radius:7px" -->
                <v-hover>
                <div slot-scope="{ hover }"
                    style="border-radius: 5px; border:1px solid #e0e0e0;min-height:180px"
                    :class="`elevation-${hover ? 0 : 0}`"
                    class="ma-1 pa-3 my-0" >
                    <img src="https://www.gstatic.com/images/branding/product/1x/google_cloud_48dp.png" class="mb-0" width="30vh">
                    <p class="mt-0 mb-0 google-font" style="font-size:130%">{{item.title}}</p>
                    <p class="mt-1 mb-0 google-font">{{item.description | summery(90)}}</p>
                    <SessionDialog :data="{vdata: item}" />
                </div>
                </v-hover>
            </v-flex>
        </v-layout>



    </v-container>
</template>

<script>
import SessionDeails from '@/assets/data/sessions.json'
import SessionDialog from '@/components/common/SessionDialog'
export default {
    components:{
        SessionDialog
    },
    data() {
        return {
            SessionDeails: SessionDeails,
            showLoader: true,
            showData:false,
        }
    },
    mounted(){
        
    },
    methods:{
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        }
    }
}
</script>
