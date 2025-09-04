# ftw-system-bar

The `ftw-system-bar` component is a system bar that can be used to display messages at the top of the screen.

![System Bar](./images/system-bar.png)

## Usage

```vue
<template>
  <ftw-system-bar messages="messages" />
</template>
```

## Example

```vue
<template>
  <ftw-system-bar messages="messages" />
</template>
<script>
export default {
  data() {
    return {
      messages: [
        {
          "background_color": "#00EEFF",
          "icon": "information",
          "text": "Hello World!",
          "text_color": "#FFFFFF"
        }
      ],
    }
  },
}
</script>
```

## Props

| Name      | Description                 |
|-----------|-----------------------------|
| messages  | A list of messsage objects. |

## Events

| Name    | Description                 |
|---------|-----------------------------|
| dismiss | Emits the dismissed message |
