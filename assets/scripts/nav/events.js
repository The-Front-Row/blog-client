// const api = require('./api')
const commonEvents = require('../common/events.js')
const ui = require('./ui')

const addHandlers = event => {
  $('#nav').on('click', '#back-button', commonEvents.onLoadUserHome)
  $('#nav').on('click', '#to-signup', ui.loadNavSignUpForm)
}

module.exports = {
  addHandlers
}
