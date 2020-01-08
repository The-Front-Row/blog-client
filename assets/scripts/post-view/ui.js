const postView = require('../templates/PostView.handlebars')

const loadPostView = () => {
  const postViewHtml = postView()
  $('#content').html(postViewHtml)
}

// when you add a comment
const addCommentSuccess = () => {
  // reset the form
  $('form').trigger('reset')
  // then load the PostView again, so you see the new comment
  loadPostView()
}

module.exports = {
  loadPostView,
  addCommentSuccess
}
