/* globals api, expect, describe, xdescribe, beforeEach, afterEach, it, xit */

require('./helper');

const Dinner = require('../../models/dinner');

describe('Dinner tests', () => {

  beforeEach(done => {
    Dinner.collection.remove();
    done();
  });

  afterEach(done => {
    Dinner.collection.remove();
    done();
  });

  describe('GET /api/dinners', () => {

    beforeEach(done => {
      Dinner.create({
        title: 'Catrionas wonderful Christmas feast',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJuN0q9SKbL532p1ZpNd_QPLEuJFbWuntpIiMbABxbs8PyeF_d',
        avail_places: '3',
        formatted_address: '12 Garden road',
        description: 'It will be gluten free but gorgeous'
      })
        .then(() => done())
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get('/api/dinners')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should respond with a JSON object', done => {
      api
        .get('/api/dinners')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return an array of dinners', done => {
      api
        .get('/api/dinners')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  describe('POST /api/dinners', () => {
    it('should return a 201 response', done => {
      api
        .post('/api/dinners')
        .set('Accept', 'application/json')
        .send({
          title: 'Catrionas wonderful Christmas feast',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJuN0q9SKbL532p1ZpNd_QPLEuJFbWuntpIiMbABxbs8PyeF_d',
          avail_places: '3',
          formatted_address: '12 Garden road',
          description: 'It will be gluten free but gorgeous'
        })
        .expect(201, done);
    });
    it('should create a dinner', done => {
      api
        .post('/api/dinners')
        .set('Accept', 'application/json')
        .send({
          dinner: {
            title: 'Catrionas wonderful Christmas feast',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJuN0q9SKbL532p1ZpNd_QPLEuJFbWuntpIiMbABxbs8PyeF_d',
            avail_places: '3',
            formatted_address: '12 Garden road',
            description: 'It will be gluten free but gorgeous'
          }
        });
      done();
    });
  });
});
