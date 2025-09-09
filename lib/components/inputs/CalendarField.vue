<template>
  <v-menu
    v-model="menu"
    :min-width="1"
    :close-on-content-click="false"
    :nudge-right="33"
    :nudge-top="19"
    offset-overflow
    offset-y
    :disabled="disabled"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="dateInput"
        v-bind="attrs"
        :label="label"
        :placeholder="placeholder"
        append-icon="mdi-calendar"
        :rules="[...rules, validationRules.date]"
        :clearable="clearable"
        :disabled="disabled"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-bind="$attrs" :value="value" no-title locale="de-ch" @change="close" @input="save">
      <template v-if="!closeOnChange">
        <v-spacer />
        <v-btn color="primary" @click="menu = false">OK</v-btn>
      </template>
    </v-date-picker>
  </v-menu>
</template>

<script>
import { DateTime } from 'luxon'
import validationMixin from './validation-mixin'

export default {
  name: 'CalendarField',
  mixins: [validationMixin],
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: () => DateTime.local().toISODate(),
    },
    label: {
      type: String,
      default: () => '',
    },
    placeholder: {
      type: String,
      default: () => '',
    },
    rules: {
      type: Array,
      default: () => [],
    },
    clearable: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    closeOnChange: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      menu: false,
    }
  },
  computed: {
    dateInput: {
      get() {
        if (!this.value) {
          return ''
        }
        return DateTime.fromISO(this.value).toFormat('dd.MM.yyyy')
      },
      set(value) {
        if (!value) {
          this.save('')
        } else {
          const date = DateTime.fromFormat(value, 'dd.MM.yyyy')
          if (!date.isValid) {
            return
          }
          this.save(date.toISODate())
        }
      },
    },
  },
  methods: {
    close() {
      if (!this.closeOnChange) {
        return
      }
      this.menu = false
    },
    save(value) {
      this.$emit('input', value)
    },
  },
}
</script>
