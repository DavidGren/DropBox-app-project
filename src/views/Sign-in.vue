<template>
  <div class="login">
    <h1>Sign in</h1>
    <label for="login">Login / email: </label>
      <input id="login" type="email" />
    <label for="password">Password: </label>
      <input id="password" type="password" />
    <router-link to="/login"><button>Go back</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'SignIn',

}
</script>

<style>

</style>

