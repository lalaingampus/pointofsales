import Component from '@ember/component';

export default Component.extend({
  model: null,
  actions: {
    saveData() {
      this.model.save();
      alert('Proses save sudah dilakukan');
    },
  },
});
