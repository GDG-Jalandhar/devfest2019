<template>
  <v-app>
    <CoreToolbar/>
    <CoreDrawer/>
    <CoreView class="mt-3"/>
    <CoreBottonNav/>
    <CoreFooter class="pa-0"/>

  </v-app>
</template>

<script>

import CoreToolbar from '@/components/common/toolbar'
import CoreView from '@/components/common/view'
import CoreBottonNav from '@/components/common/bottomNav'
import CoreDrawer from '@/components/common/drawer'
import CoreFooter from '@/components/common/footer'

export default {
  name: 'App',
  components: {
    CoreToolbar,
    CoreView,
    CoreBottonNav,
    CoreFooter,
    CoreDrawer
  },
  data: () => ({
    //
  }),
};
</script>
