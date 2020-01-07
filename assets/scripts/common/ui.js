const home = require('../templates/Home.handlebars')
const navUi = require('../nav/ui.js')

const init = () => {
  navUi.loadNavPublic()
  loadHome()
}

const loadHome = () => {
  const homeHtml = home()
  $('#content').html(homeHtml)
}

module.exports = {
  init,
  loadHome
}
