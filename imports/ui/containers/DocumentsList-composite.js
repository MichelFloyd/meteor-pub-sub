import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Documents from '/imports/api/documents/documents';
import RelatedDocuments from '/imports/api/relatedDocuments/relatedDocuments';
import DocumentsList from '../components/DocumentsList-composite';
import Loading from '../components/Loading';

const n = 10; // the number of documents to show in the list

// as the publication is outsider the composer this subscription will live on when the component is unmounted
const subscription = Meteor.subscribe('documents.withRelated',n);

const composer = (params, onData) => {
  if (subscription.ready()) {
    /*
     in this example we take the approach of augmenting the array of documents with the count of the related
     documents so the whole thing can be passed off to the component as a single array
     */
    const documents = Documents.find({},{sort: {createdAt: -1}, limit: n}).map(doc=>{
      doc.countRelated = RelatedDocuments.find({documentId: doc._id}).count();
      return doc;
    });
    onData(null, { documents });
  }
};

export default composeWithTracker(composer, Loading)(DocumentsList);
