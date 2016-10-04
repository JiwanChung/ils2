import { Mongo } from 'meteor/mongo';

export const Persons = new Mongo.Collection('persons');

Persons.allow({
  insert(userId, person) {
    return userId && person.owner === userId;
  },
  update(userId, person, fields, modifier) {
    return userId && person.owner === userId;
  },
  remove(userId, person) {
    return userId && person.owner === userId;
  }
});