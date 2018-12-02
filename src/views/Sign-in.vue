<template>
<v-app class="login-wraper">
    <v-content>
    <h1>Sign in</h1>
        <v-text-field placeholder="Email" id="login" type="email" />
        <v-text-field placeholder="Password" id="password" type="password" />
      <router-link to=""><v-btn color="info">Create account</v-btn></router-link>
      <router-link to="/login"><v-btn color="info">Go back</v-btn></router-link>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'SignIn',

}
</script>

<style>

</style>

