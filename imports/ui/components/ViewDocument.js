import React from 'react';
import { ButtonToolbar, ButtonGroup, Button, Alert } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeDocument } from '../../api/documents/methods';
import { RelatedDocumentsList } from './RelatedDocumentsList';
import NotFound from '../../ui/pages/NotFound';

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeDocument.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
        browserHistory.push('/documents');
      }
    });
  }
};

const ViewDocument = ({ doc }) => {
  if (!doc) return <NotFound />;
  return (
    <div className="ViewDocument">
      <Alert>
        This shows a single document. The publication that this view subscribes to includes the <em>body</em> and <em>createdAt</em> keys which are not included in the list view publication.
      </Alert>
      <div className="page-header clearfix">
        <h4 className="pull-left">{ doc.title }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button href={`/documents/${doc._id}/edit`}>Edit</Button>
            <Button onClick={ () => handleRemove(doc._id) } className="text-danger">Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      _id: <em>{  doc._id }</em><br/>
      body: <em>{ doc.body }</em><br/>
      createdAt: <em>{ doc.createdAt && doc.createdAt.toLocaleString() }</em><br/>
      <RelatedDocumentsList documentId={ doc._id }/>
    </div>
  );
};

ViewDocument.propTypes = {
  doc: React.PropTypes.object,
};

export default ViewDocument;
