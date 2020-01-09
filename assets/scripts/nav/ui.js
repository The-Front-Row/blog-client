const navPublic = require('../templates/NavPublic.handlebars')
const navAuth = require('../templates/NavAuth.handlebars')
const navForm = require('../templates/SignUpForm.handlebars')

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

module.exports = {
  loadNavSignUpForm,
  loadNavPublic,
  loadNavAuth
}
