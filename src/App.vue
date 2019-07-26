<template>
  <v-app>
    <CoreToolbar/>
    <CoreView/>

  </v-app>
</template>

<script>

import CoreToolbar from '@/components/common/toolbar'
import CoreView from '@/components/common/view'

export default {
  name: 'App',
  components: {
    CoreToolbar,
    CoreView
  },
  data: () => ({
    //
  }),
};
</script>
