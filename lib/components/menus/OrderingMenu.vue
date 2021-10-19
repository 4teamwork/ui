<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon small plain v-on="on">
          <v-icon small color="primary" v-bind="attrs"> mdi-swap-vertical </v-icon>
        </v-btn>
      </template>
      <v-list class="extra-dense">
        <v-list-item v-for="(item, index) in items" :key="index" @click="updateOrdering(item.value)">
          <v-list-item-title>
            {{ item.text }}
          </v-list-item-title>
          <v-list-item-icon>
            <v-icon v-if="item.value === value">mdi-check</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    updateOrdering(selected) {
      this.$emit('input', selected)
    },
  },
}
</script>
