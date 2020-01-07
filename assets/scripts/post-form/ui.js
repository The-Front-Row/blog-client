const postForm = require('../templates/PostForm.handlebars')

const loadPostForm = () => {
  const postFormHtml = postForm()
  $('#content').html(postFormHtml)
}

module.exports = {
  loadPostForm
}
