const postView = require('../templates/PostView.handlebars')

const loadPostView = () => {
  const postViewHtml = postView()
  $('#content').html(postViewHtml)
}

module.exports = {
  loadPostView
}
