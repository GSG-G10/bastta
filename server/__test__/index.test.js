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
      .get('/api/v1/users/logout')
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
      .get('/api/v1/products/2')
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
    const expected = 'Invalid product id';
    return expect(expected).toEqual(res.body.message);
  });
  /// //////////////////////////////////////////////////////
  test('test 200 status get landing page products filtered by section route', async () => {
    const res = await request(app)
      .get('/api/v1/products/public?section=recent&limit=5')
      .expect(200)
      .expect('Content-Type', /json/);
    return expect(res.body.message).toBe('Products Imported Successfuly');
  });
  test('test get dashboard products route error not auth /admin/products?status=', async () => {
    const res = await request(app)
      .get('/api/v1/admin/products?status=pending')
      .expect(401)
      .expect('Content-Type', /json/);
    const expected = 'You are not authorized to perform this action.';
    return expect(expected).toEqual(res.body.message);
  });

  /// // *********** profile products ************************
  test('get profile products 200', async () => {
    const res = await request(app)
      .get('/api/v1/products/profile/2')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = 'Products import successfully';
    return expect(expected).toEqual(res.body.message);
  });
  test('get profile products 400 bad requuest', async () => {
    const res = await request(app)
      .get('/api/v1/products/profile/string')
      .expect(400)
      .expect('Content-Type', /json/);
    const expected = 'Bad Request';
    return expect(expected).toEqual(res.body.message);
  });
  /* ******************* Protected Routes **************************** */
  /// //////////////////////////////////////////////////////
  describe('favorites', () => {
    /// Test Delete from favorites route
    test('Delete from Favorites 200', async () => {
      const res = await request(app)
        .delete('/api/v1/products/favorites/50')
        .set('Cookie', [`token=${process.env.TOKEN}`])
        .expect(200);
      return expect(res.body.message).toBe('Product Deleted From Favorites Successfuly');
    });
    /// /////////////////////////////////////////////////////
    test('Delete from Favourites 400 product dosn\'t exist', async () => {
      const res = await request(app)
        .delete('/api/v1/products/favorites/900')
        .set('Cookie', [`token=${process.env.TOKEN}`])
        .expect(400);
      return expect(res.body.message).toBe('Product Doesn\'t Exist in Favorites');
    });
    /// ////////////////////////////////////////////
    test('Delete from Favourites 400 Bad request', async () => {
      const res = await request(app)
        .delete('/api/v1/products/favorites/string')
        .set('Cookie', [`token=${process.env.TOKEN}`])
        .expect(400);
      return expect(res.body.message).toBe('Bad Request');
    });
  });
  describe('delete product', () => {
    /// ******************* Test Delete product routes *********************/
    test('Delete product 200', async () => {
      const res = await request(app)
        .delete('/api/v1/products/10')
        .set('Cookie', [`token=${process.env.TOKEN}`])
        .expect(200);
      return expect(res.body.message).toBe('Product Deleted Successfuly');
    });
    /// /////////////////////////////////////////////////////
    test('Delete product 400 product dosn\'t exist', async () => {
      const res = await request(app)
        .delete('/api/v1/products/900')

        .expect(400);
      return expect(res.body.message).toBe('Product Not Found');
    });
    /// ////////////////////////////////////////////
    test('Delete Product 400 Bad request', async () => {
      const res = await request(app)
        .delete('/api/v1/products/string')
        .expect(400);
      return expect(res.body.message).toBe('Bad Request');
    });
    /// /////////////////////////////
    test('Delete Product 403 Don\'t have permission', async () => {
      const res = await request(app)
        .delete('/api/v1/products/48')
        .expect(403);
      return expect(res.body.message).toBe('You don\'t have permission to delete this product');
    });
  });
});
