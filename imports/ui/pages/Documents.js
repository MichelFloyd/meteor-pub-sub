import React from 'react';
import { Row, Col, Button, Alert } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';
import NumberOfDocuments from '../containers/NumberOfDocuments.js';

const Documents = () => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <Alert>This is a basic reactive list which shows all the items in the <em>Documents</em> collection, sorted by
          title. The server is adding a new document every second, up to 1000 documents. Click on any document to load
          a detailed view which will display more fields for that single document.
        </Alert>
        <div className="page-header clearfix">
          <h4 className="pull-left"><NumberOfDocuments />&nbsp;Documents</h4>
          <Button
            bsStyle="success"
            className="pull-right"
            href="/documents/new"
          >New Document</Button>
        </div>
        <DocumentsList />
      </Col>
    </Row>
  </div>
);

export default Documents;
