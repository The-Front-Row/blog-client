const navPublic = require('../templates/NavPublic.handlebars')
const navAuth = require('../templates/NavAuth.handlebars')
const navForm = require('../templates/SignUpForm.handlebars')
const changePasswordForm = require('../templates/ChangePasswordForm.handlebars')

const loadNavPublic = () => {
  const navPublicHtml = navPublic()
  $('#nav').html(navPublicHtml)
}

const loadNavAuth = () => {
  const navAuthHtml = navAuth()
  $('#nav').html(navAuthHtml)
}

const loadNavSignUpForm = () => {
  const navSignUpForm = navForm()
  $('#content').html(navSignUpForm)
}

const loadChangePasswordForm = () => {
  const changePasswordHtml = changePasswordForm()
  $('#content').html(changePasswordHtml)
}

module.exports = {
  loadNavSignUpForm,
  loadNavPublic,
  loadNavAuth,
  loadChangePasswordForm
}
