const api = require('./api')
const ui = require('./ui')

const onClickPost = () => {
  ui.loadPostView()
  // TODO: placeholder for GETing a single post
  // api
  //   .getUserHome()
  //   .then(ui.getUserHomeSuccess)
  //   .catch((err) =>
  //     console.warn(err)
  //   );
}

const addHandlers = event => {
  $('.post').on('click', onClickPost)
}

module.exports = {
  addHandlers
}
