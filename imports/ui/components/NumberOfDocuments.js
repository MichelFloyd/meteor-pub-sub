import React from 'react';

const NumberOfDocuments = ({n}) => (<span>{n}</span>);

NumberOfDocuments.propTypes = {
  n: React.PropTypes.number,
};

export default NumberOfDocuments;
