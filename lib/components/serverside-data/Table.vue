<template>
  <v-data-table
    class="gever-table"
    :class="{ 'show-icon': showIcon, 'show-select': showSelect }"
    dense
    disable-pagination
    hide-default-footer
    :options="options"
    v-bind="{ ...$attrs, headers: tableHeaders }"
    v-on="$listeners"
  >
    <template #header.data-table-select="{ on, props }">
      <v-simple-checkbox :indeterminate="props.indeterminate" :ripple="false" :value="props.value" v-on="on" />
    </template>

    <template #body="{ isSelected, items, select, pagination: { itemsLength } }">
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
        <tr v-if="$attrs.onlyCurrentPageSelected && $scopedSlots['select-all-warning']">
          <td class="body-2 px-5 py-3 warning" colspan="100">
            <slot v-bind="{ count: itemsLength, items }" name="select-all-warning" />
          </td>
        </tr>
        <tbody
          v-for="item in items"
          :id="item.id"
          :key="item.id"
          :class="{ highlighted: $route.hash === `#${item.id}`, selected: isSelected(item) }"
        >
          <tr>
            <td v-if="showSelect" class="select-cell" rowspan="2">
              <v-simple-checkbox :ripple="false" :value="isSelected(item)" @input="select(item, $event)" />
            </td>
            <td v-if="showIcon" class="icon-cell pl-6 pr-1" rowspan="2" style="width: 0">
              <v-icon width="18px" height="18px">{{ $attrs.icon }}</v-icon>
            </td>
            <td
              v-if="$scopedSlots.title"
              class="title-cell pr-6 font-weight-bold text-decoration-none"
              :colspan="headers.length"
            >
              <slot name="title" v-bind="{ item }" />
            </td>
          </tr>
          <tr>
            <td
              v-for="header in headers"
              :key="header.value"
              class="content-cell"
              :class="{ 'without-title': !$scopedSlots.title }"
            >
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
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    tableHeaders() {
      const headers = this.headers.map((h) => ({ ...h, sortable: h.sortable ? h.sortable : false }))
      if (!this.showIcon) {
        return headers
      }
      return [{ text: '', value: 'icon', sortable: false, width: '1px' }, ...headers]
    },
    headers() {
      return get(this.$attrs, 'headers', [])
    },
    showIcon() {
      return !!this.$attrs.icon
    },
    showSelect() {
      return 'show-select' in this.$attrs
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

    &.highlighted {
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
  .icon-cell,
  .select-cell {
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
  &.show-icon,
  &.show-select {
    th:first-child,
    .icon-cell,
    .select-cell {
      padding-right: 0;
    }

    tbody {
      td.select-cell .v-icon {
        opacity: 0.4;
      }

      &:hover,
      &.selected {
        td.select-cell .v-icon {
          opacity: 1;
        }
      }
    }
  }
  &.show-icon.show-select {
    th:nth-child(2),
    .icon-cell {
      padding: 0 !important;
    }
  }
}
</style>
