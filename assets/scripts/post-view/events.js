const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onClickPost = event => {
  const id = $(event.target)
    .closest('div.post')
    .data('id')
  api
    .getPost(id)
    .then(res => ui.loadPostView(res))
    .catch(err => console.warn(err))
}

const onUpdatePost = event => {
  event.preventDefault()
  // grab the form data
  const form = event.target
  const updatePostData = getFormFields(form)
  // grab the post id
  const id = $(event.target)
    .closest('div.post-container')
    .data('id')
  api
    // send the update request to the API
    .updatePost(id, updatePostData)
    // GET the post again and load it onto the screen, so user sees the newly updated title/post
    .then(() => api.getPost(id))
    .then(res => ui.loadPostView(res))
    .catch(err => console.warn(err))
}

const onCreateComment = e => {
  e.preventDefault()
  const form = e.target
  const createCommentData = getFormFields(form)
  api
    .addComment(createCommentData)
    .then(ui.addCommentSuccess)
    .catch(err => console.log(err))
}

const addHandlers = event => {
  $('#content').on('click', '.post', onClickPost)
  $('#content').on('submit', '#update-post', onUpdatePost)
  $('#content').on('submit', '#new-comment', onCreateComment)
}

module.exports = {
  addHandlers
}
