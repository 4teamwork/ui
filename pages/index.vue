<template>
  <v-container>
    <h1>Content</h1>
    <p><router-link :to="localePath({ name: 'serverside-collection' })"> Serverside Collection </router-link></p>
    <p><router-link :to="localePath({ name: 'input' })"> Input fields </router-link></p>
    <p><router-link :to="localePath({ name: 'modal' })"> Modals </router-link></p>
  </v-container>
</template>

<script>
export default {}
</script>
