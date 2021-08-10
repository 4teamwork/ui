const path = require('path')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const findPorts = require('./findPorts')

module.exports = async () => {
  consola.info('Starting nuxt frontend server')

  const { FRONTEND_PORT } = await findPorts
  const configPath = path.resolve(process.cwd(), 'nuxt.config.js')
  const nuxtConfig = require(configPath)

  const nuxt = new Nuxt(nuxtConfig)

  try {
    await new Builder(nuxt).build()
    nuxt.listen(FRONTEND_PORT, 'localhost')
    consola.success('Nuxt frontend server started')
  } catch (error) {
    consola.error(error)
    throw error
  }
}
