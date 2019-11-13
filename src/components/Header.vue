<template>
    <div>
    <v-toolbar color="blue lighten-1">
      <v-toolbar-title>
        Pokedex
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text><router-link to="/" style="text-decoration: none; color: black;" active-class="active" exact>Home</router-link></v-btn>
        <v-btn text>List All</v-btn>
        <v-btn text><router-link to="/contact" style="text-decoration: none; color: black;" active-class="active">Contact</router-link></v-btn>
        <v-btn text><router-link to="/about" style="text-decoration: none; color: black;" active-class="active">About</router-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
</script>

<style>

</style>
