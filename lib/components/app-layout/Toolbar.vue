<template>
  <v-app-bar app dark flat clipped-right height="50px" color="appbarcolor">
    <slot name="toolbar-main" />
    <v-spacer />
    <slot name="toolbar-actions" />
    <UserMenu>
      <template v-slot:usermenu>
        <slot name="usermenu" />
      </template>
      <template v-slot:avatar>
        <slot name="avatar" />
      </template>
      <template v-slot:avatar-image>
        <slot name="avatar-image" />
      </template>
    </UserMenu>
  </v-app-bar>
</template>

<script>
import UserMenu from './UserMenu.vue'

export default {
  name: 'Toolbar',
  components: { UserMenu },
  inheritAttrs: false,
}
</script>
