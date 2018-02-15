const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3')
const key = require('./api/key')
console.log(key)

const toneAnalyzer = new ToneAnalyzerV3({
  username: key.username,
  password: key.password,
  version_date: '2016-05-19',
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api/'
})
console.log(toneAnalyzer)

toneAnalyzer.tone(
  {
    tone_input: 'Greetings from Watson Developer Cloud!',
    content_type: 'text/plain'
  },
  function(err, tone) {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(tone, null, 2));
    }
  }
)

module.exports = toneAnalyzer