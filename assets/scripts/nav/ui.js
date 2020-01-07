const navPublic = require('../templates/NavPublic.handlebars')
const navAuth = require('../templates/NavAuth.handlebars')

const loadNavPublic = () => {
  const navPublicHtml = navPublic()
  $('#nav').html(navPublicHtml)
}

const loadNavAuth = () => {
  const navAuthHtml = navAuth()
  $('#nav').html(navAuthHtml)
}

module.exports = {
  loadNavPublic,
  loadNavAuth
}
