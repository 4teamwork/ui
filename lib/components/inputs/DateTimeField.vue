<template>
  <div class="d-flex flex-column">
    <h3>{{ title }}</h3>
    <div class="d-flex">
      <CalendarField
        v-model="date"
        :label="dateLabel"
        :min="minimumEndDate"
        :disabled="disabled"
        :clearable="clearable"
        v-bind="$attrs"
        :rules="dateRules"
      />
      <v-text-field v-model="time" :rules="timeRules" :label="timeLabel" :disabled="disabled || noDate" class="ml-2" />
    </div>
    <p v-if="before && !isAfter" class="error--text">{{ $t('dateTimeField.error') }}</p>
  </div>
</template>

<script>
import { pick } from 'lodash'
import isEmpty from 'lodash/isEmpty'
import { DateTime } from 'luxon'
import CalendarField from './CalendarField.vue'

export default {
  name: 'DateTimeField',
  components: {
    CalendarField,
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: () => '',
    },
    dateLabel: {
      type: String,
      default() {
        return this.$t('dateTimeField.dateLabel')
      },
    },
    timeLabel: {
      type: String,
      default() {
        return this.$t('dateTimeField.timeLabel')
      },
    },
    value: {
      type: String,
      default: () => '',
    },
    before: {
      type: String,
      default: () => null,
    },
    alignToBefore: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    clearable: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    isAfter() {
      if (!this.value && this.clearable) {
        return true
      }
      const before = DateTime.fromISO(this.before)
      const to = DateTime.fromISO(this.value)
      return before <= to
    },
    minimumEndDate() {
      return DateTime.fromISO(this.before).toISODate()
    },
    date: {
      get() {
        if (isEmpty(this.value) && !this.clearable) {
          if (this.before) {
            const date = DateTime.fromISO(this.before).toUTC()
            this.$emit('input', date.toISO())
            return date.toISODate()
          }
          const date = DateTime.local().toUTC()
          this.$emit('input', date.toISO())
          return date.toISODate()
        }
        return this.value ? DateTime.fromISO(this.value).toISODate() : ''
      },
      set(date) {
        if (this.clearable && !date) {
          this.time = ''
          this.$emit('input', '')
        }
        const maybeDate = DateTime.fromISO(date)
        if (maybeDate.isValid) {
          if (isEmpty(this.value)) {
            this.$emit('input', maybeDate.toUTC().toISO())
          } else {
            this.$emit(
              'input',
              DateTime.fromISO(this.value)
                .set(pick(maybeDate, ['year', 'month', 'day']))
                .toUTC()
                .toISO(),
            )
          }
        }
      },
    },
    time: {
      get() {
        if (this.clearable && !this.value) {
          return this.date ? DateTime.local().toISOTime() : ''
        }
        if (!this.value) {
          if (this.before) {
            return DateTime.fromISO(this.before).toISOTime().substring(0, 5)
          }
          return DateTime.local().toUTC().toISOTime().substring(0, 5)
        }
        return DateTime.fromISO(this.value).toISOTime().substring(0, 5)
      },
      set(time) {
        if (this.clearable && !this.date) {
          this.$emit('input', '')
        }
        const timeValue = time || DateTime.local().toUTC().toISOTime()
        const maybeTime = DateTime.fromFormat(timeValue, 'HH:mm')
        if (maybeTime.isValid) {
          this.$emit('input', DateTime.fromISO(this.value).set(pick(maybeTime, 'hour', 'minute')).toUTC().toISO())
        }
      },
    },
    dateRules() {
      if (!this.clearable) {
        return [this.$rules.required]
      }
      return []
    },
    timeRules() {
      if (this.clearable) {
        return [this.$rules.time]
      }
      return [this.$rules.required, this.$rules.time]
    },
    noDate() {
      return !this.date
    },
  },
  watch: {
    before: {
      handler(value) {
        if (value && this.alignToBefore && !this.isAfter) {
          this.$emit('input', value)
        }
      },
      immediate: true,
    },
  },
  i18n: {
    messages: {
      en: {
        dateTimeField: {
          dateLabel: 'Date',
          error: 'The end date must not be before the start date.',
          timeLabel: 'Time',
        },
      },
      fr: {
        dateTimeField: {
          dateLabel: 'Date',
          error: 'La date de fin ne peut pas être antérieure à la date de début.',
          timeLabel: 'Heure',
        },
      },
      de: {
        dateTimeField: { dateLabel: 'Datum', error: 'Enddatum darf nicht vor Startdatum sein.', timeLabel: 'Zeit' },
      },
    },
  },
}
</script>
