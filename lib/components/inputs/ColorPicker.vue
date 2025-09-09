<template>
  <BaseModal :value="show" v-bind="$attrs" :persistent="false" max-width="300" @click:outside="close">
    <div class="d-flex justify-center">
      <v-color-picker v-model="inputValue" v-bind="$attrs" show-swatches v-on="$listeners" />
    </div>
    <template #activator="props">
      <slot name="activator" v-bind="props">
        <v-btn text v-bind="props" app @click="open">
          {{ label }}
          <v-icon right :color="value"> mdi-square-rounded </v-icon>
        </v-btn>
      </slot>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from '../modals/BaseModal.vue'

export default {
  name: 'ColorPicker',
  components: {
    BaseModal,
  },
  props: {
    default: {
      type: String,
      default: '#000000',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: () => null,
    },
  },
  data() {
    return {
      inputValue: this.value || this.default,
      show: false,
    }
  },
  watch: {
    before: {
      handler(value) {
        if (!value) {
          this.$emit('input', this.default)
        }
      },
      immediate: true,
    },
    value(_) {
      this.$emit('input', this.inputValue)
    },
  },
  methods: {
    open() {
      this.show = true
    },
    close() {
      this.show = false
    },
  },
}
</script>
