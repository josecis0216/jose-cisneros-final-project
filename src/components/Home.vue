<template>
    <v-app>
        <app-header></app-header>
        <contact-page></contact-page>
        <hr>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'

export default {
  name: 'App',
  components: {
    'app-header': Header,
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
