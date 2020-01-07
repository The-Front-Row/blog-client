'use strict'

const api = require('./api.js')
// const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = event => {
  // console.log('hewwo??')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signup(formData)
    .then(console.log('fricklefrack'))
    .catch(() => console.log('snicklesnack'))
}

const addHandlers = event => {
  $('#signup').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
