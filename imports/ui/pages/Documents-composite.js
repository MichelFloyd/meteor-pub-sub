import React from 'react';
import { Row, Col, Button, Alert } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList-composite';
import NumberOfDocuments from '../containers/NumberOfDocuments';

const Documents = () => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <Alert>This is a reactive list which shows all the items in the <em>Documents</em> collection along with the
          count of related documents published via publish-composite. This count should vary between 0 and 5.
          The server is adding a new document every second, up to 1000 documents. Click on any document to load a
          detailed view which will display more fields for that single document along with a list of related documents,
          i.e. a class master-detail view.
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
