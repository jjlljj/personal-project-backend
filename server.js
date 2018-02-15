const express = require('express') 
const bodyParser = require('body-parser')
const mockData = require('./src/__mockdata__/mockData')
const { getToneAnalysis } = require('./src/queries')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.post('/analyze', (request, response) => {
//   response.status(200).json({text: 'analyzed'});
// })

app.post('/analyze', async (request, response) => {
  const text = request.body.text
  const analyzed = await getToneAnalysis(text) 
  response.setHeader('Content-Type', 'application/json')
  response.status(200).json(analyzed);
})

app.listen(3000, () => {
  console.log('express running localhost3000')
})


const middleFunc = (request, response, next) => {
  
  next()
}