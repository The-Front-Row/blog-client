const config = require('../config')
const store = require('../store')

const getPost = postID => {
  return $.ajax({
    url: config.apiUrl + '/posts/' + postID,
    method: 'GET'
  })
}

const add = formData => {
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

module.exports = {
  getPost,
  add
}
