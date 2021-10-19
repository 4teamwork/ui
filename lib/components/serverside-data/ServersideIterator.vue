<template>
  <div class="d-flex flex-column">
    <template v-for="(item, index) in items.results">
      <slot name="item" v-bind="{ item, index }" />
    </template>
    <slot name="items" v-bind="{ items: items.results }" />
    <v-spacer />
    <v-container fluid class="d-flex align-center">
      <template v-if="!loading">
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
import { mapQueryParam } from '../../util/query'

export default {
  name: 'ServersideIterator',
  props: {
    fetch: {
      type: Function,
      default: () => ({
        count: 0,
        results: [],
      }),
    },
    filter: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      items: { count: 0, results: [] },
      pageSelection: [50, 100, 200].map((size) => ({
        value: size,
        text: this.$t('serversideIterator.paginationSizeEntry', { size }),
      })),
    }
  },
  computed: {
    pageSize: mapQueryParam('pageSize', {
      defaultValue: 50,
      transformer: (value) => Number.parseInt(value, 10),
      queryTransformer: (query) => omit(query, ['page']),
    }),
    page: mapQueryParam('page', { defaultValue: 1, transformer: (value) => Number.parseInt(value, 10) }),
    pagesCount() {
      return Math.ceil(this.items.count / this.pageSize)
    },
    computedFilter() {
      return pickBy({ pageSize: this.pageSize, ...this.filter, page: this.page }, Boolean)
    },
    listPaginationCaption() {
      if (!this.items.count) {
        return ''
      }
      const from = (this.page - 1) * this.pageSize + 1
      const to = Math.min(this.page * this.pageSize, this.items.count)
      return this.$t('serversideIterator.paginationCaption', { from, to, total: this.items.count })
    },
  },
  watch: {
    filter: {
      handler() {
        this.maybeResetPage()
        this.update()
      },
      deep: true,
      immediate: true,
    },
    page() {
      this.update()
    },
    pageSize() {
      this.maybeResetPage()
      this.update()
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
    debouncedUpdate: debounceAsync(async function debouncedUpdate() {
      this.$router.push({
        name: this.$route.name,
        query: this.computedFilter,
      })
      this.$emit('update:loading', true)
      try {
        this.items = await this.fetch(this.computedFilter)
      } catch (error) {
        if (get(error, 'response.status') === 404 && this.page > 1) {
          this.page = 1
          return
        }
        this.items = { count: 0, results: [] }
        throw error
      } finally {
        this.$emit('update:loading', false)
      }
    }, 400),
    maybeResetPage() {
      if (this.page !== 1) {
        this.page = 1
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
