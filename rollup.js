const { rollup } = require('rollup')
const vue = require('rollup-plugin-vue')
const vuetify = require('rollup-plugin-vuetify')
const commonjs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

const build = async () => {
  const bundle = await rollup({
    input: 'lib/index.js',
    external: ['vue', 'vuetify/lib', 'lodash'],
    plugins: [nodeResolve(), commonjs(), vue({ target: 'browser', preprocessStyles: true }), vuetify()],
  })

  bundle.write({
    format: 'esm',
    file: 'dist/bundle.js',
  })
}

build()
