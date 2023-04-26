<template>
  <div class="d-flex flex-column">
    <template v-for="(item, index) in items">
      <slot name="item" v-bind="{ item, index }" />
    </template>
    <slot name="items" v-bind="{ count, items }" />
    <v-spacer />
    <v-container fluid class="d-flex align-center">
      <template v-if="!loading && !disablePagination">
        <v-pagination
          v-model="page"
          :length="pagesCount"
          total-visible="0"
          prev-icon="mdi-chevron-left"
          next-icon="mdi-chevron-right"
          class="list-pagination"
          color="primary"
        />
        <span class="mx-2 grow text-no-wrap" data-testid="list-pagination-caption">{{ listPaginationCaption }}</span>
        <v-select
          v-model="pageSize"
          append-icon="mdi-chevron-down"
          class="shrink pagination-select"
          hide-details
          flat
          dense
          solo
          :items="pageSelection"
        >
          <template #selection="{ item }">
            <span class="body-1">{{ item.text }}</span>
          </template>
        </v-select>
      </template>
    </v-container>
  </div>
</template>

<script>
import debounceAsync from 'debounce-async'
import omit from 'lodash/omit'
import pickBy from 'lodash/pickBy'
import get from 'lodash/get'
import set from 'lodash/set'
import { mapQueryParam } from '../../util/query'

const defaultItemsPerPageOptions = [50, 100, 200]

export default {
  name: 'ServersideIterator',
  props: {
    fetch: {
      type: Function,
      default: () => (filter) => ({}),
    },
    filter: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: () => true,
    },
    disablePagination: {
      type: Boolean,
      default: () => false,
    },
    disableRouteSync: {
      type: Boolean,
      default: () => false,
    },
    itemsPerPageOptions: {
      type: Array,
      default: () => defaultItemsPerPageOptions,
    },
    itemsPerPageDefault: {
      type: Number,
      default: () => 50,
    },
    countProperty: {
      type: String,
      default: () => 'count',
    },
    itemsProperty: {
      type: String,
      default: () => 'results',
    },
    pageSizeParam: {
      type: String,
      default: () => 'pageSize',
    },
    pageParam: {
      type: String,
      default: () => 'page',
    },
  },
  data() {
    return {
      result: this.createEmptyResult(),
      pageSelection: this.itemsPerPageOptions.map((size) => ({
        value: size,
        text: this.$t('serversideIterator.paginationSizeEntry', { size }),
      })),
    }
  },
  computed: {
    count() {
      return get(this.result, this.countProperty, 0)
    },
    items() {
      return get(this.result, this.itemsProperty, [])
    },
    pageSize: mapQueryParam((vm) => vm.pageSizeParam, {
      defaultValue: (vm) => vm.itemsPerPageDefault,
      transformer: (value) => Number.parseInt(value, 10),
      queryTransformer: (query, vm) => omit(query, [vm.pageParam]),
    }),
    page: mapQueryParam((vm) => vm.pageParam, {
      defaultValue: () => 1,
      transformer: (value) => Number.parseInt(value, 10),
    }),
    pagesCount() {
      return Math.ceil(this.count / this.pageSize)
    },
    computedFilter() {
      return pickBy({ [this.pageSizeParam]: this.pageSize, ...this.filter, [this.pageParam]: this.page }, Boolean)
    },
    listPaginationCaption() {
      if (!this.count) {
        return ''
      }
      const from = (this.page - 1) * this.pageSize + 1
      const to = Math.min(this.page * this.pageSize, this.count)
      return this.$t('serversideIterator.paginationCaption', { from, to, total: this.count })
    },
  },
  watch: {
    filter: {
      handler(_, previous) {
        // On immediate handler, do not reset page.
        if (previous) {
          this.maybeResetPage()
        } else {
          this.update()
        }
      },
      deep: true,
      immediate: true,
    },
    page() {
      this.update()
    },
    pageSize() {
      this.maybeResetPage()
    },
  },
  methods: {
    async update() {
      try {
        await this.debouncedUpdate()
      } catch (error) {
        if (error !== 'canceled') {
          throw error
        }
      }
    },
    createEmptyResult() {
      const result = {}
      set(result, this.countProperty, 0)
      set(result, this.itemsProperty, [])
      return result
    },
    debouncedUpdate: debounceAsync(async function debouncedUpdate() {
      if (!this.disableRouteSync) {
        this.$router.push({
          name: this.$route.name,
          query: this.computedFilter,
        })
      }
      this.$emit('update:loading', true)
      try {
        this.fetchRequests = [...(this.fetchRequests || []), this.fetch(this.computedFilter)]
        this.result = (await Promise.all(this.fetchRequests)).at(-1)
      } catch (error) {
        if (get(error, 'response.status') === 404 && this.page > 1) {
          this.page = 1
          return
        }
        this.result = this.createEmptyResult()
        throw error
      } finally {
        this.fetchRequests = []
        this.$emit('update:loading', false)
      }
    }, 400),
    maybeResetPage() {
      if (this.page !== 1) {
        // The watcher will trigger an update.
        this.page = 1
      } else {
        this.update()
      }
    },
  },
  i18n: {
    messages: {
      en: {
        serversideIterator: { paginationCaption: '{from} - {to} of {total}', paginationSizeEntry: '{size} per page' },
      },
      fr: {
        serversideIterator: { paginationCaption: '{from} - {to} de {total}', paginationSizeEntry: '{size} par page' },
      },
      de: {
        serversideIterator: { paginationCaption: '{from} - {to} von {total}', paginationSizeEntry: '{size} pro Seite' },
      },
    },
  },
}
</script>

<style lang="scss">
.list-pagination {
  .v-pagination__navigation {
    box-shadow: none;
    border-radius: 2px;
    height: 22px !important;
    width: 22px !important;
    padding: 0 !important;
    border: 1px solid var(--v-greydark-base);
    margin: 0 4px 0 0;

    > .v-icon {
      font-size: 1rem;
    }
  }
}
.pagination-select {
  .v-select__selection {
    max-width: 100%;
    width: 100%;
  }
  input {
    width: 0;
    display: none;
  }
  .v-input__slot {
    padding: 0 !important;
  }
}
</style>
