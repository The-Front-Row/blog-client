'use strict'
const commonUi = require('./common/ui')
const authEvents = require('./auth/events')
const postViewEvents = require('./post-view/events')
const postFormEvents = require('./post-form/events')

$(() => {
  commonUi.init()
  authEvents.addHandlers()
  postViewEvents.addHandlers()
  postFormEvents.addHandlers()
})
