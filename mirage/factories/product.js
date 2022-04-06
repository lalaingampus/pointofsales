import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Product ${i}`;
  },
  description(i) {
    return `Product Description ${i}`;
  },
  sellPrice() {
    let min = 500000;
    let max = 500000;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  purchasePrice() {
    let min = 50000;
    let max = 50000;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  isPolyphonic() {
    return true;
  },
});
