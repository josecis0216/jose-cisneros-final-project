<template>
  <v-app>
      <app-header></app-header>
      <hr>
      <app-footer></app-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data: () => ({

  })
}
</script>

<style scoped>
  body {
    margin: 0 25 0 25;
  }
</style>
