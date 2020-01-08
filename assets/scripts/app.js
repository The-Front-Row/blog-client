'use strict'
const commonEvents = require('./common/events')
const authEvents = require('./auth/events')
const postViewEvents = require('./post-view/events')
const postFormEvents = require('./post-form/events')

$(() => {
  commonEvents.init()
  authEvents.addHandlers()
  postViewEvents.addHandlers()
  postFormEvents.addHandlers()
})
