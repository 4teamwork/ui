<template>
  <v-container>
    <h1>Modal</h1>
    <BaseModal :value="show" max-width="300">
      <div class="pa-3">
        <p class="pb-2">Base Modal</p>
        <v-btn @click="show = false"> Close </v-btn>
      </div>
      <template #activator="props">
        <v-btn v-bind="props" @click="show = true"> Open </v-btn>
      </template>
    </BaseModal>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
}
</script>
