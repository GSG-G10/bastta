/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies

const request = require('supertest');

const app = require('../src/app');

describe('Server Tests', () => {
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
});
