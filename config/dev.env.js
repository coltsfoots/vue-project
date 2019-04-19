'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_DONFIG: '"dev"',
  BASE_API: '"https://easy-mock.com/mock/5cb58b6c649b1b6121ad40de/Demo"'
})
