<template>
  <v-content class="white">
    <v-slide-y-reverse-transition>
      <router-view v-show="show"  />
    </v-slide-y-reverse-transition>
  </v-content>
</template>

<script>
export default {
  created(){
   this.show = true
  }
}
</script>