const navPublic = require('../templates/navPublic.handlebars')

const loadNavPublic = () => {
  const navPublicHtml = navPublic()
  $('#nav').html(navPublicHtml)
}

module.exports = {
  loadNavPublic
}
