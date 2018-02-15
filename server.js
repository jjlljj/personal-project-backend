const express = require('express') 
const mockData = require('./src/__mockdata__/mockData')
const toneAnalyzer = require('./src/serviceHelper')

const app = express()

// get listens for GET requests on a port
// put request lists for POST requests on filepath

//app.use(express.static('public'))

app.get('/analyze', (request, response) => {

  response.status(200).json(mockData);
})

app.listen(3000, () => {
  console.log('express running localhost3000')
})


const middleFunc = (request, response, next) => {
  

  // move on to next function or route handler
  next()
}