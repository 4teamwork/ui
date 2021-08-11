# ftw-app-switcher

The `ftw-app-switcher` component is used to display apps provided by [Ianus](https://github.com/4teamwork/ianus).
The component accepts a list of apps which will be rendered in the menu. The selected app can be two-way binded.
Every app can define the following attributes:

| Name            | Description                                                                            |
| --------------- | -------------------------------------------------------------------------------------- |
| title           | Defines the apps name.                                                                 |
| color           | Defines the background color.                                                          |
| svg_icon        | Defines the apps icon. Has to be a base64 string with the plain image.                 |
| disabled        | Tells the app switcher to disable the app. It will not be possible to select this app. |
| disabled_reason | This text will be displayed next to the app in the switcher when disabled.             |

![App Switcher](./images/app_switcher.png)

## Usage

```vue
<template>
  <ftw-app-switcher />
</template>
```

## Example

The following example defines apps, binds the currently active app and defines a fallback app.

```vue
<template>
  <ftw-app-switcher :apps="apps" v-model="currentApp">
    <template #fallback-app>
      <v-icon>mdi-bird</v-icon>
    </template>
  </ftw-app-switcher>
</template>
<script>
export default {
  data() {
    return {
      currentApp: {
        title: 'Birds',
        color: '#FF0000',
        svg_icon: 'PD94bWwgdmVyc2lvbj0i',
      },
      apps: [
        {
          title: 'Birds',
          color: '#FF0000',
          svg_icon: 'PD94bWwgdmVyc2lvbj0i',
        },
        {
          title: 'Apes',
          color: '#00FF00',
          svg_icon: 'PD94bWwgdmVyc2lvbj0i',
          disabled: true,
          disabled_reason: 'Maintenance',
        },
        {
          title: 'Tigers',
          color: '#0000FF',
          svg_icon: 'PD94bWwgdmVyc2lvbj0i',
        },
      ],
    }
  },
}
</script>
```

## Props

| Name  | Type   | Default | Description                                 |
| ----- | ------ | ------- | ------------------------------------------- |
| apps  | Array  | []      | The apps listed in the AppSwitcher          |
| value | Object | null    | The current selected app in the AppSwitcher |

## Events

| Name  | Description                                                 |
| ----- | ----------------------------------------------------------- |
| input | Emits the current app when the current app has been changed |

## Slots

| Name         | Description                                            |
| ------------ | ------------------------------------------------------ |
| fallback-app | Slot to define an app when no other apps are available |
