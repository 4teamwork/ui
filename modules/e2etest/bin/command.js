#!/usr/bin/env node

const { NuxtCommand } = require('@nuxt/cli')
const frontend = require('../frontend')
const cypress = require('../cypress')

NuxtCommand.run({
  name: 'e2e',
  description: `
    Run e2e tests using cypress.
    The tests run in headless mode by default.
  `,
  usage: 'test-e2e',
  options: {
    headed: {
      type: 'boolean',
      description: 'Start cypress in headed mode',
    },
  },
  async run({ argv: { headed } }) {
    process.env.NODE_ENV = 'TestingE2E'
    try {
      await frontend()
      await cypress({ headed })
      process.exit()
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  },
})
