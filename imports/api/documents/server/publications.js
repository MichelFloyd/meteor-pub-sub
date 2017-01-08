import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../documents';

// note that this publication returns a subset of keys for all documents - only what is displayed in the list view
Meteor.publish('documents.list', () => Documents.find({},{fields: {title: 1}}));

// while this one includes all keys, but for a single document at a time
Meteor.publish('documents.view', (_id) => {
  check(_id, String);
  return Documents.find(_id);
});

Meteor.publishComposite('recentDocumentsWithRelated',{
  find(){ Documents.find({}, {sort: {createdAt: -1}, limit: 10})},
  children: [
    {
      find(doc){ RelatedDocuments.find({documentId: doc._id})}
    }
  ]
});
