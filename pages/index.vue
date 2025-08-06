<template>
  <v-container>
    <h1>Content</h1>
    <p><router-link :to="localePath({ name: 'serverside-collection' })"> Serverside Collection </router-link></p>
    <SelectSwitcher v-model="active" :items="items" jump />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'],
    }
  },
}
</script>
