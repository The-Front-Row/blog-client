const api = require('./api')
const ui = require('./ui')

const onClickPost = event => {
  ui.loadPostView()
  const id = $(event.target).data('id')
  console.log(id)
  api
    .getPost(id)
    .then(res => console.log(res))
  //   .catch((err) =>
  //     console.warn(err)
  // )
}

const onCreateComment = e => {
  e.preventDefault()
  console.log('Form was clicked')
  // TODO: uncomment the below when create comment form is ready to be tested.
  // const form = e.target;
  // const createCommentData = getFormFields(form);
  // api
  //   .add(createCommentData)
  //   .then(ui.addCommentSuccess)
  //   .catch();
}

const addHandlers = event => {
  $('#content').on('click', '.post', onClickPost),
  $('#content').on('submit', '#new-comment', onCreateComment)
}

module.exports = {
  addHandlers
}
