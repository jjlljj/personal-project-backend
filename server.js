const express = require('express') 
const mockData = require('./src/__mockdata__/mockData')
const { getToneAnalysis } = require('./src/queries')


//const analyzed = getToneAnalysis('a string of text. I hope this works.')

const app = express()

app.get('/analyze', (request, response) => {
  response.status(200).json(analyzed);
})

app.listen(3000, () => {
  console.log('express running localhost3000')
})


const middleFunc = (request, response, next) => {
  
  next()
}