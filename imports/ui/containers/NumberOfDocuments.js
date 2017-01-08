import { composeWithTracker } from 'react-komposer';
import Documents from '../../api/documents/documents.js';
import NumberOfDocuments from '../components/NumberOfDocuments';

const composer = (params, onData) => {
  const n = Documents.find().count();
  onData(null, {n});
};

export default composeWithTracker(composer)(NumberOfDocuments);
