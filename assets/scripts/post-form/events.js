// const api = require('./api')
const ui = require('./ui')

const onClickPostForm = () => {
  ui.loadPostForm()
  // TODO: placeholder for GETing a single post
  // api
  //   .getUserHome()
  //   .then(ui.getUserHomeSuccess)
  //   .catch((err) =>
  //     console.warn(err)
  //   );
}

const addHandlers = event => {
  $('#new-post').on('click', onClickPostForm)
}

module.exports = {
  addHandlers
}
