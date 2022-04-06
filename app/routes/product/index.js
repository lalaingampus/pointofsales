import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
   page: {
    refreshModel: true
   },
   size: {
    refreshModel: true
   },
   filter: {
    refreshModel: true
   },
   sort: {
    refreshModel: true
   },
  },

  model(params) {
    // return this.store.findAll('product');
    return this.store.query('product', {
     page: {
      number: params.page,
      size: params.page,
     },
     filter: params.filter,
     sort: params.sort
    });
  },
});
