<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h1>Signup</h1>
        <v-form
          v-if="!loading"
          v-model="valid"
          @submit.prevent="signUp"
          @keydown.prevent.enter
          >
            <v-text-field
              v-model="user.username"
              :rules="notEmptyRules"
              label="Username*"
              required
            ></v-text-field>
            <v-text-field
              v-model="user.businessName"
              :rules="notEmptyRules"
              label="Business Name*"
              required
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              :rules="notEmptyRules"
              label="Password*"
              type="password"
              required
            ></v-text-field>
            <v-text-field
              :rules="confirmPasswordRules"
              label="Confirm Password*"
              type="password"
              required
            ></v-text-field>
            <v-text-field
              v-model="user.email"
              :rules="notEmptyRules"
              label="email*"
              required
            ></v-text-field>
            <v-btn type="submit" :disabled='!valid'>Sign Up</v-btn>
            <v-btn @click="cancelSignup">Cancel</v-btn>
          </v-form>
          <!-- progress and error elements -->
          <ProgressBar v-if="loading"/>
          <h1 v-if="fetchError">Oh no! The server is unavailable for some reason.</h1>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>

import ProgressBar from './ProgressBar.vue'

export default {
  name: 'SignUp',
  components: {
    ProgressBar
  },
  data: (vm) => ({
    valid: false,
    loading: false,
    fetchError: false,
    user: {
      username: '',
      password: '',
      businessName: '',
      email: ''
    },
    notEmptyRules: [(value) => !!value || 'Cannot be empty.'],
    confirmPasswordRules: [(confirmPassword) => confirmPassword === vm.user.password || 'Passwords must match.']
  }),
  methods: {
    cancelSignup () {
      this.$router.push('/')
    },
    signUp () {
      // spinner on before fetch
      this.loading = true
      this.$axios.post('/register', this.user).then((response) => {
        this.loading = false
        this.$router.push('/login')
      }).catch(() => {
        this.loading = false
        this.fetchError = true
      })
    }
  }
}
</script>
