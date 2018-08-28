<template>
  <v-app dark>
    <v-toolbar
      color="toolbar"
      dark
      app
      :clipped-left="clipped">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
        <NavLinks />
    </v-toolbar>

    <v-content>

      <router-view/>

    </v-content>
  </v-app>
</template>

<script>
import NavLinks from './components/NavLinks.vue'

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      fixed: false,
      miniVariant: true,
      title: 'Loan-Dash',
      user: false
    }
  },
  components: {
    NavLinks
  },
  methods: {
    checkForUser () {
      const token = localStorage.getItem('userToken') || ''
      if (token !== '') {
        this.user = true
      }
    }
  }
}
</script>
