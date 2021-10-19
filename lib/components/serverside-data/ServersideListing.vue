<template>
  <ServersideIterator ref="iterator" v-bind="$attrs" :loading.sync="loading">
    <template #items="{ items }">
      <v-skeleton-loader v-if="loading" type="list-item-two-line@4" />
      <div v-else-if="!loading && items.length === 0" class="px-4 py-2">
        {{ $t('serversideListing.emptyState') }}
      </div>
      <v-list v-else>
        <template v-for="(item, index) in items">
          <slot name="item" v-bind="{ item, index }" />
          <v-divider v-if="index < items.length - 1" :key="`${index}${item.id}`" />
        </template>
      </v-list>
    </template>
  </ServersideIterator>
</template>

<script>
import ServersideIterator from './ServersideIterator.vue'

export default {
  name: 'ServersideListing',
  components: {
    ServersideIterator,
  },
  inheritAttrs: false,
  data() {
    return {
      loading: true,
    }
  },
  methods: {
    update() {
      this.$refs.iterator.update()
    },
  },
  i18n: {
    messages: {
      en: { serversideListing: { emptyState: 'No results were found.' } },
      fr: { serversideListing: { emptyState: "Aucun résultat n'a été trouvé." } },
      de: { serversideListing: { emptyState: 'Es wurden keine Resultate gefunden.' } },
    },
  },
}
</script>
