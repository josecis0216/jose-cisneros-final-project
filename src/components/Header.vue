<template>
    <div>
    <v-toolbar color="blue lighten-1">
      <v-toolbar-title>
        Pokedex
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text><router-link to="/"></router-link>Home</v-btn>
        <v-btn text>List All</v-btn>
        <v-btn text>Contact</v-btn>
        <v-btn><router-link to="/about">About</router-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
</script>

<style>

</style>
