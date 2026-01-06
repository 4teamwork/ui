<template>
  <BaseModal :value="show" max-width="300">
    <v-card>
      <v-color-picker v-model="inputValue" />
      <v-card-actions class="mt-3">
        <v-btn color="primary" @click="acceptColor">{{ okLabel }}</v-btn>
        <v-btn @click="cancel">{{ cancelLabel }}</v-btn>
      </v-card-actions>
    </v-card>
    <template #activator="props">
      <slot name="activator" v-bind="props">
        <v-btn depressed v-bind="{ ...props, ...$attrs }" app @click="open">
          {{ label }}
          <v-icon v-if="value" right :color="value" style="margin-bottom:1px;"> mdi-checkbox-blank </v-icon>
          <v-icon v-else right color="black" style="margin-bottom:1px;"> mdi-close-box-outline </v-icon>
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
    okLabel: {
      type: String,
      default: 'OK',
    },
    cancelLabel: {
      type: String,
      default: 'Abbrechen',
    },
    value: {
      type: String,
      default: () => null,
    },
  },
  data() {
    return {
      inputValue: this.getInitialValue(),
      show: false,
    }
  },
  methods: {
    open() {
      this.show = true
    },
    close() {
      this.show = false
    },
    cancel() {
      this.inputValue = this.getInitialValue()
      this.close()
    },
    acceptColor() {
      this.$emit('input', this.inputValue)
      this.close()
    },
    getInitialValue() {
      return this.value || this.default
    },
  },
}
</script>
