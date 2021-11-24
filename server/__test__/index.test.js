/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies

const request = require('supertest');

const app = require('../src/app');

const dbBuild = require('../src/database/config/_build');
const connection = require('../src/database/connection');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

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
  test('test user logout route /logout', async () => {
    const res = await request(app)
      .get('/api/v1/logout')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = {
      message: 'Signed out succefully',
    };
    return expect(expected).toEqual(res.body);
  });
  /// //////////////////////////////////////////////////////
  test('test admin logout route /admin/logout', async () => {
    const res = await request(app)
      .get('/api/v1/admin/logout')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = {
      message: 'Signed out succefully',
    };
    return expect(expected).toEqual(res.body);
  });
  /// //////////////////////////////////////////////////////
  test('test get one product route /products/:productId', async () => {
    const res = await request(app)
      .get('/api/v1/products/1')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = 'Product found';
    return expect(expected).toEqual(res.body.message);
  });
  /// //////////////////////////////////////////////////////
  test('test get one product route error /products/:productId', async () => {
    const res = await request(app)
      .get('/api/v1/products/notfound')
      .expect(400)
      .expect('Content-Type', /json/);
    const expected = 'Bad Request';
    return expect(expected).toEqual(res.body.message);
  });
  /// //////////////////////////////////////////////////////
});
