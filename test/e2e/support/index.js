import './commands'

// Disable screenshots on test failure
Cypress.Screenshot.defaults({ screenshotOnRunFailure: false })

before(function before() {
  // Do not truncate assertion outputs
  window.chai.config.truncateThreshold = 0
})

Cypress.on('window:before:load', (window) => {
  // Our tests expect the application to be in Swiss German by default
  Object.defineProperty(window.navigator, 'languages', { value: ['de-CH'] })
})
