<template>
  <AppLayout show-help show-feedback :mini-variant.sync="miniVariant" :apps="apps" :current-app.sync="currentApp">
    <template #fallback-app>
      <v-icon>mdi-bird</v-icon>
    </template>
    <template #navigation-main>
      <v-list nav>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-bird</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Sparrow </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-bird</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Robin </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-bird</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Starling </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
    <template #toolbar-main>
      <v-text-field hide-details solo-inverted dense />
    </template>
    <template #usermenu>
      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Hugo Boss </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-flag</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> English </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-flag</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> FranÇais </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-flag</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Deutsch </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
    <v-main>
      <Nuxt />
    </v-main>
  </AppLayout>
</template>
<script>
export default {
  data() {
    return {
      miniVariant: false,
      currentApp: { title: 'Birds', color: '#FF0000' },
      apps: [
        { title: 'Birds', color: '#FF0000' },
        { title: 'Apes', color: '#00FF00' },
        { title: 'Tigers', color: '#0000FF' },
      ],
    }
  },
}
</script>
