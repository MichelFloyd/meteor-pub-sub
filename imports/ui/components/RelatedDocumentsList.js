import React, { Component, PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import RelatedDocuments from '/imports/api/relatedDocuments/relatedDocuments';

export class RelatedDocumentsList extends Component {
  fetch() {
    return RelatedDocuments.find({documentId: this.props.documentId}).fetch();
  }

  render() {
    if (this.fetch().length > 0){
      return (
        <ListGroup className="DocumentsList">
          { this.fetch().map(({ _id, sequence }) => (
            <ListGroupItem key={ _id }>{ sequence }</ListGroupItem>
          )) }
        </ListGroup>
      );
    } else {
      return (
        <Alert bsStyle="warning">No related documents yet.</Alert>
      );
    }
  }
}

RelatedDocumentsList.propTypes = {
  documentId: React.PropTypes.string.isRequired,
};
