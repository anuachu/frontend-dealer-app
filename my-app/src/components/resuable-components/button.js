import React from 'react';

// Button Component
const Button = ({ label, onClick, className }) => (
  <button
    style={{
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: '8px 16px',
      cursor: 'pointer',
      marginBottom: '15px',
      width: '300px',
      borderRadius: '30px',
    }}
    onClick={onClick}
    className={className}
  >
    {label}
  </button>
);

export default Button;
