import Route from '@ember/routing/route';

export default Route.extend({
  model({id}) {
  //  let result = {
  //    id: 1,
  //    name: 'Nokia',
  //    description: 'Handphone',
  //    purchasePrice: 150000,
  //    sellPrice: 555555000,
  //    isPolyphonic: true,
  //  };
  //  return result;
  return this.store.peekRecord('product', id);
  },
});
