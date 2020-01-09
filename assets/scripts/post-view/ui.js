const postView = require('../templates/PostView.handlebars')

const loadPostView = data => {
  const postViewHtml = postView({ data })
  $('#content').html(postViewHtml)
}

module.exports = {
  loadPostView
}
