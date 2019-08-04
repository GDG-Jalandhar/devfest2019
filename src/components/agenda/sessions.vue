<template>
    <v-container class="pa-0">
        <v-layout wrap align-start justify-start row fill-height class="mt-0 mb-0">
            <v-flex xs12>
                <p class="google-font mt-2 mb-0" style="font-size:170%;color:#37474F;" >Featured Sessions </p>
                <p class="google-font">Hone your skills. Ask technical questions. Get inspired. This year’s program is packed with breakouts, keynotes, spotlights, panels, and bootcamps. See More</p>
            </v-flex>
            <v-flex xs12 sm3 md3 lg3 v-for="(item,i) in SessionDeails" :key="i" class="" >
                <!-- style="text-align:center;border: 1px solid #e0e0e0;min-height:250px;border-radius:7px" -->
                <v-hover>
                <div slot-scope="{ hover }"
                    style="border-radius: 5px; border:1px solid #e0e0e0;min-height:180px"
                    :class="`elevation-${hover ? 5 : 0}`"
                    class="ma-1 pa-3 my-0" >
                    <img src="https://www.gstatic.com/images/branding/product/1x/google_cloud_48dp.png" class="mb-0" width="30vh">
                    <p class="mt-0 mb-0 google-font" style="font-size:130%">{{item.title }}</p>
                    <p class="mt-1 mb-0 google-font">{{item.des | summery(90)}}</p>
                    <SessionDialog :data="{jsonData: item}" />
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
