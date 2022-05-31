<template>
  <ServersideIterator ref="iterator" v-bind="$attrs" :filter="filter" :loading.sync="loading">
    <template #items="{ count, items }">
      <component
        :is="tableComponent"
        v-bind="{ ...tableAttrs, items, icon, loading, onlyCurrentPageSelected, value }"
        :server-items-length="count"
        :options.sync="options"
        @input="$emit('input', $event)"
        @toggle-select-all="toggleSelectAll({ ...$event, count })"
        @current-items="itemsChanged"
        @item-selected="itemSelectionChanged"
      >
        <template v-for="(index, name) in $scopedSlots" #[name]="data">
          <slot :name="name" v-bind="data"></slot>
        </template>
      </component>
    </template>
  </ServersideIterator>
</template>

<script>
import omit from 'lodash/omit'
import unzip from 'lodash/unzip'
import zip from 'lodash/zip'
import CustomTable from './CustomTable.vue'
import ServersideIterator from './ServersideIterator.vue'
import Table from './Table.vue'

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
    filter: {
      type: Object,
      default: () => ({}),
    },
    icon: {
      type: String,
      default: () => '',
    },
    tableStyle: {
      type: String,
      default: () => 'table',
      validator: (v) => Object.keys(stylesEnum).includes(v),
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      loading: true,
      onlyCurrentPageSelected: false,
      internalOptions: {},
    }
  },
  computed: {
    tableAttrs() {
      return omit(this.$attrs, ['filter', 'fetch', 'data-testid'])
    },
    tableComponent() {
      return stylesEnum[this.tableStyle]
    },
    options: {
      get() {
        const [sortBy, sortDesc] = unzip(
          this.filter.ordering.map((ordering) => {
            if (ordering.startsWith('-')) {
              return [ordering.slice(1), true]
            } else {
              return [ordering, false]
            }
          }),
        )
        return {
          ...this.internalOptions,
          sortBy: sortBy || [],
          sortDesc: sortDesc || [],
        }
      },
      set(options) {
        const ordering = zip(options.sortBy, options.sortDesc).map(([sortBy, sortDesc]) => {
          const sortDirection = sortDesc ? '-' : ''
          return sortDirection + sortBy
        })
        this.filter.ordering = ordering
        this.internalOptions = options
      },
    },
  },
  methods: {
    itemSelectionChanged(props) {
      this.onlyCurrentPageSelected = false
      this.$emit('item-selected', props)
    },
    itemsChanged(props) {
      this.onlyCurrentPageSelected = false
      this.$emit('current-items', props)
    },
    toggleSelectAll({ count, items, value }) {
      if (value && items.length < count) {
        this.onlyCurrentPageSelected = true
        return
      }
      if (!value) {
        // Make sure all selected items on any page are deselected. By doing this we
        // add a slightly inconsistend behaviour to the component because toggling
        // to `true` will only select all items on the current page.
        // In our opinion deselecting all items is more important than just
        // deselecting the current page. Also, Google mail behaves in a similar way
        // and we based the interaction model largely on this application.
        this.$emit('input', [])
      }
      this.onlyCurrentPageSelected = false
    },
    update() {
      this.$refs.iterator.update()
    },
  },
}
</script>
