<template>
  <v-app>
    <app-header></app-header>
    <div class="circular" v-bind:style="{ backgroundImage: 'url(' + image + ')' }"></div>
    <!-- <contact-page></contact-page> -->
    <app-footer></app-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Footer from './components/Footer'
// import Contact from './components/Conatact'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    // 'contact-page': Contact
  },
  data: () => ({
    image: 'http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png'
  })
}
</script>
