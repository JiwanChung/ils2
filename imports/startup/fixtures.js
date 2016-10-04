import { Meteor } from 'meteor/meteor';
import { Persons } from '../api/persons';

Meteor.startup(() => {
  if (Persons.find().count() === 0) {
    const persons = [{
      'name': 'test1',
      'description': '연세대'
    }, {
      'name': 'test2',
      'description': '법학연구원'
    }, {
      'name': 'test3',
      'description': '광복관'
    }];
 
    persons.forEach((person) => {
      Persons.insert(person)
    });
  }
});