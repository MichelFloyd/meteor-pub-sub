// Create 1000 dummy documents, one per second, to highlight reactivity
import {  Meteor } from 'meteor/meteor';
import Documents from '/imports/api/documents/documents';
import RelatedDocuments from '/imports/api/relatedDocuments/relatedDocuments';

Documents.remove({}); // start with a blank slate
let i = 0, sequence = 0;
const interval = Meteor.setInterval(()=>{
  const now = new Date();
  const documentId = Documents.insert({ title: "Document No. " + i, body: "Inserted at " + now, createdAt: now });
  i++;
  const nSubDocs = Math.round(5*Math.random()); // generate a random number of subdocs - 0-5
  for (let j=0; j<nSubDocs; j++){
    RelatedDocuments.insert({sequence, documentId});
    sequence++;
  }
  if ( i >= 1000 ) Meteor.clearInterval(interval);
},1000);
