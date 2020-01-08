const home = require('../templates/Home.handlebars')

// TODO: when GET to /posts is working, update this function to accept data from the api and throw it into handlebars
const loadHome = () => {
  const homeHtml = home()
  $('#content').html(homeHtml)
}

module.exports = {
  loadHome
}
