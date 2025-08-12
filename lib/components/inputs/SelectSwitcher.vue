<template>
  <v-select
    v-model="item"
    :items="items"
    v-bind="$attrs"
    :menu-props="{ bottom: true, offsetY: true }"
    flat
    solo
    :append-icon="null"
    :readonly="noInput"
  >
    <template #prepend>
      <v-btn v-if="jump && !noInput" icon :disabled="index <= 0 || item === null" small @click="start">
        <v-icon>mdi-chevron-double-left</v-icon>
      </v-btn>
      <v-btn v-if="!noInput" icon :disabled="index <= 0 || item === null" small @click="back">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </template>
    <template #selection>
      <span v-if="center" class="d-flex justify-center" style="width: 100%">
        {{ text }}
      </span>
      <span v-else>{{ text }}</span>
    </template>
    <template #append-outer>
      <v-btn v-if="!noInput" icon :disabled="index >= items.length - 1 || item === null" small @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-btn v-if="jump && !noInput" icon :disabled="index >= items.length - 1 || item === null" small @click="end">
        <v-icon>mdi-chevron-double-right</v-icon>
      </v-btn>
    </template>
  </v-select>
</template>

<script>
export default {
  name: 'SwitchSelect',
  props: {
    noInput: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Array,
      required: true,
    },
    jump: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      item: null,
    }
  },
  computed: {
    index() {
      return this.items.indexOf(this.item)
    },
    text() {
      return this.$attrs.itemText ? this.item.getAttribute(this.$attrs.itemText) : this.item
    },
    value() {
      return this.$attrs.itemValue ? this.item.getAttribute(this.$attrs.itemValue) : this.item
    },
  },
  watch: {
    item(_) {
      this.$emit('input', this.value)
    },
  },
  created() {
    this.item = this.selected != null ? this.items[this.selected] : this.items[0]
  },
  methods: {
    next() {
      if (this.index < this.items.length - 1) {
        this.item = this.items[this.index + 1]
      }
    },
    back() {
      if (this.index > 0) {
        this.item = this.items[this.index - 1]
      }
    },
    start() {
      this.item = this.items[0]
    },
    end() {
      this.item = this.items[this.items.length - 1]
    },
  },
}
</script>
