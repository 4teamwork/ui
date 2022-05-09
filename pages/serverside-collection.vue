<template>
  <div class="ma-3">
    <p>
      An example of a serverside collection used to display jokes from
      <a href="https://icanhazdadjoke.com" target="_blank">https://icanhazdadjoke.com</a>.
    </p>
    <TextFilterField v-model="filter.term" class="shrink" />
    <v-btn-toggle v-model="tableStyle" class="my-2" mandatory>
      <v-btn value="table" small>
        <v-icon>mdi-view-sequential</v-icon>
      </v-btn>
      <v-btn value="custom-table" small>
        <v-icon>mdi-view-column</v-icon>
      </v-btn>
    </v-btn-toggle>
    <ServersideCollection
      :fetch="loadData"
      :headers="headers"
      :filter="filter"
      :items-per-page-options="[10, 20, 30]"
      :items-per-page-default="10"
      :table-style="tableStyle"
      count-property="total_jokes"
      page-size-param="limit"
      show-select
    >
      <template #select-all-warning="{ count, items }">
        {{ `${items.length} jokes on this page are selected (total jokes: ${count}).` }}
      </template>
      <template #title="{ item: { joke } }">
        {{ joke }}
      </template>
      <template #item.id="{ item: { id } }">
        <a :href="`https://icanhazdadjoke.com/j/${id}`" target="_blank">
          {{ `https://icanhazdadjoke.com/j/${id}` }}
        </a>
      </template>
      <template #item="{ item }">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <strong>{{ item.joke }}</strong>
            </v-list-item-title>
            <v-list-item-subtitle>
              <a :href="`https://icanhazdadjoke.com/j/${item.id}`" target="_blank">
                {{ `https://icanhazdadjoke.com/j/${item.id}` }}
              </a>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <template #actions="{ item }">
        <TableActionButton
          title="Visit"
          class="pa-0 table-action-button"
          :href="`https://icanhazdadjoke.com/j/${item.id}`"
        >
          <template #default>
            <v-icon size="20">mdi-airplane</v-icon>
          </template>
        </TableActionButton>
      </template>
    </ServersideCollection>
  </div>
</template>

<script>
import { fromQueryString } from '~/lib/util/query'

export default {
  data() {
    return {
      filter: fromQueryString(this.$route.query, ['term'], { term: '' }),
      tableStyle: 'table',
    }
  },
  computed: {
    headers() {
      return [
        ...(this.showCustomTable ? [{ text: 'Joke', value: 'joke', isTitle: true }] : []),
        { text: 'Link', value: 'id', sortable: true },
      ]
    },
    showCustomTable() {
      return this.tableStyle === 'custom-table'
    },
  },
  methods: {
    loadData(filter) {
      return this.$http.$get('https://icanhazdadjoke.com/search', {
        headers: { Accept: 'application/json' },
        searchParams: filter,
      })
    },
  },
}
</script>
