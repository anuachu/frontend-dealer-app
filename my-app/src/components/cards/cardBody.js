import React from 'react';

const CardBody = ({ children }) => (
  <div className='card-body' style={{ 
    marginBottom: '16px',
    paddingLeft: '16px',
    paddingRight: '16px',
    textAlign: 'left',
    color: 'gray',
  }}>{children}</div>
);

export default CardBody;
