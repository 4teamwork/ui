# ftw-ui

A collection of vue components used in different applications of 4teamwork. The components are built using vuetify.

## Installation

@4tw/ui can be added using the npm module.

``` sh
yarn add @4tw/ui
# OR
npm install @4tw/ui
```

Once installed, register the Vue plugin.

``` javascript
import Vue from 'vue'
import FtwUI from '@4tw/ui'

Vue.use(FtwUI)
```

Or if you are using nuxt, register a new plugin.

``` javascript
// plugins/ftw-ui.js
import FtwUI from "@4tw/ui";
import Vue from "vue";

export default function() {
  Vue.use(FtwUI);
}
```

## Prerequisite

Make sure your project where you use the ftw-ui has `vue-i18n`, `lodash`, `vue` and `vuetify` installed.

## Development

### Project setup
``` sh
yarn install
```

### Compile and hot-reload for development
``` sh
yarn dev
```

### Run your unit tests
``` sh
yarn test-unit
```

### Run your end-to-end tests
``` sh
yarn test-e2e
```

### Release the package
``` sh
yarn release
```

## Documentation

The docs are built using [Vuepress](https://vuepress.vuejs.org/).

Every component has its own directory under `docs/components`.

### Preview documentation
``` sh
yarn docs:dev
```

### Publish documentation
``` sh
./publish-docs
```
