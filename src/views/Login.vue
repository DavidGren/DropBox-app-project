<template>
  <div class="login">
    <h1>Login</h1>
    <label for="login">Login / email: </label>
      <input id="login" type="email" />
    <label for="password">Password: </label>
      <input id="password" type="password" />
    <router-link to="/home"><button>Create account</button></router-link>
    <router-link to="/sign-in"><button>Sign in</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style>

</style>

