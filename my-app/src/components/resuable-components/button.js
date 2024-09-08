import React from 'react';

const Button = ({ label, onClick, className }) => (
  <button
    style={{
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '15px',
      borderRadius: '30px',
    }}
    onClick={onClick}
    className={className}
  >
    {label}
  </button>
);

export default Button;
