<template>
  <v-container>
    <h1>Content</h1>
    <SystemBarAlert :item="item" />
    <p><router-link :to="localePath({ name: 'serverside-collection' })"> Serverside Collection </router-link></p>
    <p><router-link :to="localePath({ name: 'input' })"> Input fields </router-link></p>
    <p><router-link :to="localePath({ name: 'modal' })"> Modals </router-link></p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      item: {
        background_color: '#00EEFF',
        icon: 'information',
        text: 'Hello world!',
        text_color: '#FFFFFF',
      },
    }
  },
}
</script>
