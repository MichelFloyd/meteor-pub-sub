import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents';
import DocumentsList from '../components/DocumentsList';
import Loading from '../components/Loading';


const composer = (params, onData) => {
  const subscription = Meteor.subscribe('documents.list'); // as it is inside the composer this subscription will stop when the component is unmounted
  if (subscription.ready()) {
    const documents = Documents.find({},{sort: {title: 1}}).fetch();
    onData(null, { documents });
  }
};

export default composeWithTracker(composer, Loading)(DocumentsList);
