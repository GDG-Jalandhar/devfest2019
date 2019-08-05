<template>
    
    <div>
        <SpeakerHeader class="pa-0"/>
        <comingSoon class="my-5 pa-4"/>
        <br>
        <!-- <SpeakerDetails/> -->
    </div>
</template>

<script>
import SpeakerHeader from '@/components/speakers/header'
import SpeakerDetails from '@/components/speakers/speakers'
import comingSoon from '@/components/speakers/comingSoon'
export default {
    components:{
        SpeakerHeader,
        SpeakerDetails,
        comingSoon
    }
}
</script>
