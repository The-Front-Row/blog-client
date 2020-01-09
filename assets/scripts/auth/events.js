'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const autologin = event => {
  const cheatcodes = {
    credentials: {
      email: 'auto@login',
      username: 'H4X0R',
      password: 'login'
    }
  }
  event.preventDefault()
  api
    .signin(cheatcodes)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
// ^^^ for development purposes, remove tag before flight

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api
    .signup(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api
    .signin(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api
    .changepw(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api
    .signout(formData)
    .then(ui.onSignoutSuccess)
    .catch(ui.onSignoutFailure)
}

const addHandlers = event => {
  $('#content').on('submit', '#signup', onSignUp)
  $('#content').on('submit', '#signin', onSignIn)
  $('#content').on('submit', '#changepw', onChangePassword)
  $('#content').on('submit', '#signout', onSignOut)
  $('#nav').on('click', '#signout', onSignOut)
  $('#content').on('submit', '#autologin', autologin)
  // ^^for development purposes, remove later
}

module.exports = {
  addHandlers,
  onSignOut
}
