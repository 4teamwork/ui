import AppLayout from './components/app-layout/AppLayout.vue'
import AppSwitcher from './components/app-switcher/AppSwitcher.vue'
import OrderingMenu from './components/menus/OrderingMenu'
import SelectSwitcher from './components/inputs/SelectSwitcher.vue'
import ServersideCollection from './components/serverside-data/ServersideCollection.vue'
import TextFilterField from './components/fields/TextFilterField'
import TableActionButton from './components/table-action-button/TableActionButton'

export default {
  install(Vue, options) {
    Vue.component('ftw-app-layout', AppLayout)
    Vue.component('ftw-app-switcher', AppSwitcher)
    Vue.component('ftw-ordering-menu', OrderingMenu)
    Vue.component('ftw-select-switcher', SelectSwitcher)
    Vue.component('ftw-serverside-collection', ServersideCollection)
    Vue.component('ftw-text-filter-field', TextFilterField)
    Vue.component('ftw-table-action-button', TableActionButton)
  },
}
