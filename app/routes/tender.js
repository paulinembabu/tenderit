import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
<<<<<<< HEAD
      agricultures: this.store.findAll('agriculture'),
=======
    agricultures: this.store.findAll('agriculture'),
    tenders: this.store.findAll('tender'),
    its: this.store.findAll('it'),
    supplies: this.store.findAll('supply'),
    healths: this.store.findAll('health'),
    others: this.store.findAll('other')
>>>>>>> f7f0bca25582d26560c6ad5dbed7cbbb4a9b1a9a

    });

},
actions: {
<<<<<<< HEAD
=======

>>>>>>> f7f0bca25582d26560c6ad5dbed7cbbb4a9b1a9a
    saveAgriculture3(params) {
      var newAgriculture = this.store.createRecord('agriculture', params);
      newAgriculture.save();
      this.transitionTo('agriculture');
<<<<<<< HEAD
    }
=======
    },
    saveHealth3(params) {
      var newHealth = this.store.createRecord('health', params);
      newHealth.save();
      this.transitionTo('health');
    },
    saveSupply3(params) {
      var newSupply = this.store.createRecord('supply', params);
      newSupply.save();
      this.transitionTo('supply');
    },
    saveIt3(params) {
      var newIt = this.store.createRecord('it', params);
      newIt.save();
      this.transitionTo('it');
    },
    saveOther3(params) {
      var newOther = this.store.createRecord('other', params);
      newOther.save();
      this.transitionTo('other');
    },
    destroyAgriculture(agriculture){
         agriculture.destroyRecord();
        this.transitionTo('agriculture');

    },
    destroyIt(it){
     it.destroyRecord();
    this.transitionTo('it');

    },
    destroySupply(supply){
      supply.destroyRecord();
        this.transitionTo('supplies');

    },
    destroyOther(other){
   other.destroyRecord();
    this.transitionTo('others');

    },
    destroyHealth(health){
        return health.destroyRecord();
        this.transitionTo('health');
    },

    update(agriculture, params) {
Object.keys(params).forEach(function(key) {
  if(params[key]!==undefined) {
    agriculture.set(key,params[key]);
  }
});
agriculture.save();
this.transitionTo('agriculture');
},
update(supply, params) {
Object.keys(params).forEach(function(key) {
if(params[key]!==undefined) {
supply.set(key,params[key]);
}
});
supply.save();
this.transitionTo('supplies');
},
update(other, params) {
Object.keys(params).forEach(function(key) {
if(params[key]!==undefined) {
other.set(key,params[key]);
}
});
other.save();
this.transitionTo('others');
},
update(it, params) {
Object.keys(params).forEach(function(key) {
if(params[key]!==undefined) {
it.set(key,params[key]);
}
});
it.save();
this.transitionTo('it ');
},
update(health, params) {
Object.keys(params).forEach(function(key) {
if(params[key]!==undefined) {
health.set(key,params[key]);
}
});
health.save();
this.transitionTo('health');
}

>>>>>>> f7f0bca25582d26560c6ad5dbed7cbbb4a9b1a9a
  }
});
