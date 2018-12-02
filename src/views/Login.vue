<template>
  <v-app class="login-wraper">
    <v-content>
    <h1>Login</h1>
        <v-text-field placeholder="Email" id="login" type="email" />
        <v-text-field placeholder="Password" id="password" type="password" />
      <router-link to="/sign-in"><v-btn color="info">Create account</v-btn></router-link>
      <router-link to="/home"><v-btn color="info">Sign in</v-btn></router-link>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped>

</style>

