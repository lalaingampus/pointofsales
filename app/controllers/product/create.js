import Controller from '@ember/controller';

export default Controller.extend ({
 init() {
  this._super(..argument);
  this.model = this.store.createRecord('product');
 },
 actions: {
  saveProducts() {
   this.model.save();
   this.transitionToRoute('product'};
  }
 }
});
