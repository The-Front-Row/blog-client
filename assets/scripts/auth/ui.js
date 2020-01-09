'use strict'
const store = require('../store')
const navUi = require('../nav/ui.js')
const commonEvents = require('../common/events.js')
const commonUi = require('../common/ui')

const onSignUpSuccess = () => {
  $('form').trigger('reset')
  commonUi.notification('Successfully created account', 'success')
}

const onSignUpFailure = () => {
  $('form').trigger('reset')
  commonUi.notification('Error creating account', 'failure')
}

const onSignInSuccess = responseData => {
  $('form').trigger('reset')
  store.user = responseData.user

  navUi.loadNavAuth()
  commonEvents.onLoadUserHome()
  window.setTimeout(() => {
    $('#message').html('Successfully signed in')
  }, 500)
}

const onSignInFailure = () => {
  onFailure('something goofed')
}

const onChangePasswordSuccess = () => {
  commonEvents.onLoadUserHome()
  commonUi.notification('Successfully changed password', 'success')
}

const onChangePasswordFailure = () => {
  commonUi.notification('Error changing password', 'failure')
}

const onSignoutSuccess = responseData => {
  store.user = store
  onSuccess('signed out')
  $('.before-auth').show()
  $('.after-auth').hide()
  navUi.loadNavPublic()
  commonEvents.init()
}

const onSignoutFailure = () => {
  onFailure('something goofed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignoutSuccess,
  onSignoutFailure
}
