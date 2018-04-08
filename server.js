const express = require('express') 
const bodyParser = require('body-parser')
const mockData = require('./src/__mockdata__/mockData')

const toneAnalyzer = require('./src/serviceHelper')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('port', process.env.PORT || 3000);

app.post('/analyze', async (request, response) => {
  const text = request.body.text
  response.setHeader('Content-Type', 'application/json')

  toneAnalyzer.tone({ tone_input: text, content_type: 'text/plain', sentences: true},
    (err, tone) => {
      if (err) {
        console.log(err);
        throw(err)
      } else {
        response.status(200).json(tone)
      }
    }
  )

})

app.post('/mockAnalyze', async(request, response) => {
  const text = request.body.text
  const random = Math.floor(Math.random() * mockData.length)

  response.setHeader('Content-Type', 'application/json')
  response.status(200).json(mockData[random])
})

app.listen(app.get('port'), () => {
  console.log(`express running on ${app.get('port')}`)
})

module.exports = app
