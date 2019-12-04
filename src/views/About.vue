<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer
    },
  }
</script>