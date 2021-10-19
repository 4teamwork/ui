<template>
  <v-data-table
    class="gever-table"
    dense
    :disable-pagination="disablePagination"
    :hide-default-footer="disablePagination"
    :options="options"
    v-bind="{ ...$attrs, headers: tableHeaders }"
  >
    <template #body="{ items }">
      <tbody v-if="$attrs.loading">
        <tr>
          <td colspan="100">
            <v-skeleton-loader type="list-item-two-line@4" />
          </td>
        </tr>
      </tbody>
      <tbody v-else-if="!$attrs.loading && items.length === 0">
        <tr>
          <td colspan="100" class="text-center empty-cell py-5">
            {{ $t('table.emptyState') }}
          </td>
        </tr>
      </tbody>
      <template v-else>
        <tbody v-for="item in items" :id="item.id" :key="item.id" :class="{ selected: $route.hash === `#${item.id}` }">
          <tr>
            <td v-if="$attrs.icon" class="icon-cell pl-6 pr-1" rowspan="2" style="width: 0">
              <v-icon width="18px" height="18px">{{ $attrs.icon }}</v-icon>
            </td>
            <td v-if="$scopedSlots.title" class="title-cell pr-6 font-weight-bold text-decoration-none" :colspan="$attrs.headers.length">
              <slot name="title" v-bind="{ item }" />
            </td>
          </tr>
          <tr>
            <td v-for="header in $attrs.headers" :key="header.value" class="content-cell" :class="{'without-title': !$scopedSlots.title}">
              <slot :name="`item.${header.value}`" v-bind="{ item }">
                {{ item[header.value] }}
              </slot>
            </td>
          </tr>
          <div class="listing-actions d-flex align-center">
            <slot name="actions" v-bind="{ item }" />
          </div>
        </tbody>
      </template>
    </template>
  </v-data-table>
</template>

<script>
import get from 'lodash/get'

export default {
  name: 'Table',
  inheritAttrs: false,
  props: {
    disablePagination: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    tableHeaders() {
      if (!this.$attrs.icon) {
        return this.$attrs.headers
      }
      return [{ text: '', value: 'icon', sortable: false, width: '52px' }, ...this.$attrs.headers]
    },
  },
  methods: {
    get,
  },
  i18n: {
    messages: {
      en: { table: { emptyState: 'No results were found.' } },
      fr: { table: { emptyState: "Aucun résultat n'a été trouvé." } },
      de: { table: { emptyState: 'Es wurden keine Resultate gefunden.' } },
    },
  },
}
</script>

<style lang="scss">
.gever-table {
  th {
    border-top: 1px solid var(--v-greydark-base) !important;
    border-bottom: 1px solid var(--v-greydark-base) !important;
    text-transform: uppercase;
    color: var(--v-bodylight-base) !important;
    font-weight: 400;
    white-space: nowrap;
  }
  td {
    border-radius: 0 !important;
    border: 0 !important;
    height: auto !important;
  }
  tr {
    background-color: transparent !important;
  }
  tbody {
    position: relative;

    &.selected {
      background-color: #ffff99;
    }

    .listing-actions {
      visibility: hidden;
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
    }

    &:hover {
      td:not(.empty-cell) {
        background: var(--v-greylight-base) !important;
      }

      .listing-actions {
        visibility: visible;
      }
    }
  }
  .icon-cell {
    border-bottom: 1px solid var(--v-greydark-base) !important;
  }
  .content-cell {
    padding-bottom: 10px !important;
    border-bottom: 1px solid var(--v-greydark-base) !important;

    &.without-title {
      padding-top: 10px !important;
    }

    &:last-of-type {
      padding-right: 24px !important;
    }
  }
  .title-cell {
    > a {
      color: var(--v-appbarcolor-base) !important;
      display: block;
      text-decoration: none;
    }
    padding-top: 10px !important;
  }
  .v-data-table__progress th {
    border: 0 !important;
    padding: 0 !important;
  }
  .v-data-footer {
    justify-content: flex-end;
    height: 58px;

    .v-data-footer__select {
      display: none;
    }
  }
}
</style>
