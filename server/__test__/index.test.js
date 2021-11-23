/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies

const request = require('supertest');

const app = require('../src/app');

describe('Server Tests', () => {
  /// /////////////////////////////////////////////////////
  test('test 200 status /', async () => {
    const res = await request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = {
      message: 'Server is running',
    };
    return expect(expected).toEqual(res.body);
  });
  /// //////////////////////////////////////////////////////
  test('test 404 status /notfound', async () => {
    const res = await request(app)
      .get('/api/v1/notfound')
      .expect(404)
      .expect('Content-Type', /json/);
    const expected = {
      message: 'Page Not Found!',
    };
    return expect(expected).toEqual(res.body);
  });
  /// //////////////////////////////////////////////////////
});
