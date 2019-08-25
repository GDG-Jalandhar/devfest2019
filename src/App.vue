<template>
  <v-app>
     <v-snackbar
        v-model="snackWithButtons"
        :timeout="timeout"
        bottom
        left
        class="snack"
      >
        {{ snackWithBtnText }}
        <v-spacer />
        <v-btn
          dark
          text
          color="#00f500"
          @click.native="refreshApp"
        >
          {{ snackBtnText }}
        </v-btn>
        <v-btn
          icon
          @click="snackWithButtons = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
    </v-snackbar>


    <!-- v-if="!$route.meta.hideNavigation" -->
    <CoreToolbar  />
    <!-- <mobileToolbar class="hidden-sm-and-up" title="This is title"/> -->
    <CoreDrawer/>
    <CoreView />
    <CoreFooter class="pa-0"/>
    <!-- <CoreBottonNav/> -->

  </v-app>
</template>

<script>

import CoreToolbar from '@/components/common/toolbar'
import CoreView from '@/components/common/view'
// import mobileToolbar from '@/components/common/mobileToolbar'
// import CoreBottonNav from '@/components/common/bottomNav'
import CoreDrawer from '@/components/common/drawer'
import CoreFooter from '@/components/common/footer'

export default {
  name: 'App',
  components: {
    CoreToolbar,
    CoreView,
    // mobileToolbar,
    // CoreBottonNav,
    CoreFooter,
    CoreDrawer
  },
  data: () => ({
    refreshing: false,
    registration: null,
    snackBtnText: '',
    snackWithBtnText: '',
    snackWithButtons: false,
    timeout: 6000,
  }),
   created() {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
        this.refreshing = true;
      window.location.reload();
    });
  },
  methods:{
    showRefreshUI(e) {
      this.registration = e.detail;
      this.snackBtnText = 'Refresh';
      this.snackWithBtnText = 'New version available!';
      this.snackWithButtons = true;
    },
    refreshApp() {
      this.snackWithButtons = false;
      if (!this.registration || !this.registration.waiting) { return; }
      this.registration.waiting.postMessage('skipWaiting');
    }
  }
}
</script>

<style scoped>
.snack >>> .v-snack__content {
  padding-right: 16px;
}
</style>