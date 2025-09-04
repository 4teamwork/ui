<template>
  <v-container>
    <h1>Input</h1>
    <SelectSwitcher v-model="active" :items="items" jump />
    <ColorPicker v-model="color" :default="defaultColor" label="Color" />
    <CalendarField v-model="date" label="Date" />
    <DateTimeField v-model="datetime" title="Datetime" />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      color: null,
      date: null,
      datetime: null,
      defaultColor: '#0000FF',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'],
    }
  },
}
</script>
