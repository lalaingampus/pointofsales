import Route from '@ember/routing/route';

export default Route.extend({
  templateName: 'product/create',
  model({id}) {
//    let result = {
//      id: 1,
//      name: 'Siemens',
//      description: 'Handphone',
//      purchasePrice: 150000,
//      sellPrice: 500000,
//      isPolyphonic: true,
//    };
//    return result;

  return this.store.peekRecord('product', id);
  },
});
