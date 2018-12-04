<template>
  <v-app class="login-wraper">
    <v-content>
    <h1>Login</h1>
        <v-text-field @keyup.enter="login()" placeholder="Email" v-model="email" id="login" type="email" />
        <v-text-field @keyup.enter="login()" placeholder="Password" v-model="password" id="password" type="password" />
      <router-link to="/sign-in"><v-btn color="info">Create account</v-btn></router-link>
      <v-btn @click="login()" color="success">Sign in</v-btn>
    </v-content>
  </v-app>
</template>

<script>
import fb from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      fb.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.$router.replace('/home');
        }
      )
      .catch(err => console.error('Login error', err));
    }
  }

}
</script>

<style scoped>

</style>

