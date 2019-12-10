<template>
    <v-container>
      <v-row>
        <v-col cols="12" lg="6">
          <weatherWidget />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6">
          <peopleFetch />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import weatherWidget from '@/components/weatherWidget.vue';
import peopleFetch from '@/components/People.vue'; 

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
