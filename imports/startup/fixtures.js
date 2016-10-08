import { Meteor } from 'meteor/meteor';
import { Persons } from '../api/persons';
import { Links } from '../api/links';

Meteor.startup(() => {
  if (Persons.find().count() === 0) {
    const persons = [{
      'name': 'test1',
      'description': '연세대',
      'image': '#link1'
    }, {
      'name': 'test2',
      'description': '법학연구원',
      'image': '#link2'
    }, {
      'name': 'test3',
      'description': '광복관',
      'image': '#link3'
    }];
 
    persons.forEach((person) => {
      Persons.insert(person)
    });
  }
  if (Links.find().count() === 0) {
    const links = [{
      'name': 'korea',
      'content': [
        {'name': '임의법학대학원',
          'link': '#ddsd'}
      ]
    },
    {
      'name': 'america',
      'content': [
        {'name': 'example',
          'link': '#ddsd'}
      ]
    },
    {
      'name': 'japan',
      'content': [
        {'name': 'Nagoya',
          'link': '#ddsd'}
      ]
    },
    {
      'name': 'organization',
      'content': [
        {'name': '헌법재판소',
          'link': '#ddsd'}
      ]
    },
    {
      'name': 'else',
      'content': [
        {'name': '나머지1',
          'link': '#ddsd'}
      ]
    }];
 
    links.forEach((link) => {
      Links.insert(link)
    });
  }
});