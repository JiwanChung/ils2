import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

Links.allow({
  insert(userId, link) {
    return userId && link.owner === userId;
  },
  update(userId, link, fields, modifier) {
    return userId && link.owner === userId;
  },
  remove(userId, link) {
    return userId && link.owner === userId;
  }
});