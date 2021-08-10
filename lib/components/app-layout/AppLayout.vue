<template>
  <v-app>
    <slot name="navigation-root">
      <Navigation
        v-bind="$attrs"
        :apps="apps"
        :current-app="currentApp"
        :customer="customer"
        :version="version"
        :show-help="showHelp"
        :show-feedback="showFeedback"
        :mini-variant="miniVariant"
        v-on="$listeners"
      >
        <template v-slot:navigation-main>
          <slot name="navigation-main" />
        </template>
        <template v-slot:fallback-app>
          <slot name="fallback-app" />
        </template>
      </Navigation>
    </slot>
    <slot name="toolbar-root">
      <Toolbar v-bind="$attrs" v-on="$listeners">
        <template v-slot:toolbar-main>
          <slot name="toolbar-main" />
        </template>
        <template v-slot:toolbar-actions>
          <slot name="toolbar-actions" />
        </template>
        <template v-slot:usermenu>
          <slot name="usermenu" />
        </template>
        <template v-slot:avatar>
          <slot name="avatar" />
        </template>
        <template v-slot:avatar-image>
          <slot name="avatar-image" />
        </template>
      </Toolbar>
    </slot>
    <slot />
  </v-app>
</template>

<script>
import Toolbar from './Toolbar.vue'
import Navigation from './Navigation.vue'

export default {
  name: 'AppLayout',
  components: { Toolbar, Navigation },
  props: {
    apps: {
      type: Array,
      default: () => [],
    },
    currentApp: {
      type: Object,
      default: () => null,
    },
    customer: {
      type: String,
      default: () => '',
    },
    version: {
      type: String,
      default: () => '',
    },
    showHelp: {
      type: Boolean,
      default: () => false,
    },
    showFeedback: {
      type: Boolean,
      default: () => false,
    },
    miniVariant: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>
