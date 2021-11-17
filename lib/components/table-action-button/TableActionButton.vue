<template>
  <v-btn class="table-action-button" v-bind="$attrs" depressed x-small v-on="$listeners">
    <slot> Action </slot>
    <template v-for="(index, name) in $slots" v-slot:[name]>
      <slot :name="name" />
    </template>
    <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
  </v-btn>
</template>

<script>
export default {
  name: 'TableActionButton',
  inheritAttrs: false,
}
</script>

<style>
.table-action-button {
  background: white !important;
  border-radius: 2px !important;
  height: 27px !important;
  min-width: 29px !important;
  border: 1px solid var(--v-greydark-base) !important;
}
</style>
