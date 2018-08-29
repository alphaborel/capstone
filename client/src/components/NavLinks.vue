<template>
  <!-- show buttons if no user is logged in -->
  <span>
    <v-toolbar-items>
      <v-btn flat :to="{name: 'login' }">Login</v-btn>
      <v-btn flat :to="{name: 'signup' }">Signup</v-btn>
    </v-toolbar-items>

  <!-- show logout for authenticated user -->
  <v-toolbar-items>
    <v-btn flat @click="logout">LogOut</v-btn>
  </v-toolbar-items>
  </span>
</template>

<script>
export default {
  computed: {
    userLoggedIn () {
      const token = localStorage.getItem('userToken')
      console.log(token)
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
