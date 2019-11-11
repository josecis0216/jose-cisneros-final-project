<template>
    <v-app>
        <contact-page></contact-page>
        <hr>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Footer from './Footer'
import Contact from './Contact'

export default {
  name: 'App',
  components: {
    'app-footer': Footer,
    'contact-page': Contact
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
