'use strict'
const commonUi = require('./common/ui')
const authEvents = require('./auth/events')
const postViewEvents = require('./post-view/events')

$(() => {
  commonUi.init()
  authEvents.addHandlers()
  postViewEvents.addHandlers()
})
