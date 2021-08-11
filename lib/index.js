import AppLayout from './components/app-layout/AppLayout.vue'
import AppSwitcher from './components/app-switcher/AppSwitcher.vue'

export default {
  install(Vue, options) {
    Vue.component('ftw-app-layout', AppLayout)
    Vue.component('ftw-app-switcher', AppSwitcher)
  },
}
