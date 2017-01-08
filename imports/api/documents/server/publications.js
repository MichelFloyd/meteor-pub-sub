import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../documents';

// note that this publication returns a subset of keys for all documents
Meteor.publish('documents.list', () => Documents.find({},{fields: {title: 1, body: 1}}));

// while this one includes all keys, but for a single document at a time
Meteor.publish('documents.view', (_id) => {
  check(_id, String);
  return Documents.find(_id);
});
