# ftw-system-bar-alert

The `ftw-system-bar-alert` component is an alert for the system bar.

![System Bar Alert](./images/alert.png)

## Usage

```vue
<template>
  <ftw-system-bar-alert message="message" />
</template>
```

## Example

```vue
<template>
  <ftw-system-bar message="message" />
</template>
<script>
export default {
  data() {
    return {
      message: {
        "background_color": "#00EEFF",
        "icon": "information",
        "text": "Hello World!",
        "text_color": "#FFFFFF"
      },
    }
  },
}
</script>
```

## Props

| Name                | Description                                              |
|---------------------|----------------------------------------------------------|
| message             | A message object.                                        |
| itemBackgroundColor | Object value for the background color.                   |
| itemIcon            | Object value for the mdi icon without the mdi prefix.    |
| itemText            | Object value for the displayed text.                     |
| itemTextColor       | Object value for the text color.                         |
