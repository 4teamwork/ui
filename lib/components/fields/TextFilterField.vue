<template>
  <v-text-field
    v-model="filter"
    hide-details
    solo
    flat
    dense
    class="dense"
    background-color="greydark"
    clearable
    :placeholder="$t('textFilterField.placeholder')"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: 'TextFilterField',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    filter: {
      get() {
        return this.value
      },
      set(filter) {
        this.$emit('input', filter)
      },
    },
  },
  i18n: {
    messages: {
      en: { textFilterField: { placeholder: 'Text filter' } },
      fr: { textFilterField: { placeholder: 'Filtre texte' } },
      de: { textFilterField: { placeholder: 'Textfilter' } },
    },
  },
}
</script>
