<template>
    <v-container class="px-3" >
        <v-layout wrap align-center justify-center row fill-heights>
           <v-flex xs12 class="px-5">
                <v-layout row wrap class="px-2" v-for="(itemp,i) in partnerData" :key="i">
                    <v-flex xs12 class="mx-1 mt-5" v-if="itemp.length>0">
                        <p class="google-font mb-0" style="font-size:130%;">{{i}}</p>
                    </v-flex>
                    <v-flex xs6 sm4 md6 lg2 v-for="(item,j) in itemp" :key="j" class=" mb-0" >
                        <div class="client-logo ma-1">
                            <a v-bind:href="item.link" target="_blank" v-if="itemp.length>0"  >
                                <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-img
                                    :src="getImgUrl(item.img)"
                                    :lazy-src="getImgUrl(item.img)"
                                    class="white"
                                    contain
                                    style="height:4em"
                                    v-on="on"
                                    >
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
                                </template>
                                <span class="google-font">{{item.name}}</span>
                                </v-tooltip>
                            </a>
                        </div>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import datap from '@/assets/data/partners.json'
export default {
    data() {
        return {
            partnerData: datap,
        }
    },
    methods:{
        getImgUrl(pic) {
            return require('@/assets/img/partners/'+pic)
        },
    }
}
</script>

<style scoped>
.client-logo{
    height: 80px;
    padding: 5px 10px;
    border-radius: 7px;
    border: 1px solid #ebebeb;
    text-align: center;
}

</style>
