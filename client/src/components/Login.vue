<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h1>User Login</h1>
        <v-form
          light
          v-if="!loading"
          v-model="valid"
          @submit.prevent="login"
          @keydown.prevent.enter
          >
            <v-text-field
              v-model="user.username"
              :rules="notEmptyRules"
              label="Username"
              required
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              :rules="notEmptyRules"
              label="Password"
              type="password"
              required
            ></v-text-field>
          <v-btn type="submit" :disabled='!valid'>Login</v-btn>
          <v-btn @click="cancelLogin">Cancel</v-btn>
        </v-form>
          <!-- progress and error elements -->
          <ProgressBar v-if="loading" />
          <h1 v-if="fetchError">Oh no! The server is unavailable for some reason.</h1>
      </v-layout>
    </v-slide-y-transition>
  </v-container>

</template>

<script>

import ProgressBar from './ProgressBar.vue'

export default {
  name: 'login',
  components: {
    ProgressBar
  },
  data: (vm) => ({
    valid: false,
    loading: false,
    fetchError: false,
    user: {
      username: '',
      password: ''
    },
    notEmptyRules: [(value) => !!value || 'Cannot be empty.']
  }),
  methods: {
    cancelLogin () {
      this.$router.push('/')
    },
    login () {
      // spinner on before fetch
      this.loading = true
      this.$axios.post('/login', this.user).then((response) => {
        this.loading = false
        localStorage.setItem('userToken', response.data.token)
        localStorage.setItem('userId', response.data.user.id)
        this.$axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
        this.$axios.defaults.headers.common['access-token'] = response.data.token
        this.$router.push('/dashboard')
      }).catch(() => {
        this.loading = false
        this.fetchError = true
      })
    }
  }
}
</script>
