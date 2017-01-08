// The RelatedDocuments collection has an m:1 relationship with the Documents collection
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const RelatedDocuments = new Mongo.Collection('RelatedDocuments');

RelatedDocuments.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

RelatedDocuments.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

RelatedDocuments.schema = new SimpleSchema({
  sequence: {
    type: Number,
    label: 'Sequence Number',
  },
  documentId: {
    type: String,
    label: 'Key of the related Document collection doc',
  },
});

RelatedDocuments.attachSchema(RelatedDocuments.schema);
export default RelatedDocuments;
