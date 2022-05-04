<template>
  <ServersideListing v-if="$vuetify.breakpoint.smAndDown" ref="listing" v-bind="$attrs">
    <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
  </ServersideListing>
  <ServersideTable v-else ref="table" v-bind="$attrs" v-on="$listeners">
    <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data" />
    </template>
  </ServersideTable>
</template>

<script>
import ServersideListing from './ServersideListing'
import ServersideTable from './ServersideTable'

export default {
  name: 'ServersideCollection',
  components: {
    ServersideListing,
    ServersideTable,
  },
  inheritAttrs: false,
  methods: {
    update() {
      const ref = this.$vuetify.breakpoint.smAndDown ? this.$refs.listing : this.$refs.table
      ref.update()
    },
  },
}
</script>
