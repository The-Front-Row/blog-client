'use strict'
const commonUi = require('./common/ui')
const authEvents = require('./auth/events')

$(() => {
  commonUi.init()
  authEvents.addHandlers()
})
