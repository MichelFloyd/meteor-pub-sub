import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../documents';
import RelatedDocuments from '/imports/api/relatedDocuments/relatedDocuments';

// note that this publication returns a subset of keys for all documents - only what is displayed in the list view
Meteor.publish('documents.list', () => Documents.find({},{fields: {title: 1}}));

// while this one includes all keys, but for a single document at a time
Meteor.publish('documents.view', (_id) => {
  check(_id, String);
  return Documents.find(_id);
});

Meteor.publish('documents.view.withRelated', (_id) => {
  check(_id, String);
  // in this simple case we can just return an array of cursors without having to resort to publishComposite.
  // The first is the one document and the second is the cursor of RelatedDocuments
  return [ Documents.find(_id), RelatedDocuments.find({documentId: _id})];
});

Meteor.publishComposite('documents.withRelated', (n) => {
  return {
    find(){
      check(n, Number);
      return Documents.find({}, {sort: {createdAt: -1}, limit: n});
    },
    children: [
      {
        find({_id}){
          return RelatedDocuments.find({documentId: _id})
        }
      }
    ]
  }
});
