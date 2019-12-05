<template>
  <div class="home">
    <weatherWidget />
    <peopleFetch />
  </div>
</template>

<script>
import weatherWidget from '@/components/weatherWidget.vue';
import peopleFetch from '@/components/Home.vue'; 

export default {
  name: "home",
  components: {
    weatherWidget,
    peopleFetch
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
