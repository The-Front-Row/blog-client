const home = require('../templates/Home.handlebars')

const init = () => {
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
