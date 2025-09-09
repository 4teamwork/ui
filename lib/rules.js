import { DateTime } from 'luxon'

export default function createRules(dateFormat = 'dd.MM.yyyy', translate, vm) {
  const $t = translate.bind(vm)
  return {
    required(v) {
      return (!!v && !!String(v).trim()) || $t('rules.inputRequired')
    },
    date(v) {
      if (!v) {
        // Empty dates are treated as valid. Use the "required" rule to prevent this behaviour.
        return true
      }
      const date = DateTime.fromFormat(v, dateFormat)
      return date.isValid || $t('rules.validDateRequired')
    },
    time(v) {
      if (!v) {
        return true
      }

      const time = DateTime.fromFormat(v, 'HH:mm')
      return time.isValid || $t('rules.validTimeRequired')
    },
  }
}
