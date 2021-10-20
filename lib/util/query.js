import identity from 'lodash/identity'
import get from 'lodash/get'
import pick from 'lodash/pick'
import isFunction from 'lodash/isFunction'

export function fromQueryString(query, keys, defaultValues = {}, transformers = {}) {
  const values = { ...defaultValues, ...pick(query, keys) }
  return Object.entries(values).reduce(
    (accum, [key, value]) => Object.assign({ [key]: (transformers[key] || identity)(value) }, accum),
    {},
  )
}

export function mapQueryParam(name, { defaultValue, transformer = identity, queryTransformer = identity } = {}) {
  const nameFn = isFunction(name) ? name : () => name
  const defaultValueFn = isFunction(defaultValue) ? defaultValue : () => defaultValue
  return {
    get() {
      return transformer(get(this.$route.query, nameFn(this), defaultValueFn(this)))
    },
    set(value) {
      const emptyValues = ['', null]
      const queryValue = emptyValues.includes(value) ? undefined : value
      this.$router.push({ query: queryTransformer({ ...this.$route.query, [nameFn(this)]: queryValue }, this) })
    },
  }
}
