export default function () {
  this.namespace = '/api';
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
  // let products = [
  //   {
  //     type: 'products',
  //     id: '1',
  //     attributes: {
  //       name: 'Siemens M-55',
  //       description: 'Handphone Polyphonic',
  //       'purchase-price': 1500000,
  //       'sell-price': 5888888,
  //       'is-polyphonic': true,
  //     },
  //   },
  // ];

  // this.get('/products', function (db, requrest) {
  //  return { data: products };
  // });

  // this.get('/products/:id', function (db, request) {
  //  return { data: products.find((p) => request.param.id == p.id) };
  //});

  this.get('/products', 'product');
  this.post('/products', 'product');
  this.put('/products/:id'), this.patch('/products/:id', 'product');
  this.del('/products/:id', 'product');
}
