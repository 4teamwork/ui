import AppLayout from './components/app-layout/AppLayout.vue'
import AppSwitcher from './components/app-switcher/AppSwitcher.vue'
import BaseModal from './components/modals/BaseModal.vue'
import CalendarField from './components/inputs/CalendarField.vue'
import ColorPicker from './components/inputs/ColorPicker.vue'
import DateTimeField from './components/inputs/DateTimeField.vue'
import OrderingMenu from './components/menus/OrderingMenu'
import SelectSwitcher from './components/inputs/SelectSwitcher.vue'
import ServersideCollection from './components/serverside-data/ServersideCollection.vue'
import SystemBar from './components/system/SystemBar.vue'
import SystemBarAlert from './components/system/SystemBarAlert.vue'
import TextFilterField from './components/fields/TextFilterField'
import TableActionButton from './components/table-action-button/TableActionButton'

export default {
  install(Vue, options) {
    Vue.component('ftw-app-layout', AppLayout)
    Vue.component('ftw-app-switcher', AppSwitcher)
    Vue.component('ftw-base-modal', BaseModal)
    Vue.component('ftw-calendar-field', CalendarField)
    Vue.component('ftw-color-picker', ColorPicker)
    Vue.component('ftw-date-time-field', DateTimeField)
    Vue.component('ftw-ordering-menu', OrderingMenu)
    Vue.component('ftw-select-switcher', SelectSwitcher)
    Vue.component('ftw-serverside-collection', ServersideCollection)
    Vue.component('ftw-system-bar', SystemBar)
    Vue.component('ftw-system-bar-alert', SystemBarAlert)
    Vue.component('ftw-text-filter-field', TextFilterField)
    Vue.component('ftw-table-action-button', TableActionButton)
  },
}
