import AppLayout from './components/app-layout/AppLayout.vue'
import AppSwitcher from './components/app-switcher/AppSwitcher.vue'
import ServersideCollection from './components/serverside-data/ServersideCollection.vue'
import TextFilterField from './components/fields/TextFilterField'

export default {
  install(Vue, options) {
    Vue.component('ftw-app-layout', AppLayout)
    Vue.component('ftw-app-switcher', AppSwitcher)
    Vue.component('ftw-serverside-collection', ServersideCollection)
    Vue.component('ftw-text-filter-field', TextFilterField)
  },
}
