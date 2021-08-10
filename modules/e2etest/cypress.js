const consola = require('consola')
const execa = require('execa')
const findPorts = require('./findPorts')

module.exports = async ({ headed }) => {
  const cypressBin = require.resolve('cypress/bin/cypress')
  const { CYPRESS_PORT, FRONTEND_PORT } = await findPorts
  const cypressConfig = `baseUrl=http://localhost:${FRONTEND_PORT}`

  consola.info('Starting cypress')
  await execa(
    cypressBin,
    [...(headed ? ['open'] : ['run', '--quiet']), `--port=${CYPRESS_PORT}`, '--config', cypressConfig],
    {
      stdio: 'inherit',
    },
  )
}
