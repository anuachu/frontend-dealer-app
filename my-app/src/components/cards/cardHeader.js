import React from 'react';

const CardHeader = ({ title }) => (
  <h2 style={{ fontSize: '1.25rem',
    textAlign: "left",
    paddingLeft: '16px',
    paddingRight: '16px', }}>{title}</h2>
);

export default CardHeader;