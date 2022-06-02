<template>
  <v-navigation-drawer
    app
    :permanent="permanent"
    :width="330"
    :mini-variant-width="50"
    :mini-variant="computedMiniVariant"
    :value="showNavigation"
    class="ftw-navigation"
    @input="$emit('update:show-navigation', $event)"
  >
    <div :class="computedMiniVariant ? 'px-0' : 'px-4'" class="d-flex padding-trasition ftw-navigation-head mb-7">
      <div class="primary d-flex align-center justify-center" style="min-width: 50px">
        <slot name="app-icon" />
      </div>
      <v-fade-transition>
        <div v-if="!computedMiniVariant" class="d-flex flex-column grow justify-center ml-2">
          <span class="font-weight-medium">{{ appName }}</span>
          <span class="ftw-navigation-subtitle">{{ customer }}</span>
        </div>
      </v-fade-transition>
    </div>
    <slot name="navigation-main" />
    <v-spacer />
    <div :class="computedMiniVariant ? 'pr-4' : 'px-4'" class="pb-4 padding-trasition">
      <v-fade-transition v-if="!hideAppInfo">
        <div v-if="!computedMiniVariant">
          <span class="caption bodylight--text text-no-wrap">{{ `${appName} ${version}` }}</span>
          <div class="d-flex pb-4 pt-2 align-center">
            <span class="caption bodylight--text text-no-wrap pr-1">Created by</span>
            <CompanyLogo />
          </div>
        </div>
      </v-fade-transition>
      <div class="d-flex">
        <v-fade-transition>
          <div v-if="!computedMiniVariant" class="d-flex overflow-hidden">
            <NavigationButton v-if="showHelp" class="mr-3" @click="help">
              <v-icon small>mdi-help-circle</v-icon>
              <span class="ml-1">{{ $t('appLayout.help') }}</span>
            </NavigationButton>
            <NavigationButton v-if="showFeedback" @click="feedback">
              <v-icon small>mdi-message-alert</v-icon>
              <span class="ml-1">{{ $t('appLayout.feedback') }}</span>
            </NavigationButton>
          </div>
        </v-fade-transition>
        <v-spacer />
        <NavigationButton rounded class="pa-0 ml-2" @click="permanent ? toggleMiniVariant() : toggleShowNavigation()">
          <v-fade-transition>
            <v-icon v-if="computedMiniVariant">mdi-chevron-right</v-icon>
            <v-icon v-else>mdi-chevron-left</v-icon>
          </v-fade-transition>
        </NavigationButton>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import NavigationButton from './NavigationButton.vue'
import CompanyLogo from './CompanyLogo.vue'

export default {
  name: 'Navigation',
  components: { NavigationButton, CompanyLogo },
  inheritAttrs: false,
  props: {
    customer: {
      type: String,
      default: () => '',
    },
    appName: {
      type: String,
      default: () => '',
    },
    version: {
      type: String,
      default: () => '',
    },
    hideAppInfo: {
      type: Boolean,
      default: () => false,
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
    permanent: {
      type: Boolean,
      default: () => true,
    },
    showNavigation: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    computedMiniVariant() {
      return this.permanent ? this.miniVariant : false
    },
  },
  methods: {
    help() {
      this.$emit('help')
    },
    feedback() {
      this.$emit('feedback')
    },
    toggleShowNavigation() {
      this.$emit('update:show-navigation', !this.showNavigation)
    },
    toggleMiniVariant() {
      this.$emit('update:mini-variant', !this.miniVariant)
    },
  },
  i18n: {
    messages: {
      en: { appLayout: { help: 'Help', feedback: 'Feedback' } },
      fr: { appLayout: { help: 'Aide', feedback: 'Feedback' } },
      de: { appLayout: { help: 'Hilfe', feedback: 'Feedback' } },
    },
  },
}
</script>

<style lang="css">
.ftw-navigation > .v-navigation-drawer__content {
  display: flex;
  flex-direction: column;
}

.ftw-navigation-subtitle {
  font-size: 0.785714286rem;
}

.ftw-navigation-head {
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.03);
  height: 50px;
}

.padding-trasition {
  transition: padding 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
