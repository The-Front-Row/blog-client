const postView = require('../templates/PostView.handlebars')

const loadPostView = data => {
  const postViewHtml = postView({ data })
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
