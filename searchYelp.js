const request = require('request')

const searchYelp = (term, location) => {
  return new Promise((resolve, reject) => {
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`

    const options = {
      method: 'GET',
      url,
      headers: {
        Authorization: `Bearer ${process.env.YELP_TOKEN}`,
        content: 'application/json',
      },
    }

    return request(options, function (error, response, body) {
      if (error) {
        reject({
          ok: false,
          error,
        })
      } else {
        resolve({
          ok: true,
          results: JSON.parse(body)
        })
      }
    })
  })
}

module.exports = searchYelp
