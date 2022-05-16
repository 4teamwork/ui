<template>
  <v-menu v-model="menuOpen" offset-y transition="slide-x-transition" :disabled="!hasApps">
    <template v-slot:activator="{ on, attrs }">
      <v-hover v-slot:default="{ hover }">
        <v-btn
          depressed
          height="50px"
          min-width="50px"
          class="pa-0"
          tile
          v-bind="attrs"
          :color="currentAppColor ? null : 'primary'"
          :style="{ 'background-color': hover || menuOpen ? '' : currentAppColor }"
          v-on="on"
        >
          <v-icon v-if="hasApps && (hover || menuOpen)" color="primary"> mdi-apps </v-icon>
          <img
            v-else-if="currentApp"
            style="max-height: 50px; max-width: 50px"
            :src="base64ImageURI(currentApp.svg_icon)"
          />
          <slot v-else name="fallback-app" />
        </v-btn>
      </v-hover>
    </template>
    <v-card v-if="hasApps" data-testid="app-switcher-apps-list">
      <v-card-text class="pa-0">
        <v-list dense class="extra-dense">
          <v-subheader class="px-4">{{ $t('appSwitcher.yourApplications') }}</v-subheader>
          <v-list-item
            v-for="(app, index) in apps"
            :key="`app-${index}`"
            :disabled="app.disabled"
            @click="setCurrentApp(app)"
          >
            <v-list-item-icon class="mr-2 align-center">
              <div :style="`width: 20px; height: 20px; background-color: ${app.color}`">
                <img width="100%" :src="base64ImageURI(app.svg_icon)" />
              </div>
            </v-list-item-icon>
            <v-list-item-title>{{ app.title }}</v-list-item-title>
            <v-list-item-action v-if="isCurrentApp(app)" class="caption primary--text text-no-wrap grow ml-8">
              {{ $t('appSwitcher.currentApp') }}
            </v-list-item-action>
            <v-list-item-action v-else-if="app.disabled" class="caption primary--text text-no-wrap grow ml-8">
              {{ app.disabled_reason }}
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
import isEqual from 'lodash/isEqual'

export default {
  name: 'AppSwitcher',
  model: {
    prop: 'currentApp',
  },
  props: {
    apps: {
      type: Array,
      default: () => [],
    },
    currentApp: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      menuOpen: null,
    }
  },
  computed: {
    hasApps() {
      return this.apps.length > 0
    },
    currentAppColor() {
      return this.currentApp && this.currentApp.color
    },
  },
  methods: {
    setCurrentApp(app) {
      this.$emit('input', app)
    },
    isCurrentApp(app) {
      return isEqual(app, this.currentApp)
    },
    base64ImageURI(image) {
      return `data:image/svg+xml;base64,${image}`
    },
  },
  i18n: {
    messages: {
      en: { appSwitcher: { currentApp: 'Active application', yourApplications: 'Your applications' } },
      fr: { appSwitcher: { currentApp: 'Application active', yourApplications: 'Vos applications' } },
      de: { appSwitcher: { currentApp: 'Aktuell geöffnet', yourApplications: 'Ihre Applikationen' } },
    },
  },
}
</script>
