<template>
    <v-app>
    <v-toolbar app id="header">
      <v-toolbar-title class="headline text-uppercase">
        <span>Dashboard</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <Logout />
      </v-toolbar-title>
    </v-toolbar>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6>
          <v-card>
            <Clock />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import Clock from '@/components/Clock.vue'
  import Logout from '@/components/Logout.vue'

  export default {
    components: {
      Clock,
      Logout
    }
  }
</script>
<style>
</style>
