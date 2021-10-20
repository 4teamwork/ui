<template>
  <div class="ma-3">
    <p>
      An example of a serverside collection used to display jokes from
      <a href="https://icanhazdadjoke.com" target="_blank">https://icanhazdadjoke.com</a>.
    </p>
    <TextFilterField v-model="filter.term" class="shrink" />
    <ServersideCollection
      :fetch="loadData"
      :headers="headers"
      :filter="filter"
      :items-per-page-options="[10, 20, 30]"
      :items-per-page-default="10"
      count-property="total_jokes"
      page-size-param="limit"
    >
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
    </ServersideCollection>
  </div>
</template>

<script>
import { fromQueryString } from '~/lib/util/query'

export default {
  data() {
    return {
      headers: [{ text: 'Link', value: 'id' }],
      filter: fromQueryString(this.$route.query, ['term'], { term: '' }),
    }
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
