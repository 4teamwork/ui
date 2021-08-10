<template>
  <v-btn depressed height="30px" color="greydark" min-width="30px" v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'NavigationButton',
  inheritAttrs: false,
}
</script>
