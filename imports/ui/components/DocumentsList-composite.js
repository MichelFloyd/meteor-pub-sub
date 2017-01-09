import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="DocumentsList">
    {documents.map(({ _id, title, countRelated }) => (
      <ListGroupItem key={ _id } href={`/documents/${_id}`}>
        { title }
        { countRelated ? ' - ' + countRelated + ' related documents' : '' }
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
