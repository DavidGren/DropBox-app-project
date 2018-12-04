<template>
<v-app class="login-wraper">
    <v-content>
    <h1>Sign in</h1>
      <v-text-field placeholder="Email" v-model="email" id="login" type="email" />
      <v-text-field placeholder="Password" v-model="password" id="password" type="password" />
      <router-link to="/login"><v-btn color="info">Go back</v-btn></router-link>
      <v-btn @click="singin()" color="success">Create account</v-btn>
    </v-content>
  </v-app>
</template>

<script>
import fb from 'firebase';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    singin() {
      fb.auth().createUserWithEmailAndPassword(this.email, this.password).then(
      () => this.$router.replace('login'))
      .catch(err => console.error('Error creating an account', err));
    }
  }

}
</script>

<style>

</style>

