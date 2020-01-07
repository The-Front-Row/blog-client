'use strict'
const store = require('../store')

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('input').val('')
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('input').val('')
}

const onSignUpSuccess = () => {
  onSuccess('signed up')
  // timeout
}

const onSignUpFailure = () => {
  onFailure('something goofed')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  onSuccess('signed in')
  // timeout
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSignInFailure = () => {
  onFailure('something goofed')
}

const onChangePasswordSuccess = () => {
  onSuccess('you have changed your password')
}

const onChangePasswordFailure = () => {
  onFailure('you have not changed your password')
}

const onSignoutSuccess = responseData => {
  store.user = store
  onSuccess('signed out')
  $('.before-auth').show()
  $('.after-auth').hide()
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