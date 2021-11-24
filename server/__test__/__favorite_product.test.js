/* eslint-disable no-undef */

const supertest = require('supertest');

const app = require('../src/app');
const dbBuild = require('../src/database/config/_build');

const connection = require('../src/database/connection');

beforeEach(() => dbBuild());

afterAll(() => connection.end());

describe('favorites', () => {
  test('post favorites 200', async () => {
    const res = await supertest(app)
      .post('/api/v1//products/favorites')
      .expect(200)
      .send({
        userId: 1,
        productId: 1,
      });

    return expect(res.body.message).toEqual('Added to favorites successfully');
  });
});
