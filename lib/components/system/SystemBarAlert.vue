<template>
  <v-alert
    v-bind="$attrs"
    :rounded="false"
    dense
    :color="backgroundColor"
    :style="{ color: textColor, width: '100%' }"
    v-on="$listeners"
  >
    <template #prepend>
      <v-icon v-if="icon" :color="textColor" class="mr-3">mdi-{{ icon }}</v-icon>
    </template>
    <span class="body-1">{{ text }}</span>
  </v-alert>
</template>

<script>
export default {
  name: 'SystemBarAlert',
  props: {
    item: {
      type: Object,
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
    itemText: {
      type: String,
      default: () => 'text',
    },
    itemTextColor: {
      type: String,
      default: () => 'text_color',
    },
  },
  computed: {
    backgroundColor() {
      return this.getAttr(this.item, this.itemBackgroundColor)
    },
    icon() {
      return this.getAttr(this.item, this.itemIcon)
    },
    text() {
      return this.getAttr(this.item, this.itemText)
    },
    textColor() {
      return this.getAttr(this.item, this.itemTextColor)
    },
  },
  methods: {
    getAttr(obj, path) {
      if (!obj) return null
      return path.split('.').reduce((o, i) => (o ? o[i] : null), obj)
    },
  },
}
</script>
