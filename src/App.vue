<template>
  <v-app class="grey lighten-3">
    <Navbar />
    <v-content class="mx-5 mb-4">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
  name: 'App',
  components:{
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>
