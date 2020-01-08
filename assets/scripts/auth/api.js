'use strict'
const config = require('../config')
const store = require('../store')

// for development purposes, remove this later
const autologin = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: {
      email: 'h@cker',
      password: 'login'
    }
  })
}

const signup = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signin = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changepw = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signout = () => {
  // console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  autologin,
  signup,
  signin,
  changepw,
  signout
}
