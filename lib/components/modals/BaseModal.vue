<template>
  <v-dialog
    v-bind="$attrs"
    :max-width="maxWidth"
    :value="value"
    :persistent="persistent"
    @input="input"
    v-on="$listeners"
  >
    <slot />
    <template #activator="props">
      <slot v-bind="props" name="activator" />
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: 'BaseModal',
  inheritAttrs: false,
  props: {
    value: {
      type: Boolean,
      default: () => false,
    },
    maxWidth: {
      type: String,
      default: () => '800px',
    },
    persistent: {
      type: Boolean,
      default: () => true,
    },
  },
  watch: {
    value(open) {
      if (open) {
        window.addEventListener('keydown', this.handleEscapeKey)
      } else {
        window.removeEventListener('keydown', this.handleEscapeKey)
        /**
         * When the dialog is opened using a v-menu with an activator slot,
         * the menu is not closed when the modal opens because the click event
         * does not bubble up to the menu element.
         * So trigger the click event manually on the v-menu component.
         */
        const menu = this.$el.closest('.v-menu__content')
        if (menu) {
          menu.click()
        }
      }
    },
  },
  methods: {
    input(v) {
      this.$emit('input', v)
    },
    close() {
      this.$emit('input', false)
    },
    handleEscapeKey(e) {
      if (e.keyCode === 27) {
        this.close()
      }
    },
  },
}
</script>
