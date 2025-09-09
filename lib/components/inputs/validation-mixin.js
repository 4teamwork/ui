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
  created() {
    const msgs = {
      en: {
        rules: {
          inputRequired: 'Required information',
          validDateRequired: 'Invalid date format. Only dd.MM.yyyy is allowed.',
          validTimeRequired: 'Invalid time format. Only HH:mm is allowed.',
        },
      },
      fr: {
        rules: {
          inputRequired: 'Indication nécessaire',
          validDateRequired: 'Pas de format de date valide. Seul dd.MM.yyyy est autorisé.',
          validTimeRequired: "Pas de format d'heure valide. Seul le format HH:mm est autorisé.",
        },
      },
      de: {
        rules: {
          inputRequired: 'Erforderliche Angabe',
          validDateRequired: 'Kein gültiges Datumsformat. Nur dd.MM.yyyy ist erlaubt.',
          validTimeRequired: 'Kein gültiges Zeitformat. Nur HH:mm ist erlaubt.',
        },
      },
    }
    Object.keys(msgs).forEach((locale) => {
      this.$i18n.mergeLocaleMessage(locale, msgs[locale])
    })
  },
}
