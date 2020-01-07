const api = require('./api')
const ui = require('./ui')

const onGetUserHome = () => {
  ui.loadHome()
  // TODO: placeholder for GETing all posts
  // api
  //   .getUserHome()
  //   .then(ui.getUserHomeSuccess)
  //   .catch((err) =>
  //     console.warn(err)
  //   );
}

module.exports = {
  onGetUserHome
}
