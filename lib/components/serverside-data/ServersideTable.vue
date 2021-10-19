<template>
  <ServersideIterator ref="iterator" v-bind="$attrs" :loading.sync="loading">
    <template #items="{ items }">
      <Table v-bind="{ ...tableAttrs, items, icon, loading }">
        <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
          <slot :name="name" v-bind="data"></slot>
        </template>
      </Table>
    </template>
  </ServersideIterator>
</template>

<script>
import omit from 'lodash/omit'
import ServersideIterator from './ServersideIterator.vue'
import Table from './Table.vue'

export default {
  name: 'ServersideTable',
  components: {
    ServersideIterator,
    Table,
  },
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: () => '',
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
  },
  methods: {
    update() {
      this.$refs.iterator.update()
    },
  },
}
</script>
