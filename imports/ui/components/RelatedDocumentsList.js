/* Here we are assuming that the list of related documents cannot change while the user is viewing the parent
 * document. This allows us to use a non-reactive react component instead of using react-komposer.
 * Also the parent document's subscription is already taking care of loading the related (child) documents so
 * we don't have to wait for the subscription to be ready here, that's already been taken care of.
 */
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
