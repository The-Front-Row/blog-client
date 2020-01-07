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
  $('#content').on('click', '.post', onClickPost)
}

module.exports = {
  addHandlers
}
