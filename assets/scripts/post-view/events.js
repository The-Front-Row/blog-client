const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const commonEvents = require('../common/events')

const onClickPost = event => {
  // grab the post id
  const id = $(event.target)
    .closest('div.post')
    .data('id')
  // GET that specific post and load it's view page
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
  // grab the form data
  const form = e.target
  const createCommentData = getFormFields(form)
  // grab the post id
  const id = $(event.target)
    .closest('div.post-container')
    .data('id')
  // add the post id to the form data
  createCommentData.comment.post = id
  // send it to the API and then reload the post page. If extra time,
  // see if we can refresh just the comments section
  api
    .addComment(createCommentData)
    .then(() => api.getPost(id))
    .then(res => ui.loadPostView(res))
    .catch(err => console.log(err))
}

const onUpdateComment = e => {
  e.preventDefault()
  // grab the form data
  const form = e.target
  const updateCommentData = getFormFields(form)
  // grab the comment id
  const commentId = $(event.target)
    .closest('div.comment-container')
    .data('id')
  // grab the post id
  const postId = $(event.target)
    .closest('div.post-container')
    .data('id')
  // add the post id to the form data
  updateCommentData.comment.post = postId
  // send it to the API and then reload the post page. If extra time,
  // see if we can refresh just the comments section
  api
    .updateComment(commentId, updateCommentData)
    .then(() => api.getPost(postId))
    .then(res => ui.loadPostView(res))
    .catch(err => console.log(err))
}

const onDeletePost = event => {
  console.log('hewwo??')
  event.preventDefault()
  const postId = $(event.target)
    .closest('div.post-container')
    .data('id')
  api.deletePost(postId).then(() => commonEvents.onLoadUserHome())
}

const addHandlers = event => {
  $('#content').on('click', '.post', onClickPost)
  $('#content').on('click', '#delete-btn', onDeletePost)
  $('#content').on('submit', '#update-post', onUpdatePost)
  $('#content').on('submit', '#new-comment', onCreateComment)
  $('#content').on('submit', '.update-comment', onUpdateComment)
}

module.exports = {
  addHandlers
}
