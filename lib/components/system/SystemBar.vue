<template>
  <v-system-bar
    v-if="hasNotifications"
    app
    :color="expanded ? 'white' : 'warning'"
    class="justify-space-between pa-0"
    :style="systemBarCursor"
    :height="height"
    @click="expandBar()"
  >
    <template v-if="expanded">
      <div class="mb-1 d-flex flex-column" style="width: 100%">
        <template v-for="message in messages">
          <SystemBarAlert
            :key="`ftw-system-bar-alert-${getAttr(message, itemId)}`"
            :item="message"
            class="mt-1 mb-0 pt-1 pb-1"
            dismissible
            :item-background-color="itemBackgroundColor"
            :item-icon="itemIcon"
            :item-text="itemText"
            :item-text-color="itemTextColor"
            @input="dismissMessage(message)"
          />
        </template>
        <div style="position: absolute; width: 95%; display: flex; justify-content: center; margin: 0px auto">
          <v-btn small icon @click.stop="collapseBar()">
            <v-icon class="text-right">mdi-chevron-up</v-icon>
          </v-btn>
        </div>
      </div>
    </template>
  </v-system-bar>
</template>

<script>
import SystemBarAlert from './SystemBarAlert.vue'

export default {
  name: 'SystemBar',
  components: {
    SystemBarAlert,
  },
  props: {
    messages: {
      type: Array,
      required: true,
    },
    itemBackgroundColor: {
      type: String,
      default: () => 'background_color',
    },
    itemIcon: {
      type: String,
      default: () => 'icon',
    },
    itemId: {
      type: String,
      default: () => 'id',
    },
    itemText: {
      type: String,
      default: () => 'text',
    },
    itemTextColor: {
      type: String,
      default: () => 'text_color',
    },
  },
  data() {
    return {
      expanded: true,
    }
  },
  computed: {
    systemBarCursor() {
      return {
        cursor: this.expanded ? 'default' : 'pointer',
      }
    },
    height() {
      return this.expanded ? 'auto' : 8
    },
    hasNotifications() {
      return this.messages.length > 0
    },
  },
  updated() {
    /* a veutify internal reactive variable which will update the fixed content top padding of
    the v-main and v-navigation-drawer component if set */
    this.$vuetify.application.bar = this.$el.offsetHeight || 0
  },
  methods: {
    collapseBar() {
      this.expanded = false
    },
    expandBar() {
      this.expanded = true
    },
    dismissMessage(message) {
      const index = this.messages.indexOf(message)
      if (index > -1) {
        this.messages.splice(index, 1)
        this.$emit('dismiss', message)
      }
    },
    getAttr(obj, path) {
      if (!obj) return null
      return path.split('.').reduce((o, i) => (o ? o[i] : null), obj)
    },
  },
}
</script>
