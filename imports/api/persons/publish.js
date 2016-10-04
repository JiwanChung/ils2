import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts'; 

import { Persons } from './collection';
 
if (Meteor.isServer) {
  Meteor.publish('persons', function(options, searchString) {
    const selector = {
      $or: [{
        // the public persons
        $and: [{
          public: true
        }, {
          public: {
            $exists: true
          }
        }]
      }, {
        // when logged in user is the owner
        $and: [{
          owner: this.userId
        }, {
          owner: {
            $exists: true
          }
        }]
      }]
    };

    if (typeof searchString === 'string' && searchString.length) {
      selector.name = {
        $regex: `.*${searchString}.*`,
        $options : 'i'
      };
    }

    Counts.publish(this, 'numberOfPersons', Persons.find(selector), {
      noReady:true
    })
 
    return Persons.find(selector, options);
  });
}