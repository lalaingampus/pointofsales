import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  sellPrice: DS.attr('number'),
  purchasePrice: DS.attr('number'),
  isPolyphonic: DS.attr('boolean'),
});
