<template>
  <v-data-table
    v-bind="{ ...$attrs, headers: tableHeaders }"
    :class="{ 'show-icon': showIcon, 'show-select': showSelect }"
    :options="options"
    class="gever-custom-table"
    dense
    hide-default-footer
    v-on="$listeners"
  >
    <template #header.data-table-select="{ on, props }">
      <v-simple-checkbox :indeterminate="props.indeterminate" :ripple="false" :value="props.value" v-on="on" />
    </template>

    <template #item="{ isSelected, item, select }">
      <tr :class="{ highlighted: $route.hash === `#${item.id}`, selected: isSelected }">
        <td v-if="showSelect" class="select-cell">
          <v-simple-checkbox :ripple="false" :value="isSelected" @input="select" />
        </td>
        <td v-if="showIcon">
          <slot v-bind="{ item }" name="icon">
            <v-icon>{{ $attrs.icon }}</v-icon>
          </slot>
        </td>
        <td v-for="header in headers" :key="header.value">
          <slot v-bind="{ item }" :name="`item.${header.value}`">
            {{ item[header.value] }}
          </slot>
        </td>
        <td v-if="showActions">
          <div class="actions-cell align-center d-flex">
            <slot v-bind="{ item }" name="actions" />
          </div>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import get from 'lodash/get'

export default {
  name: 'CustomTable',
  inheritAttrs: false,
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    headers() {
      return get(this.$attrs, 'headers', [])
    },
    showActions() {
      return !!this.$scopedSlots.actions
    },
    showIcon() {
      return !!this.$attrs.icon
    },
    showSelect() {
      return 'show-select' in this.$attrs
    },
    tableHeaders() {
      const headers = this.headers.map((h) => ({ ...h, sortable: h.sortable ? h.sortable : false }))
      return [
        ...(this.showIcon ? [{ text: '', value: 'icon', sortable: false, width: '1px' }] : []),
        ...headers,
        ...(this.showActions ? [{ text: '', value: 'actions', sortable: false, width: '1px' }] : []),
      ]
    },
  },
}
</script>

<style lang="scss">
.gever-custom-table {
  th {
    border-bottom: 1px solid var(--v-greydark-base) !important;
    border-top: 1px solid var(--v-greydark-base) !important;
    color: var(--v-bodylight-base) !important;
    font-weight: 400;
    text-transform: uppercase;
    white-space: nowrap;
  }

  tr {
    td {
      border-bottom: 1px solid var(--v-greydark-base) !important;
      border-radius: 0 !important;
    }

    &:last-child {
      td {
        border-bottom: none !important;
      }
    }

    &.highlighted {
      background: #ffff99 !important;
    }

    &:hover {
      background: var(--v-greylight-base) !important;

      &.highlighted {
        background: #ffff99a2 !important;
      }
    }
  }

  &.show-icon,
  &.show-select {
    th:first-child,
    td:first-child {
      padding-right: 0;
    }

    tr {
      td.select-cell:first-child .v-icon {
        opacity: 0.4;
      }

      &:hover,
      &.selected {
        td.select-cell:first-child .v-icon {
          opacity: 1;
        }
      }
    }
  }

  &.show-icon.show-select {
    th:nth-child(2),
    td:nth-child(2) {
      padding: 0;
    }
  }

  .actions-cell {
    visibility: hidden;
  }

  tr:hover {
    .actions-cell {
      visibility: visible;
    }
  }
}
</style>
