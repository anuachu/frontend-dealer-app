import React, { useState } from 'react';
import './card.css'; 

const Card = ({ children, isActive, onClick }) => {
  return (
    <div
      className={`card ${isActive ? 'active' : ''}`}
      onClick={onClick}
      style={{
        border: isActive ? '2px solid #007BFF' : '1px solid #ccc',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease', 
        cursor: 'pointer', 
        borderRadius: '12px', 
        boxShadow: isActive
          ? '0 8px 16px rgba(0, 123, 255, 0.4)'
          : '0 6px 12px rgba(0, 0, 0, 0.2)', 
        flex: 1,
      }}
    >
      {children}
    </div>
  );
};

export default Card;