<template>
  <!-- show buttons if no user is logged in -->
  <span>
    <v-toolbar-items>
      <v-btn flat :to="{name: 'login' }">Login</v-btn>
      <v-btn flat :to="{name: 'signup' }">Signup</v-btn>
      <v-btn flat @click="logout">LogOut</v-btn>
  </v-toolbar-items>
  </span>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
