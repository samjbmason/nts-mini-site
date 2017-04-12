const micro = require('micro')
const redirect = require('micro-redirect')

module.exports = async (req, res) => {
  const statusCode = 301
  const location = 'https://speakr.masondecair.es'

  redirect(res, statusCode, location)
}
