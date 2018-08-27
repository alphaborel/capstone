<template>
  <v-app dark>
    <v-toolbar
      color="toolbar"
      dark
      app
      :clipped-left="clipped">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- show buttons if no user is logged in -->
      <v-toolbar-items v-if="!user">
      <v-btn flat :to="{name: 'login' }">Login</v-btn>
      <v-btn flat :to="{name: 'signup' }">Signup</v-btn>
      </v-toolbar-items>

      <!-- show logout for authenticated user -->
      <v-toolbar-items v-if="user">
      <v-btn flat @click="logout">LogOut</v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <v-content>

      <router-view/>

    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  mounted () {
    const token = localStorage.getItem('userToken') || ''
    console.log('mounted method', token)
    if (token !== '') {
      this.user = true
    }
  },
  data () {
    return {
      clipped: false,
      fixed: false,
      miniVariant: true,
      title: 'Loan-Dash',
      user: false
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
