// const api = require('./api')
const events = require('../common/events.js')
// const ui = require('./ui')

const addHandlers = event => {
  $('#nav').on('click', '#back-button', events.onLoadUserHome)
}

module.exports = {
  addHandlers
}
