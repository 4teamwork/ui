<template>
  <v-menu v-model="menuOpen" offset-y transition="slide-x-transition" :disabled="!hasApps">
    <template v-slot:activator="{ on }">
      <v-hover v-slot:default="{ hover }">
        <v-btn
          depressed
          height="50px"
          min-width="50px"
          class="pa-0 rounded-0"
          :class="[targetClass, { 'primary': !currentAppColor}]"
          :style="{ 'background-color': hover || menuOpen ? '' : currentAppColor }"
          v-on="on"
        >
          <v-icon v-if="hasApps && (hover || menuOpen)" color="primary"> mdi-apps </v-icon>
          <img v-else-if="currentApp" :src="`data:image/svg+xml;base64,${currentApp.svg_icon}`" />
          <slot v-else name="fallback-app" />
        </v-btn>
      </v-hover>
    </template>
    <v-card v-if="hasApps" data-testid="app-switcher-apps-list">
      <v-card-text class="pa-0">
        <v-list dense class="extra-dense">
          <v-subheader class="px-4">Your applications</v-subheader>
          <v-list-item v-for="(app, index) in apps" :key="`app-${index}`" @click="setCurrentApp(app)">
            <v-list-item-icon class="mr-2">
              <div style="width: 20px; height: 20px" class="primary">
                <img :src="`data:image/svg+xml;base64,${app.svg_icon}`" />
              </div>
            </v-list-item-icon>
            <v-list-item-title>{{ app.title }}</v-list-item-title>
            <v-list-item-action v-if="isCurrentApp(app)" class="caption primary--text text-no-wrap grow ml-8">
              Current app
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
  props: {
    apps: {
      type: Array,
      default: () => [],
    },
    currentApp: {
      type: Object,
      default: () => null,
    },
    targetClass: {
      type: String,
      default: () => '',
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
      this.$emit('update:current-app', app)
    },
    isCurrentApp(app) {
      return isEqual(app, this.currentApp)
    },
  },
}
</script>
