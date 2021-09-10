<template>
  <v-container fluid>
    <v-app-bar color="purple accent-4" dark>
      <v-spacer />
      <v-btn outlined class="ml-3"><router-link class="nav" to="/">Главная</router-link></v-btn>
      <v-btn outlined class="ml-3"
        ><router-link class="nav" to="/photo">Фотографии</router-link></v-btn
      >
    </v-app-bar>
  </v-container>
</template>
<script></script>
<style scoped>
.nav {
  text-decoration: none;
  color: white;
}
</style>
