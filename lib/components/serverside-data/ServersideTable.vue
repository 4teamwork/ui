<template>
  <ServersideIterator ref="iterator" v-bind="$attrs" :loading.sync="loading">
    <template #items="{ count, items }">
      <component
        :is="tableComponent"
        v-bind="{ ...tableAttrs, items, icon, loading }"
        :server-items-length="count"
        @update:options="$emit('update:options', $event)"
      >
        <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
          <slot :name="name" v-bind="data"></slot>
        </template>
      </component>
    </template>
  </ServersideIterator>
</template>

<script>
import omit from 'lodash/omit'
import ServersideIterator from './ServersideIterator.vue'
import Table from './Table.vue'
import CustomTable from './CustomTable.vue'

const stylesEnum = {
  table: 'Table',
  'custom-table': 'CustomTable',
}

export default {
  name: 'ServersideTable',
  components: {
    ServersideIterator,
    Table,
    CustomTable,
  },
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: () => '',
    },
    tableStyle: {
      type: String,
      default: () => 'table',
      validator: (v) => Object.keys(stylesEnum).includes(v),
    },
  },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    tableAttrs() {
      return omit(this.$attrs, ['filter', 'fetch', 'data-testid'])
    },
    tableComponent() {
      return stylesEnum[this.tableStyle]
    },
  },
  methods: {
    update() {
      this.$refs.iterator.update()
    },
  },
}
</script>
