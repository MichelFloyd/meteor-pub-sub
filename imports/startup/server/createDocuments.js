// Create 1000 dummy documents, one per second, to highlight reactivity
import {  Meteor } from 'meteor/meteor';
import Documents from '/imports/api/documents/documents';

Documents.remove({}); // start with a blank slate
let i = 0;
const interval = Meteor.setInterval(()=>{
  const now = new Date();
  Documents.insert({ title: "Document No. " + i, body: "Inserted at " + now, createdAt: now });
  i++;
  if ( i >= 1000 ) Meteor.clearInterval(interval);
},1000);
