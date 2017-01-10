import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="DocumentsList">
    {documents.map(({ _id, sequence }) => (
      <ListGroupItem key={ _id } href={`/relatedDocuments/${_id}`}>{ sequence }</ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No related documents yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
