const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3')
//const key = require('./api/key')
const key = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD
}

const toneAnalyzer = new ToneAnalyzerV3({
  username: key.username,
  password: key.password,
  headers: {
    "X-Watson-Learning-Opt-Out": true
  },
  version_date: '2016-05-19',
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api/'
})

module.exports = toneAnalyzer
