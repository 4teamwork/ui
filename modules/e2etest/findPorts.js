const portfinder = require('portfinder')

function findPort(defaultPort) {
  portfinder.basePort = defaultPort
  return portfinder.getPortPromise()
}

module.exports = (async () => {
  const FRONTEND_PORT = process.env.PORT1 || (await findPort(35000))
  const CYPRESS_PORT = process.env.PORT2 || (await findPort(36000))

  return {
    FRONTEND_PORT,
    CYPRESS_PORT,
  }
})()
