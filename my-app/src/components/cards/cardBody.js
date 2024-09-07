import React from 'react';

const CardBody = ({ children }) => (
  <div style={{ 
    marginBottom: '16px',
    paddingLeft: '16px',
    paddingRight: '16px',
    minHeight: '100px',
    textAlign: 'left',
    color: 'gray',
  }}>{children}</div>
);

export default CardBody;
