const config = require('../config')

// TODO: unsure if we need token here, remove if it's causing issues
const getUserHome = () => {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'GET'
  })
}

module.exports = {
  getUserHome
}
