import Vue from 'vue'
import createRules from '@/lib/rules'

Vue.mixin({
  computed: {
    $rules() {
      const { dateFormat } = 'dd.MM.yyyy' // this.currentLocale
      return createRules(dateFormat, this.$t, this)
    },
  },
})
