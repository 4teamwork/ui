import { DateTime } from 'luxon'

export default {
  data() {
    return {
      dateFormat: 'dd.MM.yyyy',
      validationRules: {
        date: (v) => !v || DateTime.fromFormat(v, this.dateFormat).isValid || this.$t('rules.validDateRequired'),
        required: (v) => (!!v && !!String(v).trim()) || this.$t('rules.inputRequired'),
        time: (v) => !v || DateTime.fromFormat(v, 'HH:mm').isValid || this.$t('rules.validTimeRequired'),
      },
    }
  },
}
