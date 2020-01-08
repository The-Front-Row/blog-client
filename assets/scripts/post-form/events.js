const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
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

const onCreatePost = event => {
  console.log('hewwwwwo??')
  event.preventDefault()
  const form = event.target
  const createPostData = getFormFields(form)
  api
    .add(createPostData)
    .then(ui.addPostSuccess)
    .catch(() => console.log('oh SHYT'))
}

const addHandlers = event => {
  $('#content').on('click', '#new-post', onClickPostForm)
  $('#content').on('submit', '#new-post-form', onCreatePost)
}

module.exports = {
  addHandlers
}
