const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');
const mockData = require('../src/__mockData__/mockData')

chai.use(chaiHttp);

describe('mockAnalyze route', () => {
  it('should return the mockResponse', () => {
    return chai.request(server)
    .post('/mockAnalyze')
    .then(response => {
      response.should.have.status(200);
      response.should.be.json;
      response.res.should.be.an('object');
    })
    .catch(err => {
      throw err;
    });
  });

  it('should return a 404 for a route that does not exist', () => {
    return chai.request(server)
    .get('/sad')
    .then(response => {
      response.should.have.status(404);
    })
    .catch(err => {
      throw err;
    });
  });
});

describe('analyze route', () => {
  it.skip('should...', () => {
    return chai.request(server)
    .post('/analyze', {
      text: 'Block of text here'
    })
    .then(response => {
      response.should.have.status(200);
      response.should.be.json;
      response.res.should.be.an('object');
    })
    .catch(err => {
      throw err;
    });
  });

  it('should return a 404 for a route that does not exist', () => {
    return chai.request(server)
    .get('/sad')
    .then(response => {
      response.should.have.status(404);
    })
    .catch(err => {
      throw err;
    });
  });
});
