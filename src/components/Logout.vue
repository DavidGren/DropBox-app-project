<template>
  <v-container>
    <div id="photo" />
    <v-btn color="info" @click="logout()">Log out</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Logout',
  methods: {
    logout() {
      this.$router.replace('/login');
    }
  }
}
</script>

<style>
#photo {
  position: absolute;
  right: 150px;
  width: 50px;
  height: 50px;
  border: 1px solid #ddd;
  padding: 1px;
  box-shadow: 2px 2px 2px #999;
  background: url('../assets/logo.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin: 0 10px;
}
</style>
