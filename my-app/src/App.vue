<template>
  <v-app>
    <app-header></app-header>
    <div class="circular" v-bind:style="{ backgroundImage: 'url(' + image + ')' }"></div>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data: () => ({
    image: 'http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png'
  })
}
</script>
