const api = require('./api')
const ui = require('./ui')
const navUi = require('../nav/ui.js')

const init = () => {
  navUi.loadNavPublic()
  onLoadUserHome()
}

const onLoadUserHome = () => {
  ui.loadHome()
  // TODO: placeholder for GETing all posts. Uncomment this and delete the above line when backend is ready for GET /posts
  // api
  //   .getUserHome()
  //   .then(data => ui.loadHome(data))
  //   .catch((err) =>
  //     console.warn(err)
  //   );
}

module.exports = {
  onLoadUserHome,
  init
}
