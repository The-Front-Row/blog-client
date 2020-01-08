const config = require('../config')
const store = require('../store')

// TODO: unsure if we need token here, remove if it's causing issues
const getUserHome = () => {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  getUserHome
}
