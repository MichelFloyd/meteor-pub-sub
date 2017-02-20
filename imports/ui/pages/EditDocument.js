import React from 'react';
import DocumentEditor from '../components/DocumentEditor';
import NotFound from '../../ui/pages/NotFound';

const EditDocument = ({ doc }) => (
  <div>
    { doc ?
      <div className="EditDocument">
        <h4 className="page-header">Editing "{ doc.title }"</h4>
        <DocumentEditor doc={ doc }/>
      </div>
    :
      <NotFound/>
    }
  </div>
);

EditDocument.propTypes = {
  doc: React.PropTypes.object,
};

export default EditDocument;
