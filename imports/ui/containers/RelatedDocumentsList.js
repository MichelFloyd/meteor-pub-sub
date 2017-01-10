import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import RelatedDocuments from '../../api/relatedDocuments/relatedDocuments';
import DocumentsList from '../components/DocumentsList';
import Loading from '../components/Loading';


const composer = (params, onData) => {
  const subscription = Meteor.subscribe('documents.view.withRelated',params._id); // as it is inside the composer this subscription will stop when the component is unmounted
  if (subscription.ready()) {
    const rDocs = RelatedDocuments.find({documentId: params._id},{sort: {sequence: 1}}).fetch();
    onData(null, { rDocs });
  }
};

export default composeWithTracker(composer, Loading)(DocumentsList);
